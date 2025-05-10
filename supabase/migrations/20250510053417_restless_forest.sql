-- Insert user data for maciejmaterski@gmail.com
INSERT INTO users (id, email, full_name, company, role)
SELECT 
  auth.uid(),
  'maciejmaterski@gmail.com',
  'Maciej Materski',
  'Personal Account',
  'Owner'
FROM auth.users
WHERE email = 'maciejmaterski@gmail.com'
ON CONFLICT DO NOTHING;

-- Insert test project for the user
INSERT INTO projects (id, user_id, name, status)
SELECT 
  gen_random_uuid(),
  auth.uid(),
  'Marketing Campaign 2024',
  'active'
FROM auth.users
WHERE email = 'maciejmaterski@gmail.com'
ON CONFLICT DO NOTHING;

-- Insert analytics data
INSERT INTO analytics (project_id, date, impressions, clicks, conversions, spend, revenue)
SELECT 
  p.id,
  generate_series(
    CURRENT_DATE - INTERVAL '30 days',
    CURRENT_DATE,
    '1 day'
  )::date as date,
  floor(random() * 2000 + 1000)::int as impressions,
  floor(random() * 100 + 50)::int as clicks,
  floor(random() * 20 + 5)::int as conversions,
  (random() * 300 + 150)::numeric(10,2) as spend,
  (random() * 900 + 450)::numeric(10,2) as revenue
FROM projects p
JOIN auth.users u ON p.user_id = u.id
WHERE u.email = 'maciejmaterski@gmail.com'
ON CONFLICT DO NOTHING;