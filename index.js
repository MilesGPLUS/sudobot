const fs = require("fs");
const config = JSON.parse(fs.readFileSync("./bot.json"));
const Discord = require("discord.js");
const bot = new Discord.Client();
const glob = require("glob");
const colors = require("colors");

let comandos = {};
bot.on('ready', () => {

  process.stdout.write('\033c'); // limpar console

	console.log("Iniciado.".bgGreen.white);
	glob("./comandos/*.js", {}, function(er, files) {
		for (var i = 0; i < files.length; i++) {
			var comando = require(files[i]);
      // carregar comandos no objeto comandos {}
			comandos[comando.info.nome] = comando;
		}
	});
});

bot.on('message', msg => {
  // se o autor da mensagem é o bot, ignore
  if(msg.author.bot) return;

  // se não começar com o prefix, ignore e faça o log da mensagem
	if (msg.content.charAt(0) != config.prefix){
    console.log(msg.author.username.bgBlue.white + " " + msg.cleanContent);
    return;
  }

  var comando = msg.content.replace(".", "").split(" ");

  // se o comando existe, executar
  if (comandos.hasOwnProperty(comando[0])) {
    console.log(msg.author.username.bgBlue.white + " executou o comando " + ".".bgWhite.black + comando[0].bgWhite.black);
    comandos[comando[0]].executar(bot, msg, comandos, config);
  }
});

bot.login(config.token);
