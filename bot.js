// require the discord.js module
const Discord = require('discord.js');
var auth = process.env.TOKEN;
const gifs = [
    'https://media.giphy.com/media/LkfjHA9dIVYgJFmPOF/giphy.gif',
    'https://media.giphy.com/media/iCeG5FbXeuHiE/giphy.gif',
    'https://media.giphy.com/media/4NZxtNA8Ef5L2/giphy.gif',
    'https://media.giphy.com/media/iNwDIhUl9S6j42lJz7/giphy.gif',
    'https://media.giphy.com/media/pHH0RsynZHGlG/giphy.gif',
	'https://media.giphy.com/media/wkW0maGDN1eSc/giphy.gif',
	'https://media.giphy.com/media/hhHcFH0xAduCs/giphy.gif',
];
const poggifs = [
	'https://media1.tenor.com/images/9c84ae4d331de77c86968e4ea1b81cf0/tenor.gif?itemid=8179196',
	'https://tenor.com/view/pogchamp-pepe-dance-pepechamp-emote-gif-9358907',
	'https://tenor.com/view/pogchamp-pog-pogey-poggers-twitch-gif-14340727',
	'https://media1.tenor.com/images/30e1029fd63cb44bdb22e721d8454792/tenor.gif?itemid=17487624',
	'https://media1.tenor.com/images/58fde03dc4c22c6bb55ec0a3c5d6c749/tenor.gif?itemid=10111831',
	'https://media1.tenor.com/images/ea84f2f5ae572cfa8ec7e37b8d9e05f4/tenor.gif?itemid=17223821',
];
const userID = '374655744345374730'

function random_item(items){
	return items[Math.floor(Math.random()*items.length)];
}

// create a new Discord client
const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
});

// login to Discord with your app's token
client.login(auth);

client.on('message', message => {
	if (message.author.bot) return;
	if (message.content.toLowerCase().includes('uwu')) {
		message.channel.send(random_item(gifs));
	}
	if (message.content.toLowerCase().includes('pog')) {
		message.channel.send(random_item(poggifs));
	}
	if (message.author.id === userID){
		if (message.content.toLowerCase().includes('tea')) {
			const reactionEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'thatstheteasis');
			message.react(reactionEmoji);
		}
	} 	
	if (message.content.toLowerCase().includes('sadge')) {
		const reactionEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'sadge');
		message.react(reactionEmoji);
	}
});