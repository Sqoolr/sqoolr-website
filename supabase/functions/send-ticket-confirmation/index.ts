
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { ticketNumber, name, email } = await req.json();

    const emailResponse = await resend.emails.send({
      from: "Sqoolr Support <support@sqoolr.ng>",
      to: [email],
      subject: `Support Ticket Confirmation - ${ticketNumber}`,
      html: `
        <h1>Support Ticket Confirmation</h1>
        <p>Dear ${name},</p>
        <p>Thank you for contacting Sqoolr Support. Your ticket has been received and our team will get back to you soon.</p>
        <p><strong>Ticket Number:</strong> ${ticketNumber}</p>
        <p><strong>Track your ticket:</strong> <a href="https://sqoolr.ng/help/ticket/${ticketNumber}">Click here</a></p>
        <p>Best regards,<br>The Sqoolr Support Team</p>
      `,
    });

    return new Response(JSON.stringify(emailResponse), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Error sending confirmation email:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});
