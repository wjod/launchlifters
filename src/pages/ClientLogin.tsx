import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail } from 'lucide-react';
import Button from '../components/ui/Button';
import { signIn } from '../utils/supabase';

const ClientLogin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const result = await signIn(email, password);
    
    if (result.success) {
      navigate('/dashboard');
    } else {
      setError('Invalid email or password');
    }
    
    setIsLoading(false);
  };

  return (
    <section className="min-h-screen bg-dark-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="flex items-center justify-center mb-8">
          <div className="w-12 h-12 bg-electric-500/10 rounded-xl flex items-center justify-center">
            <Lock className="w-6 h-6 text-electric-500" />
          </div>
        </div>

        <div className="bg-dark-800 border border-dark-600 rounded-xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-light-900">Client Portal Login</h2>
            <p className="mt-2 text-light-600">
              Access your campaign dashboard and reports
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-coral-500/10 border border-coral-500 text-coral-500 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-light-600 mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-light-600" />
                </div>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-dark-600 rounded-lg bg-dark-700 text-light-900 placeholder-light-600 focus:outline-none focus:ring-2 focus:ring-electric-500 focus:border-transparent"
                  placeholder="you@company.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-light-600 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-light-600" />
                </div>
                <input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-dark-600 rounded-lg bg-dark-700 text-light-900 placeholder-light-600 focus:outline-none focus:ring-2 focus:ring-electric-500 focus:border-transparent"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-dark-600 bg-dark-700 text-electric-500 focus:ring-electric-500"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-light-600">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="text-electric-500 hover:text-electric-400">
                  Forgot password?
                </a>
              </div>
            </div>

            <Button
              type="submit"
              variant="primary"
              fullWidth
              disabled={isLoading}
            >
              {isLoading ? 'Signing in...' : 'Sign in'}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm">
            <span className="text-light-600">Need access? </span>
            <Button
              to="/contact"
              variant="text"
              className="text-electric-500 hover:text-electric-400"
            >
              Contact your account manager
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogin;