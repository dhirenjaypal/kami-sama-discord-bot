module.exports = {
	name: 'argsinfo',
	description: 'Information about the arguments provided.',
	args: true,
	execute(message, args) {
		if (args[0] === 'beep') {
			return message.channel.send('boop');
		}

		message.channel.send(`Arguments: ${args}\nArguments length: ${args.length}`);
	},
};
