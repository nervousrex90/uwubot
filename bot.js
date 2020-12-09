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
	'https://media1.tenor.com/images/2ef17ce6f7755655aad9e3495a312a96/tenor.gif?itemid=18199442',
	'https://media.tenor.com/images/ffc2249d8ac4c663317e2daee47c9fa0/tenor.gif',
	'https://media1.tenor.com/images/1480f2099b3b09fd45036ac47e724f6d/tenor.gif?itemid=18394478',
	'https://media1.tenor.com/images/e6cfffbcc6a22eb1843f2d15d2ebc2f5/tenor.gif?itemid=18789648',
	'https://media1.tenor.com/images/58fde03dc4c22c6bb55ec0a3c5d6c749/tenor.gif?itemid=10111831',
	'https://media1.tenor.com/images/9428971d6d175764dc13c719740114e1/tenor.gif?itemid=19168029',
	'https://media1.tenor.com/images/30e1029fd63cb44bdb22e721d8454792/tenor.gif?itemid=17487624',
];
const catjam = [
	'https://media1.tenor.com/images/ad8183f947907fff72624b99098b368f/tenor.gif?itemid=17946989'
];
const shaxxquote = [
	"The Crucible rewards persistence.",
	"Another battle won. Onto the next fight",
	"Haha! Is that what victory smells like?",
	"I know total domination when I see it! Superb!",
	"Skill is its own weapon. You wield it well.",
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
	if (message.content.toLowerCase().includes('catjam')) {
		message.channel.send(random_item(catjam));
	}
	if (message.content.includes('1v1 me')) {
		let user = message.mentions.users.first();
		let sender = message.author; 
		if (user === undefined) return;
		const userscore = Math.floor((Math.random()*100+1)/2);
		const senderscore = Math.floor((Math.random()*100+1)/2);
		message.channel.send({embed: {
			color: 7419530,
			title: "Match Results",
			description: `${sender}: ${senderscore} | ${user}: ${userscore}`,
			timestamp: new Date(),
			footer: {
				text: random_item(shaxxquote)
			}
		}
	})};
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