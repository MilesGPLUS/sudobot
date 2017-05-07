var exports = module.exports = {};
exports.executar = function(bot, msg, comandos){
  var max = msg.content.replace(".sorteio ").replace( /^\D+/g, '');;
  try{
    var n = Math.floor(Math.random()*max);
    var msg_cache = [];
    msg_cache.push("`Em resposta a " + msg.author.username + " (ID " + msg.author.id + ")`:");
    msg_cache.push("`O número sorteado foi " + n + "!`");
    msg.channel.sendMessage(msg_cache);
  } catch(ex) {}
}

exports.info = {
  "nome": "sorteio",
  "descricao": "USO: .sorteio x. Sorteia um número de 1 a x."
}
