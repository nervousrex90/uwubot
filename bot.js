// require the discord.js module
const Discord = require('discord.js');
var auth = process.env.TOKEN;
const uwureaction = [
    'message.guild.emojis.cache.find(emoji => emoji.name === 'muwu'',
	'message.guild.emojis.cache.find(emoji => emoji.name === 'CitrusUWU'',
];
const pogreaction = [
	'message.guild.emojis.cache.find(emoji => emoji.name === 'rivenpog'',
	'message.guild.emojis.cache.find(emoji => emoji.name === 'DipsPog'',
	'message.guild.emojis.cache.find(emoji => emoji.name === 'rivenpog'',
	'message.guild.emojis.cache.find(emoji => emoji.name === 'hyperpogcat'',
	'message.guild.emojis.cache.find(emoji => emoji.name === 'poggies'',
];
const pepereaction = [
	'message.guild.emojis.cache.find(emoji => emoji.name === 'PepeLazerREEEE'',
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
		message.react(uwureaction));
	}
	if (message.content.toLowerCase().includes('pog')) {
		message.react(pogreaction));
	}
	if (message.content.toLowerCase().includes('catjam')) {
		message.channel.send(random_item(catjam));
	}
	if (message.content.toLowerCase().includes('pepe')) {
		message.react(pepereaction));
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