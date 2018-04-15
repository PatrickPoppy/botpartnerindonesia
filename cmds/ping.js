const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
let ping = Date.now() - message.createdTimestamp
let embed = new Discord.RichEmbed()
.setTitle('Your ping results:')
.addField('Signal :signal_strength:',`${ping}ms`, true)
        .setColor("#FE2E2E")
         .setFooter('© DISCORD BOT PARTNER INDONESIA.')
message.channel.send({embed})
}

exports.help = {
  name: "ping"
}
