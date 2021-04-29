const Discord = require("discord.js"), bottom = require("bottomify"), client = new Discord.Client;

let reasons = [
    "unfunny",
    ":pleading_face: stop deleting my messages",
    "banned",
    "sus",
    "spamming not allowed",
    "nice try"
]

client.once("ready", () => {
    console.log("Ready! 😎")
});

client.on("message", e => {
    if (e.author.bot) return "bot";
    try {
        bottom.decode(e.content)
    } catch (e) {
        return "ok"
    }
    e.delete().then(t => e.channel.send(reasons[Math.floor(Math.random()*reasons.length)])))
});

client.login("YOUR_TOKEN_HERE");
