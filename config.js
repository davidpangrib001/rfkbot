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

gc1 = 'https://tinyurl.com/grupex1'
gc2 = 'https://tinyurl.com/grupex2'
gc3 = '𝖢𝗈𝗆𝗂𝗇𝗀 𝖲𝗈𝗈𝗇..'
global.linkGC = ['https://chat.whatsapp.com/LyMfZPkvku447yNryUkF3W', 'Coming Soon..'] // ganti jadi group lu
global.owner = ['6282160268332','6282128475388'] // Put your number here //owner eval
global.kontak = ['6282160268332','0','6282128475388'] //Ketika ada yang ngetik #owner
global.mods = ['0'] // Want some help?
global.prems = ['6282160268332'] // Premium user has unlimited limit
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
  'https://api.lolhuman.xyz': 'c970350d8b6c853cf77eb2bb',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

lolkey = 'c970350d8b6c853cf77eb2bb'
zekskey = 'apivinz'
xteamkey = '7a99fbd6b77336d5'
//xteam        MIMINETBOT
namaig = 'GAK ADA :)'
namagithub = 'GAK ADA :)'
kasihcaption = `*_Punten.. Nih Gopud kamu.._*`
namakontak1 = 'David'
namakontak2 = 'David'

//kasihcaption = `Sudah Selesai..`

// Sticker WM
global.packname = '𝘌𝘹𝘱𝘦𝘳𝘪𝘦𝘯𝘤𝘦 𝘉𝘰𝘵' // ganti aja
global.author = 'Bot' // ganti aja

//yyy
bc = '𝘌𝘹𝘱𝘦𝘳𝘪𝘦𝘯𝘤𝘦 𝘉𝘰𝘵' //ANDRIIxBOTZ Broadcast
footer = '\n©𝑬𝒙𝒑𝒆𝒓𝒊𝒆𝒏𝒄𝒆'
namabot = '𝘌𝘹𝘱𝘦𝘳𝘪𝘦𝘯𝘤𝘦 𝘉𝘰𝘵'
namalu = '𝘋𝘢𝘷𝘪𝘥'


// 
wait = '*_Tunggu, gopud-nya ingin siap.._*'
global.wait = '𝗦𝗮𝗯𝗮𝗿.. 𝗚𝗼𝗽𝘂𝗱-𝗻𝘆𝗮 𝗶𝗻𝗴𝗶𝗻 𝘀𝗶𝗮𝗽..'
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
