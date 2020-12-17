const Discord = require("discord.js");
const { PREFIX } = require("../../../config.json");

module.exports = (client) => {
        client.on("message", async (message) => {
                if (!message.content.startsWith(PREFIX) || message.author.bot)
                        return;
                let args = message.content
                        .slice(PREFIX.length)
                        .trim()
                        .split(/ +/);
                let command = args.shift().toLowerCase();
                if (command === "linebreak") {
                        if (!message.member.hasPermission("ADMINISTRATOR"))
                                return message.reply(
                                        "You do not have the permissions to do that"
                                );
                        message.channel.send("‎");
                }
        });
};