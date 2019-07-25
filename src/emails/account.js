const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)



const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'martinsmthiago@gmail.com',
        subject: ("Obrigado por se juntar a nós!"),
        text: `Bem vindo a app, ${name}. Me deixe informado sobre o que achou da app.`


    })
}


const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'martinsmthiago@gmail.com',
        subject: "É triste ver você partir :( !",
        text: `Adeus, ${name}. poderia nós ajudar a melhorar e dar um motivo da sua saida?.`


    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}