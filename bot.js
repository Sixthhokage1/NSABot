const Discord = require("discord.js");
const client = new Discord.Client();
var fs = require('fs');
var file = "logs.txt";

client.on('ready', () => {
  console.log(`Welcome to NSABot! Coded by internetperson!`);
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', function(message) {
        if (message.channel.isPrivate) {
                var dmlog = `(Private) ${message.author.username}: ${message.content}`;
                fs.appendFile(file, dmlog + "\n");
                console.log(`(Private) ${message.author.username}: ${message.content}`);
        } else {
                var log = `(${message.guild.name} / ${message.channel.name}) ${message.author.username}: ${message.content}`;
                fs.appendFile(file, log + "\n");
                console.log(`(${message.guild.name} / ${message.channel.name}) ${message.author.username}: ${message.content}`);
        }
});

client.login('your-token-here');
