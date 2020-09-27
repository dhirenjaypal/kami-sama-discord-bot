module.exports = {
	name: 'kick',
	description: 'kick someone, not actually :p',
	guildOnly: true,
	execute(message, args) {
		if (!message.mentions.users.size) {
            return message.reply('you need to tag a user in order to kick them!');
        }
        const taggedUser = message.mentions.users.first();
        message.channel.send(`You wanted to kick: ${taggedUser.username}`);

		message.guild.channels.cache.get("759794285238419507").send(`${message.author} tried to kick ${message.mentions.users.first().username}`)

	},
};
