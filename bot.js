const Discord = require("discord.js");
const superagent = require("superagent");
const weather = require("weather-js");
const economy = require('discord-eco');
const bot = new Discord.Client({disableEveryone: true});
const moment = require("moment");
const momentDurationFormat = require("moment-duration-format");

bot.user.setActivity('Join DBPI Ayo !', {type: 'PLAYING'});

var prefix = 'IND.';


bot.on("ready", async () => {
    console.log(`Logged in as : ${bot.user.tag}`);
    console.log(`${bot.user.username} is ready!`)
    
  
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
    autoresponder.react('🚩');
    return autoresponder.channel.send(`Hai ${sender},` + ' Gunakan Command ini ``c.help`` ')
    }
    
    if (autoresponder.content === `<@${bot.user.id}>`) {
    autoresponder.react('🚩');
    return autoresponder.channel.send(`Hai ${sender},` + ' Gunakan Command ini ``help`` ')
    }
        
});

bot.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'member-log');
    let memberavatar = member.user.displayAvatarURL;
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor("#FE2E2E")
        .setThumbnail(memberavatar)
        .addField(':bust_in_silhouette: | nama : ', `${member}`)
        .addField(':microphone2: | Selamat Datang!', `Server bot partner indonesia., ${member}`)
        .addField(':family_mwgb: | Total member', `${member.guild.memberCount}`)
        .addField("Nama", `<@` + `${member.id}` + `>`, true)
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
        .setColor("#FE2E2E")
        .setThumbnail(memberavatar)
        .addField(':bust_in_silhouette: | Nama:', `${member}`)
        .addField('Telah keluar dari server', 'Selamat Tinggal !')
        .addField(':family_mwgb: | Total member', `${member.guild.memberCount}` + " members")
        .setFooter(`${member.guild.name}`)
        .setTimestamp()

        channel.sendEmbed(embed);
});

bot.on('guildMemberRemove', member => {
    console.log(`${member}` + "has left" + `${member.guild.name}` + "Sending leave message now")
    console.log("Leave Message Sent")
});


bot.login(process.env.BOT_TOKEN);
