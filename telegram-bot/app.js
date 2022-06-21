const token = "5461429216:AAE8t7F3taK1kNProZV5iZjRsSr_Hd2Kg9o"
const { Telegraf } = require('telegraf')


const bot = new Telegraf(token, { hendlerTimeout: 1000})

bot.use((ctx,next) => {
    //ctx.reply('merhaba')
    console.log('middleware')
    next()
})

bot.start((ctx) => {
    ctx.reply('Bot Başlatıldı.')
    ctx.replyWithPhoto({ url: 'https://picsum.photos/200/300?random', filename: 'Resim' })
})

bot.command('test', (ctx) => {
    const video = __dirname + "/video/file.mp4"
    ctx.replyWithVideo({ source: video, filename: 'video' })
})

bot.on('sticker', (ctx) => {
    ctx.reply('Güzel sticker')
})

bot.hears('bot', (ctx) => {
    ctx.replyWithChatAction('upload_photo').then((res) => {
        const photo = __dirname + '/img/tm-bot.png'
        ctx.replyWithPhoto({ source: photo, filename: 'resim' })
    })
})

bot.hears('rehber', (ctx) => {
    ctx.replyWithContact('0555 555 5555', 'Bot')
})

bot.help((ctx) => {
    ctx.reply('Komutlar;')
    ctx.reply('1) /test, 2) /deneme')
})

bot.launch()