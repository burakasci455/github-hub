
CREATE TABLE public.courses (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  starts_at TIMESTAMPTZ NOT NULL,
  duration_minutes INT NOT NULL DEFAULT 90,
  capacity INT NOT NULL DEFAULT 8,
  format TEXT NOT NULL DEFAULT 'yuz-yuze',
  location TEXT,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.courses TO anon, authenticated;
GRANT ALL ON public.courses TO service_role;
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view active courses" ON public.courses FOR SELECT USING (is_active = true);

CREATE TABLE public.course_registrations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  course_id UUID NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT ALL ON public.course_registrations TO service_role;
ALTER TABLE public.course_registrations ENABLE ROW LEVEL SECURITY;

CREATE TABLE public.contact_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT ALL ON public.contact_messages TO service_role;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

INSERT INTO public.courses (title, description, starts_at, duration_minutes, capacity, format, location) VALUES
  ('Karakalem Temelleri — Başlangıç Grubu', 'Karakalemde ışık, gölge, ton ve form algısını sıfırdan öğrenmek isteyenler için 4 haftalık grup atölyesi. Tüm malzemeler atölyede sağlanır.', now() + interval '12 days', 120, 8, 'yuz-yuze', 'Sakarya, Adapazarı Atölye'),
  ('Portre Atölyesi — İleri Seviye', 'Yüz anatomisi, ifade ve karakter çalışmalarına odaklanan ileri seviye portre atölyesi. Temel karakalem bilgisi gerekir.', now() + interval '20 days', 150, 6, 'yuz-yuze', 'Sakarya, Adapazarı Atölye'),
  ('Online Karakalem — Cumartesi Grubu', 'Evinden çıkmadan canlı bağlantıyla katılabileceğin haftalık online grup ders. Tüm seviyelere açık.', now() + interval '7 days', 90, 12, 'online', 'Zoom üzerinden canlı');
