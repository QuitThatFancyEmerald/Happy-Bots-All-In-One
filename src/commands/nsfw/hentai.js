const Discord = require("discord.js");

module.exports = {
    name: "nsfw-hentai",
    description: "Nsfw hentai",
    async execute(message, args) {
        var superagent = require("superagent");

        if (!message.channel.nsfw)
            return message.channel.send(
                ":underage:  This Command Is Only Allowed In NSFW Channels Only!"
            );

        var lo = new Discord.MessageEmbed()
            .setDescription(`🔃 Loading...`)
            .setTimestamp();

        message.channel.send(lo).then((m) => {
            superagent
                .get("https://nekobot.xyz/api/image")
                .query({ type: "hentai" })
                .end((err, response) => {
                    var embed_nsfw = new Discord.MessageEmbed()
                        //.setDescription(`(${response.body.message})`)
                        .setImage(response.body.message);

                    m.edit(embed_nsfw);
                });
        });
    },
};
