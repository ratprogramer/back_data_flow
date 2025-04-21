import nodemailer from "nodemailer";

export async function sendEmail({ email, dni, contraseña }) {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "dataflowanalytics8@gmail.com",
            pass: "yoxn pghd chlo ltjj" // O una contraseña de aplicación si tienes 2FA activado
        }
    });

    const mailOptions = {
        from: "dataflowanalytics8@gmail.com",
        to: email,
    subject: "Tu cuenta ha sido creada con éxito en DATA FLOW ANALYTICS",
        html: `
            <h1>¡Bienvenido al sistema!</h1>
            <p>Tu cuenta ha sido registrada correctamente.</p>
            <p>Ingresa con tu DNI como usuario</p>
            <p><strong>Contraseña:</strong> ${contraseña}</p>
            <p>Por favor, cambia tu contraseña tras iniciar sesión, te amo mucho.</p>
        `
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log("Correo enviado:", info.response);
    } catch (error) {
        console.error("Error al enviar el correo:", error);
    }
}
