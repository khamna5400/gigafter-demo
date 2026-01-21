-- Remove the confusingly named "Service role can read signups" policy
-- This policy applies to the public role (not service role) with USING(false)
-- It's unnecessary since admin-only SELECT policy already properly restricts read access
DROP POLICY IF EXISTS "Service role can read signups" ON public.waitlist_signups;