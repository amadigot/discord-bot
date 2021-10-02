const { Client, RichEmbed } = require('discord.js')

const { token } = require("./config.js")

const commandHandler = require("./handlers/command.handler")
const apiHandler = require("./handlers/api.handler")
const eventHandler = require("./handlers/event.handler")

const client = new Client()

commandHandler(client)
apiHandler(client)
eventHandler(client)

client.on('ready', () => {
  client.user.setActivity(`kanał Amadigot`, {type: `WATCHING`})
  console.log(`${client.user.tag} JEST AKTYWNY!`)
});


const config = require("./config.js")

client.login(token)