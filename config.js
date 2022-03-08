// Bismillahirrahmanirrahim
// thank you to ALLAH Swt
// thank you to Nurutomo as wabot-aq
// thank you to ariffb as stikerinbot
// thank you to botstylee
// thank you to bochilgaming as games-wabot
// thank you to benni ismael
// thank you to zerochanBot
// thank you to fernazer
// thank you to MikeBot Dev Team
// thank you to ALL Bot creator
// and thanks you to who support my Bot

gc1 = 'https://s.id/TRLC'
gc2 = 'https://s.id/TRLO'
gc3 = 'https://s.id/TRMr'
gc4 = 'https://s.id/TRMV'
global.linkGC = ['https://chat.whatsapp.com/LyMfZPkvku447yNryUkF3W', 'Coming Soon..'] // ganti jadi group lu
global.owner = ['6282160268332','6282128475388'] // Put your number here //owner eval
global.kontak = ['6282160268332', '0', '6282128475388'] //Ketika ada yang ngetik #owner
global.mods = ['0'] // Want some help?
global.prems = ['6282160268332', '60149431385', '6287850603424'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com', 
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey' (apikey kalian)
  'https://api.xteam.xyz': '7a99fbd6b77336d5',
  'https://api.lolhuman.xyz': '8f95a2523597e53f0af39585',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

lolkey = '8f95a2523597e53f0af39585'
zekskey = 'apivinz'
xteamkey = '7a99fbd6b77336d5'
//xteam        MIMINETBOT
namaig = 'GAK ADA :)'
namagithub = 'GAK ADA :)'
kasihcaption = `𝖥𝗂𝗇𝗂𝗌𝗁𝖾𝖽`
namakontak1 = 'David'
namakontak2 = 'David'

//kasihcaption = `Sudah Selesai..`

// Sticker WM
global.packname = '𝗢𝗻𝗲 𝗕𝗼𝘁' // ganti aja
global.author = 'Bot' // ganti aja

//yyy
bc = '𝗢𝗻𝗲 𝗕𝗼𝘁' //ANDRIIxBOTZ Broadcast
footer = '\n𝖡𝗒 𝖮𝗇𝖾 𝖡𝗈𝗍'
namabot = '𝖮𝗇𝖾 𝖡𝗈𝗍'
namalu = '𝖣𝖺𝗏𝗂𝖽'


// 
wait = '*_Tunggu, gopud-nya ingin siap.._*'
global.wait = '𝖡𝖾 𝗉𝖺𝗍𝗂𝖾𝗇𝗍.. 𝗍𝗁𝖾 𝗈𝗋𝖽𝖾𝗋 𝗐𝖺𝗇𝗍𝗌 𝗍𝗈 𝖿𝗂𝗇𝗂𝗌𝗁..'
global.rpg = 'Fitur Rpg Dimatikan\nKetik *.enable* *rpg* untuk menggunakan fitur ini!\nKalo Mau main Disini aja\nhttps://chat.whatsapp.com/FnNAbem8o6r4pgLhSdO8Q9'
global.nsfw = 'Fitur NSFW Dimatikan\nKetik *.enable* *nsfw* untuk menggunakan fitur ini!\n“ *Katakanlah kepada orang laki-laki yang beriman: Hendaklah mereka menahan pandanganya, dan memelihara kemaluannya; … Katakanlah kepada wanita yang beriman: Hendaklah mereka menahan pandangannya, dan kemaluannya, dan janganlah mereka Menampakkan perhiasannya, kecuali yang (biasa) nampak dari padanya*, ” \n(TQS. Al-Nur [24]: 30-31).'
global.eror = 'Hehe, maaf server emror..'

global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='

// tingkat kesulitan, semakin tinggi semakin susah
global.multiplier = 36 // The higher, The harder levelup

//*****************PEMBATAS*********************
// JANGAN DI GANTI NTAR KLO GABISA JAN TANYA GW

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
