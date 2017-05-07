var exports = module.exports = {};

exports.executar = function(bot, msg, comandos, config){

  //se o autor da mensagem não é o dono do bot, ignorar
  if(msg.author.id != config.donoid) return msg.channel.sendMessage([
    "`In response to " + msg.author.username + " (ID " + msg.author.id + ")`:",
    "```",
      "[sudo] Unknown discriminator " + msg.author.discriminator + ".",
      "       Who are you?",
    "```"
  ]);
  
  try{
    var codigo = msg.content.replace(config.prefix + " eval ", "");

    var evalR = eval(codigo);
    if (typeof evalR !== "string") evalR = require("util").inspect(evalR);
    return msg.channel.sendMessage([
      "`In response to " + msg.author.username + " (ID " + msg.author.id + ")`:",
      "```",
      formatar(evalR),
      "```"
    ]);
  }catch(ex){
    return msg.channel.sendMessage([
      "`In response to " + msg.author.username + " (ID " + msg.author.id + ")`:",
      "```",
      formatar(ex),
      "```"
    ]);
  }
}

exports.info = {
  "nome": "eval",
  "descricao": "Executa JavaScript arbitrário."
}

function formatar(texto) {
  if (typeof(texto) === "string")
    return texto.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return texto;
}
