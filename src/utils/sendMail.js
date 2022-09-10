const api = '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'

const sgMail = require('@sendgrid/mail');

class SendMail {
    constructor(api, name, mail, subject){
        this.api = api,
        this.receiver = mail,
        this.subject = subject,
        this.message = {
            to: this.receiver,
            from: 'jmiturraspe@gmail.com', 
            subject: this.subject,
            html: `<h2> Hola ${name} Bienvenido a Alkemy </h2>`
        }
        this.setApi()
    }

    setApi(){
        return sgMail.setApiKey(api)
    }

    async sendMessage(){
        try {
            return await sgMail.send(this.message);
          } catch (error) {
            console.error(error);
        
            if (error.response) {
              console.error(error.response.body)
            }
        }
    }
}

module.exports = { SendMail, api }