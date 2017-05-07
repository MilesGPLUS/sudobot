var exports = module.exports = {};

exports.executar = function(bot, msg, comandos){
  var texto = msg.content.replace(".binario", "");
  var binario = "";
  for (var i = 0; i < texto.length; i++) {
    binario += texto[i].charCodeAt(0).toString(2);
  }
  return msg.channel.sendMessage([
    "`Em resposta a " + msg.author.username + " (ID " + msg.author.id + ")`:",
    "```",
    "De: " + texto,
    "Para: " + binario,
    "```"
  ]);
}

exports.info = {
  "nome": "binario",
  "descricao": "Converte texto para binário."
}
