const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Welcome to NSABot! Coded by internetperson!`);
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', function(message) {
        if (message.channel.isPrivate) {
                console.log(`(Private) ${message.author.username}: ${message.content}`);
        } else {
                console.log(`(${message.guild.name} / ${message.channel.name}) ${message.author.username}: ${message.content}`);
        }
});

client.login('your-token-here');
