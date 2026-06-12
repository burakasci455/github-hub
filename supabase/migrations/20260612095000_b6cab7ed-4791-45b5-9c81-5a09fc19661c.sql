
CREATE POLICY "No client access" ON public.course_registrations FOR SELECT USING (false);
CREATE POLICY "No client access" ON public.contact_messages FOR SELECT USING (false);
