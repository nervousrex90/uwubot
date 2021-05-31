// require the discord.js module
const Discord = require('discord.js');
var auth = process.env.TOKEN;
const uwureaction = [
    'muwu',
	'CitrusUWU'
];
const pogreaction = [
	'rivenpog',
	'DipsPog'
];
const pepereaction = [
	'PepeLazerREEEE'
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
		try {
			let uwu_emoji = message.guild.emojis.cache.find(emoji => emoji.name === random_item(uwureaction));
			message.react(uwu_emoji);
		} catch(error) {
			console.log(`Tried to react with but it failed: ${error}`);
			message.react('🔴');
		}
	}
	if (message.content.toLowerCase().includes('pog')) {
		try {
			let pog_emoji = message.guild.emojis.cache.find(emoji => emoji.name === random_item(pogreaction));
			message.react(pog_emoji);
		} catch(error) {
			console.log(`Tried to react with but it failed: ${error}`);
			message.react('🔴');
		}

	}
	if (message.content.toLowerCase().includes('pepe')) {
		try {
			let pepe_emoji = message.guild.emojis.cache.find(emoji => emoji.name === random_item(pepereaction));
			message.react(pepe_emoji);
		} catch(error) {
			console.log(`Tried to react but it failed: ${error}`);
			message.react('🔴');
		}
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