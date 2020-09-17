/////////////////////
//Code by Julian S.//
/////////////////////


const Discord = require('discord.js'); 
const bot = new Discord.Client();
const prefix = '.'; 

bot.on('ready', () => {
        console.log('OPMine-Bot ist jetzt Online!');
       bot.user.setActivity('OPMine-PServer', { type: "WATCHING"}).catch(console.error);
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

    if(command === 'commands') {
        const testEmbed = new Discord.MessageEmbed()
            .setTitle('⮞   Alle Commands   ⮜')
            .setDescription('.team » Liste des Serverteams ', '.commands » siehe alle commands')
            .setColor(0x45B8AC)
            .setFooter('⮞ Developed & Designed by _7u ⮜')

        try {
            message.channel.send(testEmbed);
        } catch {
            message.reply(`Sorry <@${message.autor.username}> Ich kann momentan nicht helfen :c`)
        }

    }

    if(command === 'credit') {
        const testEmbed = new Discord.MessageEmbed()
            .setTitle('Discord Bot by OVT Ꭻᥙᥙᥙᥣเᥲᥒ#7339')
            .setFooter('⮞ Developed & Designed by _7u ⮜')


    }
})

bot.login(process.env.token);
