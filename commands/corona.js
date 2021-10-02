const { RichEmbed } = require("discord.js")
const { ucfirst } = require("js-helpers")

module.exports = {
    name: "corona",
    description: "Pokazuje statystyki CoronaVirusa, Nazwy państw zapisujemy po angielsku (np.: Germany)",

    async run(msg, args) {
        const { channel, client: {axios}, } = msg
        
        const arg = args[0]

        const title = "Corona Virus"

        const embed = new RichEmbed()
        .setTitle(title)
        .setColor(0x001eff)
        

        if (arg === "all") {
            const {data} = await axios.get("all")
            const { cases, deaths, recovered } = data

            embed.addField(":skull: Śmierci", deaths.toLocaleString("pl-PL"), true)
            embed.addField(":green_heart: Wyleczeni", recovered.toLocaleString("pl-PL"), true)
            embed.addField(":thermometer: Przypadki", cases.toLocaleString("pl-PL"), true)
            embed.setDescription("Globalne statystyki CoronaVirusa")

            return channel.send(embed)
            
        }

        const {data} = await axios.get("countries")
        const countryName = ucfirst(arg.toLowerCase())
        const country = data.filter(x => x.country === countryName)
        const {
            cases,
            todayCases,
            deaths,
            todayDeaths,
            recovered,
            critical,
        } = country[0]

        embed.addField(":skull: Śmierci", deaths.toLocaleString("pl-PL"), true)
        embed.addField(":green_heart: Wyleczeni", recovered.toLocaleString("pl-PL"), true)
        embed.addField(":thermometer: Przypadki", cases.toLocaleString("pl-PL"), true)
        embed.setDescription(`Statystyki CoronaVirusa dla kraju \`${country[0].country}\``)
        return channel.send(embed)
    },
}