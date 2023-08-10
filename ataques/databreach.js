const databreach_options = { 
    '💀 ATAQUE': '**DATA BREACHES**',
    '🤔 ¿QUÉ ES?': 'Es una violación o incidente de seguridad que conduce al robo de datos sensibles o críticos o su exposición a una parte no autorizada. Estos incidentes pueden ser intencionales, como un hackeo de una base de datos, o accidentales, como un empleado que envía por correo electrónico archivos confidenciales al destinatario equivocado.',
    '🛡️ CISCO CONTRA EL MALWARE': 
    `- **DUO** y la autenticación de dos factores hacen que sea más difícil para los hackers maliciosos comprometer a los usuarios, incluidos aquellos que trabajan de forma remota o por contrato.
     - Cisco incorpora capacidades de DLP (Prevención de pérdida de datos) mediante **Umbrella**.
        `,
     }

const databreach = (bot) => {
    let mensaje = ''
    let header = 'Seleccionaste **DATA BREACHES**.\n\n\n'
    mensaje = mensaje + header,
    Object.entries(databreach_options).map(([key,value])=>{
        mensaje = mensaje + `**${key}**\n: ${value}\n\n\n`
    })
    bot.say("markdown", mensaje)
    
}

module.exports = {databreach}

