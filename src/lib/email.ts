import emailjs from "@emailjs/browser";

export interface SendEmailParams {
  from_name: string;
  from_phone: string;
  from_email?: string;
  booking_date?: string;
  booking_time?: string;
  message?: string;
  form_source: string;
}

export interface SendEmailResult {
  success: boolean;
  error?: string;
}

// User credentials configured
const DEFAULT_SERVICE_ID = "service_6bh5bb3";
const DEFAULT_TEMPLATE_ID = "template_jby105u";
const DEFAULT_PUBLIC_KEY = "WYkmzX7FTHiGdKjvE";

export async function sendLeadEmail(params: SendEmailParams): Promise<SendEmailResult> {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || DEFAULT_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || DEFAULT_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || DEFAULT_PUBLIC_KEY;

  const formattedDate = params.booking_date || new Date().toLocaleDateString("en-IN", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric"
  });

  const formattedTime = params.booking_time || "11:00 AM";

  const templateParams = {
    // Primary keys matching template variables
    from_name: params.from_name || "N/A",
    from_phone: params.from_phone || "N/A",
    from_email: params.from_email || "N/A",
    booking_date: formattedDate,
    booking_time: formattedTime,
    message: params.message || "N/A",
    form_source: params.form_source || "Website Form",
    current_time: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),

    // Aliases in case EmailJS template fields use {{name}}, {{phone}}, {{email}}
    name: params.from_name || "N/A",
    phone: params.from_phone || "N/A",
    email: params.from_email || "N/A",
    time: formattedTime,
  };

  try {
    console.log("Sending EmailJS request with Service ID:", serviceId, "Template ID:", templateId);
    
    // Initialize Public Key explicitly
    emailjs.init(publicKey);

    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey
    );

    console.log("EmailJS Sent Successfully!", response.status, response.text);
    return { success: true };
  } catch (err: any) {
    const errorMsg = err?.text || err?.message || JSON.stringify(err);
    console.error("EmailJS Error detail:", errorMsg);

    return {
      success: false,
      error: errorMsg
    };
  }
}
