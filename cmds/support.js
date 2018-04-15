const Discord = require("discord.js");


exports.run = async (bot, message, args) => {
message.channel.send('```click the link below to support our bot!```')
message.channel.send('<https://discord.gg/YSpbDrp>')

}
    
exports.help = {
name: "support"
}
