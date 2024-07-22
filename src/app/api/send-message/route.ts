import nodemailer from "nodemailer";
import { NextResponse, NextRequest } from "next/server";


const sendContactMail = async (
  name: string,
  email: string,
  subject: string,
  message: string
)=> {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "kavnish1245@gmail.com",
      pass: "btak njvp mqfl pyps",
    },
  });

  const mailOptions = {
    from: email, // The sender's email address
    to: "kavnish1245@gmail.com", // Your email address
    subject: subject,
    text: `
      You have received a new message from your website contact form.
      
      Here are the details:
      Name: ${name}
      Email: ${email}
      Subject: ${subject}
      
      Message:
      ${message}
    `,
  };

  try {
    await new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (error: any, info: nodemailer.SentMessageInfo) => {
        if (error) {
          console.error("Error sending email", error);
          reject(error);
        } else {
          console.log("Email sent: " + info?.response);
          resolve(info);
        }
      });
    });
    return { success: true, message: `Email sent successfully from ${email}` };
  } catch (error) {
    console.error("Error sending email", error);
    return { success: false, message: "Failed to send email" };
  }
};

export async function POST (req: NextRequest){
    try {
        const { name , email, subject, message} = await req.json();
        const response = await sendContactMail(name, email, subject, message);
        if (response.success) {
            return NextResponse.json({ success: true, message: "Email sent successfully" });

        }else{
            return NextResponse.json({ success: false, message: "Failed to send email" });
        }
        
    } catch (error) {
        console.error("Error sending email", error);
        return NextResponse.json( { success: false, message: "Failed to send email" });
        
    }
}
