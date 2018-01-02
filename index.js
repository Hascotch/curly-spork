// Préparation

const Discord = require('discord.js')

const bot = new Discord.Client()

bot.login('process.env.MzkxMDQwNTQ0MDczMzE4NDEw.DRS42w.nS7tbbGalIpB4RCnaoN-aQpWWGg')

bot.on('ready', function()
{
  bot.user.setGame('faire du sale').catch(console.error)
})

// Exemple de lecture + écriture

bot.on('message', function (message)
{
  if (message.content === "du")
  {
    var alea = Math.random()*3
    if (alea<1)
    {
      message.channel.send('très très sale mamèèèèène tu le saiiiiiiis')
    }
    else if (alea<2)
    {
      message.channel.send('shit de qualité supérieure mon srab')
    }
    else
    {
      message.channel.send('bon pilon bien garni')
    }
  }
})

// Suppression des messages "/poll"

bot.on('message', function (message)
{
  if (message.content.startsWith("/poll"))
  {
    message.delete(3000)
    console.log('J\'ai enlevé un /poll mamène')
  }
})

