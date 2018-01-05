// Préparation

const Discord = require('discord.js')

const bot = new Discord.Client()

bot.login(process.env.BOT_TOKEN)

bot.on('ready', function()
 {
   bot.user.setPresence({ game: { name: 'faire du sale', type: 0 } });
 })

// Exemple de lecture + écriture + aléatoire

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
}

bot.on('message', function (message)
{
  if (message.content === "du" && message.channel.name == "general")
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
    message.delete(1000)
  }
})

// Suppression des messages "/poll"

bot.on('message', function (message)
{
  if (message.content.startsWith("/poll"))
  {
    message.delete(1000)
    console.log('J\'ai enlevé un /poll mamène')
  }
})

// Inscriptions aux events

bot.on('message', function (message)
{
  if (message.content === "-in" && message.channel.name === "events")
  {
 
  var x = 0
  var k = 0
  var sdf = bot.channels.find('name','pilloniere').fetchMessages({limit: 100})
  .then(messages => 
    {
      let messagesArr = messages.array();
      let messageCount = messagesArr.length;
      for (var i = 0; i<messageCount; i++)
      {
        if (messagesArr[i].content == message.author.id)
        {
          x=1;
        }
        else
        {
          k++;
        }
      }

      if (k==messageCount)
      {

        // PAS INSCRIT

        // MAMEN
        bot.channels.find('name','pilloniere').send(message.author.id)
        
        var alea = Math.random()*5
        if (alea<1)
        {
          message.react("😁")
        }
        else if (alea<2)
        {
          message.react("🎉")
        }
        else if (alea<3)
        {
          message.react("🇳")
          setTimeout(function()
          {       
            message.react("🇮")
          }, 500);
          setTimeout(function()
          {       
            message.react("🇨")
          }, 1000);
          setTimeout(function()
          {       
            message.react("🇪")
          }, 1500);
        }
        else if (alea<4)
        {
          message.react("🙃")
        }
        else
        {
          message.react("😍")
        }


        
        message.channel.send(message.author + " s'est inscrit(e) ! :blush:")
      

        setTimeout(function()
        {
          var titre = ""
          var re = ""
          var sdd = bot.channels.find('name','pilloniere').fetchMessages({limit: 100})
         .then(messages => 
            {
              let messagesArr = messages.array();
              let messageCount = messagesArr.length;
              for (var i = 0; i<messageCount; i++)
              {
                re += "<@"
                re += messagesArr[i].content
                re += "> "
              }
              
              var sdh = bot.channels.find('name', 'main-event').fetchMessages({limit: 1})
              .then(messages2 => 
                {
                  titre = messages2.array()[0].content
                  message.channel.send({
              embed: {color: 1872, title: titre, fields: [
              {
                name: "Nombre d'inscrits : " + messageCount,
                value: re
              }
              ]}
              })
                }
              ).catch(console.error);
            }
          ).catch(console.error);
        }, 100);   
      }
      else if (x==1)
      {
        // DEJA INSCRIT
        message.channel.send("Deja inscrit(e) !")
        message.delete(1000)
      }
    }
   ) 
  .catch(console.error);
}


})

bot.on('message', function (message)
{
  if (message.content === "-out" && message.channel.name === "events")
  {

    var x = 0
    var k = 0
    var sdf = bot.channels.find('name','pilloniere').fetchMessages({limit: 100})
    .then(messages => 
      {
        let messagesArr = messages.array();
        let messageCount = messagesArr.length;
        for (var i = 0; i<messageCount; i++)
        {
          if (messagesArr[i].content == message.author.id)
          {
            messagesArr[i].delete()
            x=1;
          }
          else
          {
            k++;
          }
        }

        if (k==messageCount)
        {
          // PAS INSCRIT
          message.channel.send("Vous n'étiez pas inscrit(e) !")
          message.delete(1000)
        }
      else if (x==1)
      {
        // DEJA INSCRIT

        message.react("😞")
        message.channel.send(message.author + " s'est désinscrit(e) :sob:")
        setTimeout(function()
        {
          var titre = ""
          var re = ""
          var sdd = bot.channels.find('name','pilloniere').fetchMessages({limit: 100})
          .then(messages => 
            {
              let messagesArr = messages.array();
              let messageCount = messagesArr.length;
              for (var i = 0; i<messageCount; i++)
              {
                re += "<@"
                re += messagesArr[i].content
                re += "> "
              }
              var sdh = bot.channels.find('name', 'main-event').fetchMessages({limit: 1})
              .then(messages2 => 
                {
                  titre = messages2.array()[0].content
                  message.channel.send({
              embed: {color: 1872, title: titre, fields: [
              {
                name: "Nombre d'inscrits : " + messageCount,
                value: re
              }
              ]}
              })
                }
              ).catch(console.error);
            }
          ).catch(console.error);
        }, 100);
      }
    }
   ) 
  .catch(console.error);
  }
})


bot.on('message', function (message)
{
  if (message.author.id != '391040544073318410' && message.content != "-in" && message.content != "-out" && message.content != "-teams" && message.channel.name === "events")
  {

    message.delete(1)
  }
})

bot.on('message', function (message)
{
  if (message.content === "Deja inscrit(e) !")
  {
    message.delete(1000)
  }
})

bot.on('message', function (message)
{
  if (message.content === "Vous n'étiez pas inscrit(e) !")
  {
    message.delete(1000)
  }
})

bot.on('message', function (message)
{
  if (message.content === 'très très sale mamèèèèène tu le saiiiiiiis' || message.content === 'shit de qualité supérieure mon srab' || message.content === 'bon pilon bien garni')
  {
    message.delete(1000)
  }
})

bot.on('message', function (message)
{
  if (message.content === "-delete" && message.author.id == '299655232433160193' && message.channel.name == 'pilloniere')
  {
    var sdf = bot.channels.find('name','pilloniere').fetchMessages({limit: 100})
    .then(messages => 
      {
        let messagesArr = messages.array();
        let messageCount = messagesArr.length;
        for (var i = 0; i<messageCount; i++)
        {
          messagesArr[i].delete()
          
        }
     }).catch(console.error)
  }
})

bot.on('message', function (message)
{
  if (message.content === "-teams" && message.channel.name === "events")
  {
    var titre = ""
    var t1 = ""
    var t2 = ""
    var sdd = bot.channels.find('name','pilloniere').fetchMessages({limit: 100})
   .then(messages => 
      {
        let messagesArr = messages.array();
        shuffle(messagesArr)
        let messageCount = messagesArr.length;
        for (var i = 0; i<Math.floor((messageCount+1)/2); i++)
        {
          t1 += "<@"
          t1 += messagesArr[2*i].content
          t1 += "> "
        }
        for (var i = 0; i<Math.floor((messageCount)/2); i++)
        {
          t2 += "<@"
          t2 += messagesArr[(2*i)+1].content
          t2 += "> "
        }
        
        var sdh = bot.channels.find('name', 'main-event').fetchMessages({limit: 1})
        .then(messages2 => 
          {
            titre = messages2.array()[0].content
                  message.channel.send({
              embed: {color: 1872, title: titre, fields: [
              {
                name: "Team 1",
                value: t1
              },
              {
                name: "Team 2",
                value: t2
              }
              ]}
              })
          }
        ).catch(console.error)
      }
    ).catch(console.error)
  }
})
