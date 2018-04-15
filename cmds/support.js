const Discord = require("discord.js");


exports.run = async (bot, message, args) => {
message.channel.send('```Sebarkan link server ini untuk support kami!```')
message.channel.send('<https://discord.gg/fhzuzwM>')

}
    
exports.help = {
name: "support"
}
