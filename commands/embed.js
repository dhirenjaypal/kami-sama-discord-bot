const Discord = require('discord.js');

module.exports = {
	name: 'embed',
	description: 'Just trying embed ;)',
	guildOnly: true,
	execute(message, args) {

		const exampleEmbed = new Discord.MessageEmbed()
			.setColor('#0099ff')
			.setTitle('Simple Embed Test')
			.setURL('https://dhirenwebdev.epizy.com/')
			.setAuthor(`${message.auhor}`, 'https://cdn.discordapp.com/avatars/621511383128866816/b3a1a8ecebe10bab0c1428dede856c91.png', 'https://dhirenwebdev.episzy.com')
			.setDescription('I just made thisnto test how embed work. ;)')
			.setThumbnail('https://cdn.discordapp.com/avatars/759307971104210954/14ad87da960a6efdb3724c7cd3bf8b5b.png')
			.addFields(
				{ name: 'Developer of bot', value: 'Dhiren Jaypal' },
				{ name: '\u200B', value: '\u200B' },
				{ name: 'field name', value: 'field value', inline: true },
				{ name: 'field name2', value: 'field value2', inline: true },
			)
			.addField('Inline field title', 'value', true)
			.setImage('https://cdn.discordapp.com/avatars/290321443928014859/651565a31059ea640c49e3367ef3bb0a.png')
			.setTimestamp()
			.setFooter('2020 Dhiren InfoTech Pvt. Ltd.', 'https://cdn.discordapp.com/avatars/721210788848599093/ee3b0a8b43457da48459715b0302a8bb.png');

		message.channel.send(exampleEmbed);

	},
};
