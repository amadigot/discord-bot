module.exports = {
    name: "kick",
    description: "Wyrzuca urzytkowników",

    run(msg, args) {

        const { channel, member, guild } = msg
        console.log("bot", guild.me.permissionsIn(channel).has(["ADMINISTRATOR"]))
        console.log("user", member.permissionsIn(channel).has(["ADMINISTRATOR"]))
        if (!member.permissionsIn(channel).has(["ADMINISTRATOR"])) {
          return msg.reply("Nie posiadasz wystarczających permisji!")
        }



        const user = msg.mentions.users.first();
    if (user) {
      const member = msg.guild.member(user);
      if (member) {
        member.kick('Optional reason that will display in the audit logs').then(() => {
          channel.send(`Poprawnie wyrzuciłem ${user.tag}`);
        }).catch(err => {
          channel.send('Nie byłem w stanie wyrzucić członka');
          console.error(err);
        });
      } else {
        channel.send('Tego użytkownika nie ma na ty serwerze!');
      }
    } else {
      channel.send('Podaj poprawną nazwę urzytkownika!');
    }
  
        
    },
}