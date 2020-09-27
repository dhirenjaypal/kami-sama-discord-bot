module.exports = {
	name: 'role',
	description: 'Assign a role to member, not really :p',
	args: true,
	usage: "<user> <role>",
	execute(message, args) {
		message.channel.send(`${message.mentions.users.first().username}'s role changed to ${args[1]}`);
	},
};
