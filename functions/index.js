const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
admin.initializeApp();


var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'projektizpi@gmail.com',
        pass: 'fakepass666'
    }
});

exports.obrazac= functions.firestore
    .document('noviobrazac2/{noviobrazac2Id}')
    .onCreate((snap, context) => {

        const mailOptions = {
            from: `projektizpi@gmail.com`,
            to: snap.data().email,
            subject: 'CarHealthApp',
            html: `<h1>Potvrda narudžbe</h1>
             <p> <b>Email: </b>${snap.data().email} 
             <b>Ime: </b>${snap.data().ime}
             <b>Prezime: </b>${snap.data().prezime}
             <b>Brtel1: </b>${snap.data().brtel1}
             <b>Brtel2: </b>${snap.data().brtel2}
             <b>Grad: </b>${snap.data().grad}
             <b>Adresa: </b>${snap.data().adresa}
             <b>Zip: </b>${snap.data().zip}
             <b>Radiona: </b>${snap.data().radiona}
             <b>Godište: </b>${snap.data().year}
             <b>Datum: </b>${snap.data().datum}
             <b>Vrijeme: </b>${snap.data().vrijeme}
             <b>Kilometraža: </b>${snap.data().number}
             <b>Opis: </b>${snap.data().tekst}
             </p>`
        };
        return transporter.sendMail(mailOptions, (error, data) => {
            if (error) {
                console.log(error)
                return
            }
            else{
            console.log("Sent!"+data.response)}
        });
});
exports.admin = functions.firestore
    .document('noviobrazac2/{noviobrazac2ID}')
    .onUpdate((change, context) => {
        const document = change.after.data();
        const oldDocument = change.before.data();
        const email=oldDocument.email
        const mailOptions = {
            from: `projektizpi@gmail.com`,
            to: email,
            subject: 'CarHealthApp',
            html: 'Vaš termin je:'+document.status+'<br>'+'Komentar:'+document.comment+'<br>'+'Vrijeme:'+document.vrijeme+'<br>'+'Datum:'+document.datum
        };
        return transporter.sendMail(mailOptions, (error, data) => {
            if (error) {
                console.log(error)
                return
            }
            console.log("Sent!")
        });
});

