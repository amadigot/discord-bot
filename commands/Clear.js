const { Permissions: { FLAGS } } = require("discord.js")

module.exports = {
    name: "clear",
    description: "Usuwa wiadomości",

    run(msg, args) {

        const { channel, member, guild } = msg

        console.log("bot", guild.me.permissionsIn(channel).has(["ADMINISTRATOR"]))
        console.log("user", member.permissionsIn(channel).has(["ADMINISTRATOR"]))
        if (!member.permissionsIn(channel).has(["ADMINISTRATOR"])) {
          return msg.reply("Nie posiadasz wystarczających permisji!")
        }

        const amount = parseInt(args[0])
        
        
        if (!Number.isInteger(amount)) {
            return channel.send("Ile wiadomości chcesz usunąć?")
        }
          
        if (amount < 2 || amount > 100) {
            return channel.send("Niemorzesz usunąć tyle wiadomości!")
        }
          
        channel.bulkDelete(amount)
        
    },
}