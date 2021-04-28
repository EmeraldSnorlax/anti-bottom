const Discord = require("discord.js"), bottom = require("bottomify"), client = new Discord.Client;

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
    e.delete().then(t => e.channel.send("Spamming not allowed"))
});

client.login("YOUR_TOKEN_HERE");