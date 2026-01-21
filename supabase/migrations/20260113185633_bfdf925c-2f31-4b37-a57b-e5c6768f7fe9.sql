-- Create waitlist_signups table
CREATE TABLE public.waitlist_signups (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  contact_name TEXT NOT NULL,
  establishment_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  address_line1 TEXT NOT NULL,
  address_line2 TEXT,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  zip_code TEXT NOT NULL,
  how_heard_about_us TEXT,
  beta_feedback TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.waitlist_signups ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public signup form)
CREATE POLICY "Anyone can submit waitlist signup"
ON public.waitlist_signups
FOR INSERT
WITH CHECK (true);

-- Only service role can read (admin access via edge functions)
CREATE POLICY "Service role can read signups"
ON public.waitlist_signups
FOR SELECT
USING (false);