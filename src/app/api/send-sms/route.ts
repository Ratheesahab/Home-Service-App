// app/api/send-sms/route.ts
import { NextRequest, NextResponse } from 'next/server';
import twilio from 'twilio';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { phone, message } = body;

    const accountSid = process.env.TWILIO_ACCOUNT_SID!;
    const authToken = process.env.TWILIO_AUTH_TOKEN!;
    const client = twilio(accountSid, authToken);

    const twilioMessage = await client.messages.create({
      body: message,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phone,
    });

    return NextResponse.json({ success: true, sid: twilioMessage.sid });
  } catch (error:any) {
    console.error('SMS send failed:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
