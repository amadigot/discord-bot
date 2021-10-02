const { Client, RichEmbed } = require('discord.js')

module.exports = {
    name: "rzutmoneta",
    description: "Wybiera jedną z dówch opcji",


    run(msg) {
        const { channel } = msg
        var wynik = (Math.floor(Math.random() * 2) == 0) ? 'Orzeł' : "Reszka"
        var embed = new RichEmbed()
      
        .setTitle("Wynik losowania:")
        .setDescription(wynik)
        .setColor(0x001eff)
      
          msg.channel.send(embed)
          msg.delete()
    },
}
