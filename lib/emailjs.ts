import emailjs from "@emailjs/browser";

// TODO: Replace with your EmailJS serviceId, templateId and publicKey
const SERVICE_ID = "your_service_id";
const PUBLIC_KEY = "your_public_key";

const TEMPLATES = {
  contact: "your_contact_template_id",
  tableBooking: "your_table_booking_template_id",
  privateHire: "your_private_hire_template_id",
} as const;

export type TemplateKey = keyof typeof TEMPLATES;

export async function sendEmail(
  template: TemplateKey,
  templateParams: Record<string, string>
): Promise<void> {
  await emailjs.send(
    SERVICE_ID,
    TEMPLATES[template],
    templateParams,
    PUBLIC_KEY
  );
}
