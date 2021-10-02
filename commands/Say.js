

module.exports = {
    name: "say",
    description: "Wysyła na chacie dowolną wiadomość!",

    run(msg) {

        const { channel, member, guild } = msg

        console.log("bot", guild.me.permissionsIn(channel).has(["ADMINISTRATOR"]))
        console.log("user", member.permissionsIn(channel).has(["ADMINISTRATOR"]))
        if (!member.permissionsIn(channel).has(["ADMINISTRATOR"])) {
          return msg.reply("Nie posiadasz wystarczających permisji!")
        }


            
        msg.channel.send(msg.content.slice(+4))
        msg.delete()
    },
}