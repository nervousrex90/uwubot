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
	'https://media.tenor.com/images/79b62ed803d210a441d589bb874ddeae/tenor.gif',
	'https://media.tenor.com/images/123a68b46c5f291619358a2efb94c70a/tenor.gif',
	'https://media.tenor.com/images/74e5f8b76795875f9b06a05b4c6ee842/tenor.gif',
	'https://media.tenor.com/images/b1600916c13300a8e414bfaa474d84f8/tenor.gif',
	'https://media1.tenor.com/images/58fde03dc4c22c6bb55ec0a3c5d6c749/tenor.gif?itemid=10111831',
	'https://media1.tenor.com/images/9428971d6d175764dc13c719740114e1/tenor.gif?itemid=19168029',
	'https://media1.tenor.com/images/30e1029fd63cb44bdb22e721d8454792/tenor.gif?itemid=17487624',
];
const pepegifs = [
	'https://media1.tenor.com/images/f550faf07f1493f22e1daf93568eadd3/tenor.gif?itemid=12683546',
	'https://media1.tenor.com/images/bf9c687cbaf1b5b2ef3caa9075a6bae8/tenor.gif?itemid=17946795',
	'https://media1.tenor.com/images/82168e2a49530193a66b0396f925aba0/tenor.gif?itemid=18805786',
	'https://media1.tenor.com/images/d1dbb3a232bd162527ff0ae6732e5d7e/tenor.gif?itemid=16009739',
	'https://media1.tenor.com/images/66b2e11e4c3f5488b3700dcc273728a7/tenor.gif?itemid=18126506',
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
	if (message.content.toLowerCase().includes('pepe')) {
		message.channel.send(random_item(pepegifs));
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