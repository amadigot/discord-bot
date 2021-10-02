const { Client, RichEmbed } = require('discord.js')

module.exports = {
    name: "infobot",
    description: "Podaje informacje na temat bota",

    run(msg) {
        const { channel } = msg
        const embed = new RichEmbed()
      
        .setTitle("INFO O BOCIE")
        .setDescription("***BOTA STWORZYŁ 👑𝓐𝓶𝓪𝓭𝓲𝓰𝓸𝓽👑#2499. WERSJA BETA TESTY***")
        .setColor(0xFF7F00)
      
      msg.channel.send(embed)
      msg.delete()
    },
}