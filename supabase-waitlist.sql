-- Run this in your Supabase project: SQL Editor → New query → Paste → Run

-- 1. Create waitlist table
CREATE TABLE IF NOT EXISTS waitlist (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  name TEXT,
  source TEXT DEFAULT 'landing',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Create index for faster duplicate checks
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist (email);

-- 3. Enable RLS
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- 4. Policies for direct table access (optional; RPC below bypasses these)
DROP POLICY IF EXISTS "Allow anonymous inserts" ON waitlist;
DROP POLICY IF EXISTS "Allow public inserts" ON waitlist;
DROP POLICY IF EXISTS "Allow authenticated read" ON waitlist;
DROP POLICY IF EXISTS "Service role full access" ON waitlist;

CREATE POLICY "Allow anonymous inserts" ON waitlist FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Allow authenticated read" ON waitlist FOR SELECT TO authenticated USING (true);

-- 5. RPC function: bypasses RLS (works when policies fail with anon)
CREATE OR REPLACE FUNCTION public.join_waitlist(p_email TEXT, p_name TEXT DEFAULT NULL)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO waitlist (email, name, source)
  VALUES (p_email, NULLIF(TRIM(COALESCE(p_name, '')), ''), 'landing');
  RETURN json_build_object('ok', true);
EXCEPTION
  WHEN unique_violation THEN
    RETURN json_build_object('ok', false, 'error', 'already_registered');
END;
$$;

-- 6. Allow anon to call the function
GRANT EXECUTE ON FUNCTION public.join_waitlist(TEXT, TEXT) TO anon;
GRANT EXECUTE ON FUNCTION public.join_waitlist(TEXT, TEXT) TO authenticated;
