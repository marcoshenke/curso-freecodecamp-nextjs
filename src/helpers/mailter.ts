import nodemailer from "nodemailer";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";

export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);

    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000,
      });
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashedToken,
        forgotPasswordTokenExpiry: Date.now() + 3600000,
      });
    }

    const transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.USER_MAILER,
        pass: process.env.PASSWORD_MAILER,
      },
    });

    const mailOptions = {
      from: "marcos.henke3@gmail.com",
      to: email,
      subject:
        emailType === "VERIFY" ? "Verifique seu e-mail" : "Resete sua senha",
      html: `<p>Clique <a href="${
        process.env.DOMAIN
      }/verifyemail?token=${hashedToken}">aqui</a> para ${
        emailType === "VERIFY" ? "verifique seu email" : "resete sua senha"
      }
      ou copie e cole o link abaixo no seu navegador. <br> ${
        process.env.DOMAIN
      }/verifyemail?token=${hashedToken}
      </p>`,
    };

    const mailResponse = await transport.sendMail(mailOptions);

    return mailResponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
