function liste(arr)
{
  var x = ""
  var z = ""
  for (var i =0 ; i<arr.length; i++)
  {
    z = x + arr[i] + " "
    x = z
  }
  return x
}

// Préparation

const Discord = require('discord.js')

const bot = new Discord.Client()

bot.login(process.env.BOT_TOKEN)

bot.on('ready', function()
{
  bot.user.setPresence({ game: { name: 'faire du sale', type: 0 } });
})

// Exemple de lecture + écriture

bot.on('message', function (message)
{
  if (message.content === "du")
  {
    var alea = Math.random()*3
    if (alea<1)
    {
      message.channel.send('... très très sale mamèèèèène tu le saiiiiiiis')
    }
    else if (alea<2)
    {
      message.channel.send('... shit de qualité supérieure mon srab')
    }
    else
    {
      message.channel.send('... bon pilon bien garni')
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


var inscrits = []

bot.on('message', function (message)
{
  if (message.content === "-in")
  {
    var x = 0
    for(var i = 0; i<inscrits.length; i++)
    {
      if (inscrits[i]==message.author)
      {
        x=1
      }
    }
    if (x==0)
    {
      inscrits[inscrits.length] = message.author
      message.react("😁")
      message.channel.send(message.author + " s'est inscrit(e) ! :blush:")
      message.delete(1000)
      message.channel.send({
      embed: {color: 3447003, fields: [
      {
        name: "Nombre d'inscrits : " + inscrits.length,
        value: liste(inscrits)
      }
      ]}
      })
    }
    else
    {
      message.delete(1000)
      message.channel.send("Deja inscrit(e) !")
    }
  }
})

bot.on('message', function (message)
{
  if (message.content === "-out")
  {
    var x = 0
    var y = -1
    for(var i = 0; i<inscrits.length; i++)
    {
      if (inscrits[i]==message.author)
      {
        x=1
        y=i
      }
    }
    if(x==1)
    {
      message.react("😞")
      message.delete(1000)
      message.channel.send(message.author + " s'est désinscrit(e) :sob:")
      inscrits.splice(y,1)
      message.channel.send({
      embed: {color: 3447003, fields: [
      {
        name: "Nombre d'inscrits : " + inscrits.length,
        value: liste(inscrits)
      }
      ]}
      })
    }
    else
    {
      message.delete(1000)
      message.channel.send("Vous n'étiez pas inscrit(e) !")
    }
  }
})


bot.on('message', function (message)
{
  if (message.content === "-ins")
  {
    message.delete(1000)
      message.channel.send({
      embed: {color: 3447003, fields: [
      {
        name: "Nombre d'inscrits : " + inscrits.length,
        value: liste(inscrits)
      }
    ]}
    })
  }
})

bot.on('message', function (message)
{
  if (message.content === "Deja inscrit(e) !")
  {
    message.delete(3000)
  }
})

bot.on('message', function (message)
{
  if (message.content === "Vous n'étiez pas inscrit(e) !")
  {
    message.delete(3000)
  }
})
