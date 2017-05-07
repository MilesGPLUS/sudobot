var exports = module.exports = {};
exports.executar = function(bot, msg, comandos){
  msg.channel.sendMessage('Ping?').then(message => {
    message.edit("`Em resposta a " + msg.author.username + " (ID " + msg.author.id + ")`:\n" + `Pong! (${message.createdTimestamp - msg.createdTimestamp}ms)`);
  });
}

exports.info = {
  "nome": "ping",
  "descricao": "Verifica o ping da API Discord."
}
