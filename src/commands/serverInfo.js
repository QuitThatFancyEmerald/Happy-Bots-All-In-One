const Discord = require("discord.js");
const { MessageEmbed, MessageAttachment } = require("discord.js");
const os = require("os");

module.exports = (client) => {
    client.on("message", async (message) => {
        if (!message.guild) return;
        if (message.content === "/server info") {
            const statsEmbed = new Discord.MessageEmbed()
                .addField(`:desktop: System Os`, `${os.platform()}`, true)
                .addField(`:gear: Architecture`, `${os.arch()}`, true)
                .addField(
                    `:rocket:  Processor`,
                    `${os.cpus().map((i) => `${i.model}`)[0]}`,
                    true
                )
                .addField(
                    `:pager: RAM`,
                    `${Math.trunc(
                        process.memoryUsage().heapUsed / 1024 / 1000
                    )} MB / ${Math.trunc(
                        os.totalmem() / 1024 / 1000
                    )} MB (${Math.round(
                        (Math.round(
                            process.memoryUsage().heapUsed / 1024 / 1024
                        ) /
                            Math.round(os.totalmem() / 1024 / 1024)) *
                            100
                    )}%)`,
                    true
                )
                /*    .addField(
        `:alarm_clock: Server up Time`,
        "" +
            Math.round(client.uptime / (1000 * 60 * 60)) +
            " Hours, " +
            (Math.round(client.uptime / (1000 * 60)) % 60) +
            " minutes " +
            (Math.round(client.uptime / 1000) % 60) +
            " seconds" +
            ""
    )
    */
                .addField(
                    `:dividers: Library`,
                    `Discord.js ${Discord.version}`,
                    true
                );

            message.reply(statsEmbed);
        }
    });
};