const { MessageAttachment } = require("discord.js")
const cmd = require("discord.js")
const { owner } = require("../config")

module.exports = {
    name: "ping",
    description: "Wysyła na chacie 'Pong!",

    run(msg) {
        const { channel } = msg      
        channel.send('Pong!')
    },
}