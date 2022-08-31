// 👈 You Can change this your choice 
// 👈 You Can change this your choice 
const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}
// 👈 You Can change this your choice
global.emoji01 = ['🐼'] // 👈 Enter your Emoji 
global.emoji02 = ['🦋'] //👈 Enter your Emoji
global.notice = ` *Hi 🥰 I m*
*R3d Ξ*
*I am 16 years old developer...*
*From Sri Lanka 🇱🇰*
*I am a Learning.*
*Not more..*
*Also I am Student*
*خد واتس - https://wa.me/+201280063001*`  // 👈 Enter Your details and Social Media Links and Anything
global.owner =  ['+201280063001'] //👈  Enter Your number
global.premium =  ['+20180063001'] //👈  Enter Your number
global.ownernomer = '+201280063001' //👈  Enter Your number
global.ownername = 'R3D' //👈 Enter Your name
global.botname = 'R3D ＢＯＴ' //👈 Enter Your Bot name
global.footer = '© 𝖯𝗈𝗐𝖾𝗋𝖾𝖽 𝖡𝗒 R3D 𝖡𝗈𝗍' //👈 Enter Your Name
global.ig = 'https://github.com/Zenoixnoize/GARFIELD-WHATSAPP-BOT-v8' // 👈 You Can change this your choice
global.region = 'India, South India, Kerala' // 👈 You Can change this your choice
global.sc = 'https://github.com/Zenoixnoize/GARFIELD-WHATSAPP-BOT-v8'
global.fbt = 'Follw Us ℹ️' // 👈 Enter (Subscribe/Follow/Like now)
global.myweb = 'https://wa.me/+201280063001'// 👈 Enter your Social media link to follow now button
global.welcome = '*💗نورت الروم🦋*' // 👈 You Can change this your choice
global.bye = '*الروم خسر معزه🐼*' // 👈 You Can change this your choice
global.packname = 'R3D-BOTv8'  // 👈 You Can change this your choice 
global.author = 'R3D DEVELOPMENT' // 👈 You Can change this your choice 
global.sessionName = 'session' // 👈 You Can change this your choice
global.prefa = ['','!','.','🛰️','⚓','🍎'] // 👈 You Can change this your choice
//Go to https://imgbb.com/, upload a photo of your choice and put its link here
global.thumb =  'https://i.ibb.co/Jz0mMnC/Pics-Art-22-06-03-01-01-46-876.png' 
global.spoty = 'https://i.postimg.cc/HW2YbN1b/Pics-Art-22-08-09-16-12-14-489.png'
//Go to https://imgbb.com/, upload a photo of your choice and put its link here
global.sp = '⭔'
global.mess = {
    success: 'Done 🦋', // 👈 You Can change this your choice
    admin: 'بطل لعب يا بابا, // 👈 You Can change this your choice
    botAdmin: 'لازم اكون ادمن!', // 👈 You Can change this your choice
    owner: 'لما رعد يؤمرني!', // 👈 You Can change this your choice
    group: 'في الجروبات بس!', // 👈 You Can change this your choice
    private: 'في البرايفيت بس!', // 👈 You Can change this your choice
    bot: 'دا شغلي انا ملكش دعوه', // 👈 You Can change this your choice
    wait: 'اصبر علي نفسك الدنيا هتطير', // 👈 You Can change this your choice
    error: 'Error! Maybe Api Key Is Expired🤔!', // 👈 You Can change this your choice
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours', } // 👈 You Can change this your choice
/// Do Not Change 👇 
global.limitAwal = "99999999999999999"
global.lolkey = "835641f3d2d1b6971e1fd132"
global.xteam = "apivproject"
global.xcodeapi = "5S3epf7hC2"
global.dapaapi = "piceg"
global.sankey = "sanuwa"
global.xteamkey = "nandowangy"
global.carkey = "cakrayp24Q6"
global.violkey = "beta"
global.HunterApi = "FuckBitch"
global.neokey = "V8qnSaTq"
global.riy = "RiyGanz"

    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
