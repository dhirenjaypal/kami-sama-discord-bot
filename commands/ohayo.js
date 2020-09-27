module.exports = {
	name: 'ohayo',
	description: 'Good Morning',
	execute(message, args) {
		message.channel.send('ohayogozaimasu');
	},
};
