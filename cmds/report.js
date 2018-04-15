const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
  let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!rUser) return message.channel.send("Could't find `user`.");
  let reason = args.join(" ").slice(22);

  let reportEmbed = new Discord.RichEmbed()
  .setTitle("Reports📫")
        .setColor("#FE2E2E")
         .setFooter('© DISCORD BOT PARTNER INDONESIA.')
  .addField("Reported User:", `${rUser}`)
  .addField("Reported By:", `${message.author}`)
  .addField("Channel:", message.channel)
  .addField("Time:", message.createdAt)
  .addField("Reason:", reason);

  let reportschannel = message.guild.channels.find(`name`, "reports");
  if(!reportschannel) return message.channel.send("Couldn't find `#reports` channel.");

  message.delete().catch(O_o=>{});
  reportschannel.send(reportEmbed);

  return;
}

exports.help = {
  name: "report"
}
