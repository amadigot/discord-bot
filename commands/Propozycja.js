const { prefix } = require("../config")

const { RichEmbed } = require('discord.js')

module.exports = {
    name: "propozycja",
    description: "Tworzy ankiete",

    run(msg) {
        const { channel } = msg    
        var wiadomosc = msg.content.slice([prefix.length+10])
        var embed = new RichEmbed()
        .addField("Propozycja:", wiadomosc, false)
        .setFooter(" Jeśli się zgadzasz kliknij: ✅ \nJeśli się nie zgadzasz kliknij: ❌ ")
        

        return msg.channel.send(embed).then(async embedMessage => {
            await embedMessage.react('✅')
            await embedMessage.react('❌')
        })
    },
}