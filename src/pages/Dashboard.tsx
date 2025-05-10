import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { BarChart, DollarSign, Users, TrendingUp, Calendar } from 'lucide-react';
import { supabase } from '../utils/supabase';
import Button from '../components/ui/Button';

interface Project {
  id: string;
  name: string;
  status: string;
}

interface Analytics {
  date: string;
  impressions: number;
  clicks: number;
  conversions: number;
  spend: number;
  revenue: number;
}

const Dashboard: React.FC = () => {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState<Project[]>([]);
  const [analytics, setAnalytics] = useState<Analytics[]>([]);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) loadData();
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) loadData();
    });

    return () => subscription.unsubscribe();
  }, []);

  const loadData = async () => {
    try {
      // Load projects
      const { data: projectsData } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });

      if (projectsData) setProjects(projectsData);

      // Load analytics
      if (projectsData && projectsData.length > 0) {
        const { data: analyticsData } = await supabase
          .from('analytics')
          .select('*')
          .eq('project_id', projectsData[0].id)
          .order('date', { ascending: false })
          .limit(30);

        if (analyticsData) setAnalytics(analyticsData);
      }
    } catch (error) {
      console.error('Error loading dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!session) {
    return <Navigate to="/client-login" replace />;
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-dark-900 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-electric-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  // Calculate totals from analytics
  const totals = analytics.reduce((acc, curr) => ({
    revenue: acc.revenue + (curr.revenue || 0),
    conversions: acc.conversions + (curr.conversions || 0),
    roas: curr.spend > 0 ? (curr.revenue / curr.spend) : 0,
    ctr: curr.impressions > 0 ? ((curr.clicks / curr.impressions) * 100) : 0
  }), { revenue: 0, conversions: 0, roas: 0, ctr: 0 });

  const averageRoas = (totals.roas / analytics.length).toFixed(1);
  const averageCtr = (totals.ctr / analytics.length).toFixed(1);

  return (
    <div className="min-h-screen bg-dark-900 pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-light-900">Dashboard</h1>
            <p className="text-light-600">Welcome back, {session.user.email}</p>
          </div>
          <Button 
            to="/contact"
            variant="primary"
          >
            Schedule Call
          </Button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-dark-800 border border-dark-600 rounded-xl p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-electric-500/10 rounded-xl flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-electric-500" />
              </div>
              <div>
                <p className="text-light-600">Monthly Revenue</p>
                <h3 className="text-2xl font-bold text-light-900">
                  ${totals.revenue.toFixed(2)}
                </h3>
              </div>
            </div>
          </div>

          <div className="bg-dark-800 border border-dark-600 rounded-xl p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-electric-500/10 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-electric-500" />
              </div>
              <div>
                <p className="text-light-600">Conversions</p>
                <h3 className="text-2xl font-bold text-light-900">
                  {totals.conversions}
                </h3>
              </div>
            </div>
          </div>

          <div className="bg-dark-800 border border-dark-600 rounded-xl p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-electric-500/10 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-electric-500" />
              </div>
              <div>
                <p className="text-light-600">ROAS</p>
                <h3 className="text-2xl font-bold text-light-900">{averageRoas}x</h3>
              </div>
            </div>
          </div>

          <div className="bg-dark-800 border border-dark-600 rounded-xl p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-electric-500/10 rounded-xl flex items-center justify-center">
                <BarChart className="w-6 h-6 text-electric-500" />
              </div>
              <div>
                <p className="text-light-600">CTR</p>
                <h3 className="text-2xl font-bold text-light-900">{averageCtr}%</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="bg-dark-800 border border-dark-600 rounded-xl p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-light-900">Active Projects</h2>
            <Button variant="outline" size="sm">View All</Button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-dark-600">
                  <th className="text-left py-3 px-4 text-light-600">Project</th>
                  <th className="text-left py-3 px-4 text-light-600">Status</th>
                  <th className="text-left py-3 px-4 text-light-600">Last Updated</th>
                  <th className="text-right py-3 px-4 text-light-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project) => (
                  <tr key={project.id} className="border-b border-dark-600">
                    <td className="py-3 px-4 text-light-900">{project.name}</td>
                    <td className="py-3 px-4">
                      <span className="px-3 py-1 bg-electric-500/10 text-electric-500 rounded-full text-sm">
                        {project.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-light-600">
                      {new Date().toLocaleDateString()}
                    </td>
                    <td className="py-3 px-4 text-right">
                      <Button variant="text" size="sm">View Details</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Calendar */}
        <div className="bg-dark-800 border border-dark-600 rounded-xl p-6">
          <div className="flex items-center gap-4 mb-6">
            <Calendar className="w-6 h-6 text-electric-500" />
            <h2 className="text-xl font-bold text-light-900">Upcoming Meetings</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-dark-700 rounded-lg">
              <div>
                <h3 className="font-medium text-light-900">Weekly Strategy Call</h3>
                <p className="text-light-600">Tomorrow at 2:00 PM</p>
              </div>
              <Button variant="outline" size="sm">Join Call</Button>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-dark-700 rounded-lg">
              <div>
                <h3 className="font-medium text-light-900">Campaign Review</h3>
                <p className="text-light-600">Friday at 11:00 AM</p>
              </div>
              <Button variant="outline" size="sm">Join Call</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;