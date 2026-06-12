import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

export type Course = {
  id: string;
  title: string;
  description: string | null;
  starts_at: string;
  duration_minutes: number;
  capacity: number;
  format: string;
  location: string | null;
};

export const listCourses = createServerFn({ method: "GET" }).handler(async () => {
  const { data, error } = await supabaseAdmin
    .from("courses")
    .select("id, title, description, starts_at, duration_minutes, capacity, format, location")
    .eq("is_active", true)
    .order("starts_at", { ascending: true });

  if (error) {
    console.error("listCourses error", error);
    return { courses: [] as Course[] };
  }
  return { courses: (data ?? []) as Course[] };
});

const registrationSchema = z.object({
  course_id: z.string().uuid(),
  full_name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

export const registerForCourse = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => registrationSchema.parse(input))
  .handler(async ({ data }) => {
    const { error } = await supabaseAdmin.from("course_registrations").insert({
      course_id: data.course_id,
      full_name: data.full_name,
      email: data.email,
      phone: data.phone || null,
      message: data.message || null,
    });

    if (error) {
      console.error("registerForCourse error", error);
      throw new Error("Kayıt sırasında bir hata oluştu. Lütfen tekrar deneyin.");
    }
    return { success: true };
  });

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  subject: z.string().trim().max(200).optional().or(z.literal("")),
  message: z.string().trim().min(5).max(2000),
});

export const sendContactMessage = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => contactSchema.parse(input))
  .handler(async ({ data }) => {
    const { error } = await supabaseAdmin.from("contact_messages").insert({
      name: data.name,
      email: data.email,
      subject: data.subject || null,
      message: data.message,
    });

    if (error) {
      console.error("sendContactMessage error", error);
      throw new Error("Mesajınız gönderilemedi. Lütfen tekrar deneyin.");
    }
    return { success: true };
  });
