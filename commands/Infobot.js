const { Client, RichEmbed } = require('discord.js')

module.exports = {
    name: "infobot",
    description: "Podaje informacje na temat bota",

    run(msg) {
        const { channel } = msg
        const embed = new RichEmbed()
      
        .setTitle("INFO O BOCIE")
        .setDescription("***BOTA STWORZYΕ πππΆπͺπ­π²π°πΈπ½π#2499. WERSJA BETA TESTY***")
        .setColor(0xFF7F00)
      
      msg.channel.send(embed)
      msg.delete()
    },
}