const { readdirSync, existsSync, mkdirSync } = require("fs")
const chalk = require("chalk")

const {
  Constants: { Events },
} = require("discord.js")

const serverEvents = Object.values(Events)

const serverEventsPath = __dirname + `/../events`

module.exports = (client) => {

  try {
    if (!existsSync(serverEventsPath)) {

      console.log(
        chalk.yellow(
          "Directory 'events' does not exist. Creating directory 'events'...",
        ),
      )
      mkdirSync(serverEventsPath)
    }
  } catch (e) {
    console.log("An error occurred. " + e)
    process.exit(1)
  }

  const events = readdirSync(serverEventsPath).filter((file) =>
    file.endsWith(".js"),
  )

  let registeredEventsCount = 0

  for (const file of events) {
    const event = require(__dirname + `/../events/${file}`)

    if (!event.run) {
      console.log(`Event '${file}' Nie ma Funkcji Run`)

      process.exit(1)
    } else if (typeof event.run !== "function") {
      console.log(`W Event '${file}' Funkcja Run Nie Jest Funkcją`)

      process.exit(1)
    }

    if (serverEvents.includes(event.name)) {

      client.on(event.name, event.run)
      registeredEventsCount++
    } else {
      console.log(
        chalk.redBright(`Event '${event.name}' W '${file}' Nie Istnieje`),
      )

      process.exit(1)
    }
  }
  console.log(chalk.blueBright(`Załadowano ${registeredEventsCount} Eventów`))
}