const { Telegraf } = require('telegraf')

const bot = new Telegraf("5738959061:AAGwOUxq4k-QKhf11UU5nO3XuaAslwCQ2pU")

/// are standard commands

bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))

// custom commands

bot.command("nihal", (ctx) => {
  ctx.reply(" please do not disturb");
})

// repiies after receiving a sticker (event)

bot.on('sticker', (ctx) => ctx.reply('👍'))

// hears is used for text rather than tags

bot.hears('hi', (ctx) => ctx.reply('Hey there you'))

exports.handler = (event,context,callback) => {
  const tmp = JSON.parse(event.body);
  bot.handleUpdate(tmp);
  return callback(null, {
    statusCode: 200,
    body: '',
  })
}
