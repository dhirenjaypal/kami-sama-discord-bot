const Discord = require('discord.js');

module.exports = {
	name: 'embed',
	description: 'Just trying embed ;)',
	guildOnly: true,
	execute(message, args) {

		const exampleEmbed = new Discord.MessageEmbed()
			.setColor('#999999')
			//.setTitle('Welcome')
			.setDescription(`**Welcome to our server <@${message.author.id}>**`)
			//.setThumbnail
			.setImage(`${message.author.displayAvatarURL({ format: "png", dynamic: true })}`)

		message.channel.send(exampleEmbed);

	},
};
