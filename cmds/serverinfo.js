const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
  let sicon = message.guild.iconURL;
  let patrick = new Discord.RichEmbed()
  .setAuthor(message.guild.name, message.guild.iconURL)
  .setThumbnail(message.guild.iconURL)
  .setDescription(`Owner: ${message.guild.owner}`)
  .addField("Member Count:", message.guild.memberCount, true)
  .addField("Roles:", message.guild.roles.size, true)
  .addField("Channels:", message.guild.channels.size, true)
  .addField("Emojis:", message.guild.emojis.size, true)
  .addField("Region:", message.guild.region, true)
  .addField('Created:', message.guild.createdAt.toLocaleString(), true)
        .setColor("#FE2E2E")
         .setFooter('© DISCORD BOT PARTNER INDONESIA.')
  message.channel.send(patrick);
}

exports.help = {
  name: "serverinfo"
}
