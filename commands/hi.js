module.exports = {
	name: 'hi',
	aliases: ['Hi', 'Hello', 'hello'],
	description: 'Hi',
	cooldown: 7,
	execute(message, args) {
		message.channel.send(`hello ${message.author.username}`);
	},
};
