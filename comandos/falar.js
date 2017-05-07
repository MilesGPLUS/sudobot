var exports = module.exports = {};
exports.executar = function(bot, msg, comandos){
  msg.channel.sendMessage(msg.content.replace(".falar ", ""));
}

exports.info = {
  "nome": "falar",
  "descricao": "Converse em meu nome."
}
