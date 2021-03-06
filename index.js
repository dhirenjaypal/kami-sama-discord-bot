const Discord = require('discord.js');
const fs = require('fs');

require('dotenv').config({path: __dirname + '/.env'});

const { prefix } = require('./config.json');
const token = process.env.BOT_TOKEN
const id = process.env.BOT_ID

const client = new Discord.Client();
client.commands = new Discord.Collection();
const cooldowns = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
	console.log(`${message.author.tag} : ${message.content}`);

	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

    //if (!client.commands.has(commandName)) return;
	//const command = client.commands.get(commandName);
	const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	if (command.args && !args.length) {
		//return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
		let reply = `You didn't provide any arguments, ${message.author}!`;

		if (command.usage) {
			reply += `\nThe proper usage would be: \`${prefix} ${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);
	}

	if (command.guildOnly && message.channel.type === 'dm') {
		return message.reply('I can\'t execute that command inside DMs!');
	}

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;

	if (timestamps.has(message.author.id)) {
			const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
			if (now < expirationTime) {
				const timeLeft = (expirationTime - now) / 1000;
				return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
			}
	} else {
		timestamps.set(message.author.id, now);
		setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
	}

	try {
	command.execute(message, args);
	} catch (error) {
	console.error(error);
	message.reply('there was an error trying to execute that command!');
	}

});

client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.cache.find(ch => ch.name === 'bot-development');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member


		const welcomeEmbed = new Discord.MessageEmbed()
            .setColor('#999999')
            //.setTitle('Welcome')
            .setDescription(`**Welcome to our server <@${member}>**`)
            //.setThumbnail
            .setImage(`${member.displayAvatarURL({ format: "png", dynamic: true })}`)

        channel.send(exampleEmbed);

  //channel.send(`Welcome to the server, ${member}`);
});


client.login(token);
