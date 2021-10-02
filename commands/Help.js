const { prefix } = require("../config.js")

module.exports = {
  name: "help",
  description:"Lista wszystkich komend",


  run(msg, args) {
    const { commands } = msg.client
    const data = []


    if (!args.length) {
      data.push("**To jest lista wszystkich komęd:** \n")
      data.push(commands.map((command) => command.name).join(" \n "))
      data.push(`**\n Wyślij \`${prefix}help komęda\` aby zobaczyć jej użycie**`, )

      return msg.author
        .send(data, { split: true })
        .then(() => {
          if (msg.channel.type === "dm") return
          msg.reply("Wysłałem ci wszystkie komędy na pv!")
        })
        .catch((err) => {
          console.error(`Błąd ${msg.author.tag}.\n`, err)
          msg.reply("Wygląda na to że wkradł się jakiś błąd!")
        })
    }
    const name = args[0].toLowerCase()
    const command =
      commands.get(name) ||
      commands.find((c) => c.aliases && c.aliases.includes(name))

    data.push(`**Name:** ${command.name}`)

    if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(", ")}`)
    if (command.description)
      data.push(`**Description:** ${command.description}`)
    if (command.usage)
      data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`)


    msg.channel.send(data, { split: true })
  },
}