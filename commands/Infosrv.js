const { Client, RichEmbed } = require('discord.js')

module.exports = {
    name: "infosrv",
    description: "Podaje informacje na temat serwera",

    run(msg) {
        const { channel } = msg
        const embed = new RichEmbed()
      
        .setColor(0x008000)
      .addField("NAZWA SERWERA:", msg.guild.name, false)
      .setTitle("INFO O SERWIE")
      .addField("WŁAŚCICIEL:", msg.guild.owner.user.tag, false)
      .addField("DATA ZAŁORZENIA:", msg.guild.createdAt, false)
      .addField("DATA DOLĄCZENIA:", msg.guild.joinedAt, false)
      .setTimestamp()
      .setThumbnail(msg.guild.iconURL)
      .setFooter(msg.member.user.tag, msg.member.user.avatarURL)
      
          msg.channel.send(embed)
          msg.delete()
    },
}