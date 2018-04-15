const Discord = require("discord.js");
const superagent = require("superagent");
const weather = require("weather-js");
const economy = require('discord-eco');
const bot = new Discord.Client({disableEveryone: true});
const moment = require("moment");
const momentDurationFormat = require("moment-duration-format");



var prefix = 'c.';


bot.on("ready", async () => {
    console.log(`Logged in as : ${bot.user.tag}`);
    console.log(`${bot.user.username} is ready!`)
    
            
    function randomStatus() {
        let status = [`on ${bot.guilds.size} guilds.`, `with ${bot.users.size.toLocaleString()} users.`, 'mention @Cosmic', 'type c.help']
          let rstatus = Math.floor(Math.random() * status.length);
        bot.user.setActivity(status[rstatus], {type: 'PLAYING'});
    }; setInterval(randomStatus, 20000)
  });
  
bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    
        let msg = message.content.toLowerCase();
        let sender = message.author;
        let args = message.content.slice(prefix.length).trim().split(" ");
        let cmd = args.shift().toLowerCase();
        if (!message.content.startsWith(prefix)) return;
  
    try {
      let commandFile = require(`./cmds/${cmd}.js`);
      commandFile.run(bot, message, args);
    } catch (e) {
      console.log(e.message)
    } finally {
      console.log(`${message.author.tag} menggunakan perintah ${prefix}${cmd}`);
    }
  });

bot.on("message", async autoresponder => {
    if(autoresponder.author.bot) return;
    if(autoresponder.channel.type === "dm") return;
      
        let msg = autoresponder.content.toLowerCase();
        let sender = autoresponder.author;
        if (autoresponder.content.startsWith(prefix)) return;
    
    if (autoresponder.content === `<@!${bot.user.id}>`) {
    autoresponder.react('👍');
    return autoresponder.channel.send(`Hi ${sender},` + ' use this command ``c.help`` ')
    }
    
    if (autoresponder.content === `<@${bot.user.id}>`) {
    autoresponder.react('👍');
    return autoresponder.channel.send(`Hi ${sender},` + ' use this command ``c.help`` ')
    }
        
});

bot.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'welcome-leave');
    let memberavatar = member.user.displayAvatarURL;
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor("#9A2EFE")
        .setThumbnail(memberavatar)
        .addField(':bust_in_silhouette: | name : ', `${member}`)
        .addField(':microphone2: | Welcome!', `Welcome to the server, ${member}`)
        .addField(':family_mwgb: | Your are the member', `${member.guild.memberCount}`)
        .addField("Name", `<@` + `${member.id}` + `>`, true)
        .addField('Server', `${member.guild.name}`, true )
        .setFooter(`${member.guild.name}`)
        .setTimestamp()

        channel.sendEmbed(embed);
});

bot.on('guildMemberAdd', member => {

    console.log(`${member}`, "has joined" + `${member.guild.name}`)

});

bot.on('guildMemberRemove', member => {
    let channel = member.guild.channels.find('name', 'welcome-leave');
    let memberavatar = member.user.displayAvatarURL;
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor("#9A2EFE")
        .setThumbnail(memberavatar)
        .addField(':bust_in_silhouette: | Name:', `${member}`)
        .addField('Has Let the Server', 'Good Bye !')
        .addField(':family_mwgb: | The server now as', `${member.guild.memberCount}` + " members")
        .setFooter(`${member.guild.name}`)
        .setTimestamp()

        channel.sendEmbed(embed);
});

bot.on('guildMemberRemove', member => {
    console.log(`${member}` + "has left" + `${member.guild.name}` + "Sending leave message now")
    console.log("Leave Message Sent")
});


bot.login(process.env.BOT_TOKEN);
