const Discord = require('discord.js');
const client = new Discord.Client( { ws: { properties: { $browser: "Discord iOS" }} } );
const config = require('./config.json');

require('dotenv').config()

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.events = new Discord.Collection();

["command", "event"].forEach(handler => {
    require(`./Handlers/${handler}`)(client);
});

client.login(config.Token);