var exports = module.exports = {};

exports.executar = function(bot, msg, comandos, config){
  var msg_cache = [];
  msg_cache.push("`In response to " + msg.author.username + " (ID " + msg.author.id + ")`:", "```Esses são meus comandos:", "");
  for (var comando in comandos) {
    if (comandos.hasOwnProperty(comando)) {
      msg_cache.push("." + comandos[comando].info.nome + " ~ " + comandos[comando].info.descricao);
      msg_cache.push("");
    }
  }
  msg_cache.push("", "```");
  msg.channel.sendMessage(msg_cache);
}

exports.info = {
  "nome": "ajuda",
  "descricao": "Lista meus comandos"
}
