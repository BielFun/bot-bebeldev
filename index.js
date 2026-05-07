const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const express = require('express');
const app = express();
const client = new Client();

client.on('qr', qr => {
    console.log('QR CODE AQUI BIEL:');
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('BebelDev👑 ONLINE!');
});

client.on('message', msg => {
    if(msg.body == '!promo') {
        msg.reply('🚀 Promo do BebelDev👑: Teclado Mecânico R$99 https://mercadolivre.com');
    }
});

client.initialize();
app.get('/', (req, res) => res.send('Bot BebelDev👑 rodando'));
app.listen(process.env.PORT || 3000);
