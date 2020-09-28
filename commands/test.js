module.exports = {
	name: 'test',
	description: 'Just for testing',
	execute(message, args) {
		message.channel.send('message2');
	},
};
