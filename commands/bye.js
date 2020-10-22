module.exports = {
	name: 'bye',
	description: 'bye bye',
	execute(message, args) {
		message.channel.send(`sayonara, matane <@${message.author.id}>`);
	},
};
