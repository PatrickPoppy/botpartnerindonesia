const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
  let patrick = new Discord.RichEmbed()
.setAuthor('✨  Hello, i am Cosmic  ✨', bot.user.avatarURL)
.setDescription('this is a feature I give to you | use this prefix `c.`')
.addField('Anime:','`neko` `pat`', true)
.addField('Core:','`help` `ping` `stats`', true)
.addField('Economy:','`balance` `addbalance`', true)
.addField('Moderation:','`clear` `welcome` `kick` `ban`', true)
.addField('Utility:','`avatar` `weather`', true)
.addField('Fun:','`say` `vote`', true)
.addField('Image:','`cat` `dog` `slap`', true)
.addField('Support Bot:','`votebot` `channel` `invite`', true)
.setThumbnail(bicon)
        .setColor("#FE2E2E")
         .setFooter('© DISCORD BOT PARTNER INDONESIA.')
  message.channel.send(patrick);
}

exports.help = {
  name: "help"
}
