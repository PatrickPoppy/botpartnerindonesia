const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
   let insert = args.join(" ");
      if (!insert) {
          message.channel.send('🚫 usage : `-say <text>`');
          return;
      }
  message.delete();
  let botmessage = args.join(" ");
  message.channel.send(botmessage);
}

exports.help = {
  name: "say"
}
