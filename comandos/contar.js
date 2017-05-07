var exports = module.exports = {};
exports.executar = function(bot, msg, comandos){
  msg.channel.sendMessage("`Aguardando...`").then(message => {
    var max = msg.content.replace(".contar ", "").replace(".contar", "");
    if(max.length == 0 || !seTratadeInt(max)){ max = 50 } else { max++ };
    if(max > 20) max = 20;
    var contador = 0;
    var intervalo = setInterval(() => {
      contador++;
      if(contador == max){
        message.edit("```Pronto!```");
        clearInterval(intervalo);
      } else {
        message.edit("`Em resposta a " + msg.author.username + " (ID " + msg.author.id + ")`:```" + (max - contador) + " \n\nContador lagando? É o Discord de cu doce por editar muito frequentemente.```");
      }
    }, 1000);
  });
}

exports.info = {
  "nome": "contar",
  "descricao": "USO: .contar [x]; faz uma contagem regressiva de 1 a x."
}

function seTratadeInt(value) {
  return !isNaN(value) &&
         parseInt(Number(value)) == value &&
         !isNaN(parseInt(value, 10));
}
