var fortunes = [
    "**Tak**",
    "**Nie**",
    "**Może**",
    "**Nie Wiem**",
    "**Prawdopodobnie**",
    "**Chyba**",
    "**Nie Jestem Pewien**",
    "**Na Pewno**"
];

module.exports = {
    name: "8ball",
    description: "Odpowiada na pytania. Użycie: Wymyśl pytanie i napisz:`*8ball`",


    run(msg) {
        const { channel } = msg
        var wynik = msg.channel.send(fortunes[Math.floor(Math.random() * 8)]);
        msg.channel.send  
    },
}
