const { webkit } = require('playwright');
require('dotenv').config();
const nodemailer = require('nodemailer');
(async () => {

    const transporter = nodemailer.createTransport({
        host: process.env.host,
        port: parseInt(process.env.port),
        secure: false,
        auth: {
            user: process.env.user,
            pass: process.env.pass,
        },
        tls: {
            rejectUnauthorized: false
        },
    });

    const browser = await webkit.launch();
    const page = await browser.newPage();
    await page.goto(process.env.base_url);
    const value = await page.evaluate(() => {
        const price = document.querySelector("#price").textContent;
        const validprice = parseFloat(price.slice(3).replace(',', '.'));
        return validprice;
    });

    if (value < parseFloat(process.env.expected_price)) {
        await transporter.sendMail({
            text: `The product reached the price of R$ ${value}!`,
            subject: `Price Update`,
            from: 'Amazon Price Bot <`process.env.user`>',
            to: process.env.recipient,
        });
    }
    await browser.close();
})();