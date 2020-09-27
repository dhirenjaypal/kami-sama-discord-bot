module.exports = {
	name: 'hi',
	description: 'Hi',
	execute(message, args) {
		message.channel.send(`hello ${message.author.username}`);
	},
};
