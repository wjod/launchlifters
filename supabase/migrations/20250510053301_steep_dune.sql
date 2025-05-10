/*
  # Add test data for dashboard demo
  
  1. Test Data
    - Add test project
    - Add test analytics data
*/

-- Insert test project
INSERT INTO projects (id, user_id, name, status)
SELECT 
  '12345678-1234-1234-1234-123456789012'::uuid,
  auth.uid(),
  'Test Marketing Campaign',
  'active'
FROM auth.users
WHERE email = 'test@example.com'
ON CONFLICT DO NOTHING;

-- Insert test analytics data
INSERT INTO analytics (project_id, date, impressions, clicks, conversions, spend, revenue)
VALUES 
  ('12345678-1234-1234-1234-123456789012'::uuid, CURRENT_DATE - INTERVAL '1 day', 1500, 75, 12, 250.00, 750.00),
  ('12345678-1234-1234-1234-123456789012'::uuid, CURRENT_DATE - INTERVAL '2 days', 1200, 60, 10, 200.00, 600.00),
  ('12345678-1234-1234-1234-123456789012'::uuid, CURRENT_DATE - INTERVAL '3 days', 1800, 90, 15, 300.00, 900.00)
ON CONFLICT DO NOTHING;