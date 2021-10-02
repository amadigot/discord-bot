const { VoiceChannel } = require("discord.js")

module.exports = {
    name: "time",
    description: "Wysyła godzine na czacie!",
    args: true,
  
    async run(msg, args) {
      const { channel, guild, client } = msg
  
      const time = new Date().toLocaleTimeString().slice(0, 5)
      msg.channel.send(time)
    },
  }