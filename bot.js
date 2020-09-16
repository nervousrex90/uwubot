// require the discord.js module
const Discord = require('discord.js');
var auth = process.env.TOKEN;
const gifs = [
    'https://media1.tenor.com/images/b9ee278c57ad53283535860de5f48b4a/tenor.gif?itemid=16391139',
    'https://media1.tenor.com/images/1f85c80528917efd023699de5d3445a1/tenor.gif?itemid=16018927',
    'https://media.giphy.com/media/4NZxtNA8Ef5L2/giphy.gif',
    'https://media.giphy.com/media/iNwDIhUl9S6j42lJz7/giphy.gif',
    'https://media.giphy.com/media/pHH0RsynZHGlG/giphy.gif',
	'https://media.giphy.com/media/wkW0maGDN1eSc/giphy.gif',
	'https://media.giphy.com/media/hhHcFH0xAduCs/giphy.gif',
];
const poggifs = [
	'https://media.giphy.com/media/1ykTax6hrAKpTQ0Mnb/giphy.gif',
	'https://media.giphy.com/media/m48e80jhv4Kk/giphy.gif',
	'https://media1.tenor.com/images/ac86a2659730f38b5d22a10ac63d8039/tenor.gif?itemid=3557105',
	'https://media1.tenor.com/images/12e3eeafee0e3ceb87201a2542f72e38/tenor.gif?itemid=3835045',
	'https://media1.tenor.com/images/58fde03dc4c22c6bb55ec0a3c5d6c749/tenor.gif?itemid=10111831',
	'https://media1.tenor.com/images/ded88848be37f78d5183dec89b714d96/tenor.gif?itemid=9358907',
	'https://media1.tenor.com/images/30e1029fd63cb44bdb22e721d8454792/tenor.gif?itemid=17487624',
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
	if (message.guild.id === '663616743838580737'){
		if (message.author.id === userID){
			if (message.content.toLowerCase() === ('tea')) {
				const reactionEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'thatstheteasis');
				message.react(reactionEmoji);
			}
		} 	
		if (message.content.toLowerCase().includes('sadge')) {
			const reactionEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'sadge');
			message.react(reactionEmoji);
		}
	}
	if (message.guild.id === '740929953411104770'){
		if (message.content.toLowerCase().includes('rock and stone')) {
			message.channel.send("ROCK AND STONE!");
		}
		if (message.content.toLowerCase().includes('karl')) {
			message.channel.send("FOR KARL!");
		}
	} 
});