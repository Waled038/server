module.exports = {
  showStats: true, // Booleen | true / false
	website: {
		protocol: 'https://', // https:// or http://
		domain: '', // website link without protocol ex. bot-website.tejas1794.repl.co
		port: 3000,
    cookieSecret: '' // Cookie secret | charaters used store client data
	},
  bot: {
    name: 'ARBOTIX BOT', // Bot Name
    token: 'BOT TOKEN', // Bot token if showing Stats
    logo: '', //Bot Logo used in embeds and favicon
    description: '1 - Emote-Manger, 2 - Moderation, 3 - Music, 4 - Info, 5 - Utilty, 6 - Suggestion', //description of your bot used in embed and website
    support: '', // support server url of your bot
    invite: '', // invite link of your bot
    botlist: '', // Voting website Ex. top.gg
    feature1: {
      main: 'HELP COMMAND', // Feature 1 Heading
      description: 'Dropdown help command with 70+ command and many more command comingsoon.' // Feature 1 Description
    },
    feature2: {
      main: 'DEV INFO', // Feature 2 Heading
      description: '1 - Bot Dev [], 2 - Bot Dev [], 3 - Bot Name [ARBOTIX BOT]'
    },
      feature3: {
      main: 'Arbotix Info', // Feature 3 Heading
      description: '1 - Bot Dev [], 2 - Bot Dev [], 3 - Bot Name []' // Feature 1 Description
    }
  },
  img: {
    img1: '', // help cmd image of your bot ex. https://cdn.discordapp.com/attachments/868823136538333184/889852973713354823/Capture.PNG
    img2: '' // most famous command image of your bot Ex. https://cdn.discordapp.com/attachments/868823136538333184/889853204697849926/Capture.PNG
  }
  
};
