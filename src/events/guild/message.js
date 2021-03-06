const Discord = require("discord.js");
const { PREFIX, primaryColor } = require("../../../config.json");

module.exports = async (client, message) => {
  const queue = new Map();
  if (message.author.bot) return;
  if (!message.guild) return;
  if (
    message.content === `<@${client.user.id}>` ||
    message.content === `<@!${client.user.id}>`
  ) {
    const embed = new Discord.MessageEmbed()
      .setTitle(`👋 Hello There!`, message.guild.iconURL())
      .setThumbnail(client.user.avatarURL())
      .setColor(primaryColor)
      .setDescription(
        "I'm " +
          "**" +
          client.user.username +
          "**" +
          "\n" +
          "To see all my commands please type `" +
          PREFIX +
          "help`"
      );
    message.channel.send(embed);
  }
};
