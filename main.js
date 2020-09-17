/////////////////////
//Code by Julian S.//
/////////////////////


const Discord = require('discord.js'); 
const bot = new Discord.Client();
const prefix = '.'; 

bot.on('ready', () => {
        console.log('OPMine-Bot ist jetzt Online!');
        bot.user.setActivity('OPMine-PServer' , {
             type: "WATCHING"
        })
        .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
        .catch(console.error);
    bot.user.setStatus("idle")
        .then(console.log)
        .catch(console.error);
})       
        
        
        bot.on('message', message =>{
    if (message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if (command === 'team') {
        const testEmbed = new Discord.MessageEmbed()
           .setImage('https://i.imgur.com/ZJOtS6f.png') 
           .setTitle('⮩   Unser Server-Team   ⮨')
           .setColor(0x45B8AC)
           .setFooter('⮞ Developed & Designed by _7u ⮜')

        try {
            message.channel.send(testEmbed);
        } catch {
            message.reply(`Sorry <@${message.autor.username}> Ich kann momentan nicht helfen :c`)
        }
    }
})

bot.login(process.env.token);
