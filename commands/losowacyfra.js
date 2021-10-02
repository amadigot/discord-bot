var fortunes = [
    "**1**",
    "**2**",
    "**3**",
    "**4**",
    "**5**",
    "**6**",
    "**7**",
    "**8**",
    "**9**",
    "**10**",
    "**11**",
    "**12**",
    "**13**",
    "**14**",
    "**15**",
    "**16**",
    "**17**",
    "**18**",
    "**19**",
    "**20**",
    "**0**",

];

module.exports = {
    name: "losowacyfra",
    description: "Wysyła losową liczbę z zakresu `0-20`",


    run(msg) {
        const { channel } = msg
        var wynik = msg.channel.send(fortunes[Math.floor(Math.random() * 21)]);
        msg.channel.send  
    },
}