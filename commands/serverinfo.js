module.exports = {
	name: 'serverinfo',
	description: 'Shows information about server',
	execute(message, args) {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	},
};
