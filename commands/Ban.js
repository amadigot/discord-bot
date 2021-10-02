module.exports = {
    name: "ban",
    description: "Banuje urzytkowników",

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
          member.ban({
            reason: 'Źle się zachowywał!',
          }).then(() => {
            channel.send(`Poprwnie zbanowałem ${user.tag}`);
          }).catch(err => {
            channel.send('Nie możesz banować siebie!');
            console.error(err);
          });
        } else {
          channel.send('Tego urzytkownika nie ma na serwie!');
        }
      } else {
        channel.send('Podaj poprawną nazwę urzytkownika!');
      }
    
        
    },
}