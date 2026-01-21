-- Add explicit policy to deny anonymous/public SELECT access
-- This ensures only authenticated admins can read sensitive signup data
-- The existing "Admins can read all signups" policy grants SELECT to admins
-- This policy explicitly blocks the anon role from reading

CREATE POLICY "Deny anonymous read access" 
ON public.waitlist_signups 
FOR SELECT 
TO anon
USING (false);