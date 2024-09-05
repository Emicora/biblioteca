require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3002; // Cambia el puerto aquí

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Ruta para enviar el correo de recuperación
app.post('/recuperar', (req, res) => {
    const { email } = req.body;

    // Configura el transporte de Nodemailer
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER, // Usar variable de entorno
            pass: process.env.EMAIL_PASS // Usar variable de entorno
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER, // Usar variable de entorno
        to: email,
        subject: 'Recuperación de Contraseña',
        text: `Haz clic en el siguiente enlace para recuperar tu contraseña: http://localhost:${port}/reset-password?email=${encodeURIComponent(email)}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error al enviar el correo:', error);
            return res.status(500).send(error.toString());
        }
        console.log('Correo enviado:', info.response);
        res.status(200).send('Correo de recuperación enviado');
    });
});

// Ruta para mostrar el formulario de restablecimiento de contraseña
app.get('/reset-password', (req, res) => {
    const { email } = req.query;
    res.send(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Restablecer Contraseña</title>
            <link rel="stylesheet" href="login.css">
        </head>
        <body>
            <div id="contenedor">
                <div id="central">
                    <div id="login">
                        <div class="titulo">
                            Restablecer Contraseña
                        </div>
                        <form id="resetform" action="/reset-password" method="POST">
                            <input type="hidden" name="email" value="${email}">
                            <input type="password" name="newPassword" placeholder="Nueva Contraseña" required>
                            <button type="submit" title="Restablecer" name="Restablecer">Restablecer</button>
                        </form>
                        <div class="pie-form">
                            <a href="login.html">Volver al Login</a>
                        </div>
                    </div>
                </div>
            </div>
        </body>
        </html>
    `);
});

// Ruta para manejar la solicitud de restablecimiento de contraseña
app.post('/reset-password', (req, res) => {
    const { email, newPassword } = req.body;

    // Aquí deberías actualizar la contraseña del usuario en la base de datos
    // Este es solo un ejemplo, asegúrate de implementar la lógica de actualización de contraseña

    console.log(`Contraseña actualizada para el usuario: ${email}`);
    res.status(200).send('Contraseña actualizada correctamente');
});

// Ruta para manejar la solicitud de registro
app.post('/registro', (req, res) => {
    const { usuario, email, password } = req.body;

    // Aquí deberías guardar el nuevo usuario en la base de datos
    // Este es solo un ejemplo, asegúrate de implementar la lógica de registro

    console.log(`Nuevo usuario registrado: ${usuario}, ${email}`);
    res.status(200).send('Usuario registrado correctamente');
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});