var exports = module.exports = {};
const request = require("request");
exports.executar = function(bot, msg, comandos){
  var palavra = msg.content.replace(".udic ", "");

  request('http://api.urbandictionary.com/v0/define?term=' + encodeURIComponent(palavra), function (error, response, body) {
    var info = JSON.parse(body);
    if(info.result_type == "no_results"){
      return msg.channel.sendMessage([
        "`Em resposta a " + msg.author.username + " (ID " + msg.author.id + ")`:",
        "```",
        "Termo desconhecido. (Especificado: " + palavra + ")",
        "```"
      ]);
    } else {
      var post = info.list[0];
      return msg.channel.sendMessage([
        "`Em resposta a " + msg.author.username + " (ID " + msg.author.id + ")`:",
        "```",
        "Termo: ",
         post.word,
         "",
        "Definição: ",
        post.definition,
        "",
        "Exemplo: ",
        post.example,
        "",
        "Likes: " + post.thumbs_up + " | Dislikes: " + post.thumbs_down,
        "```"
      ]);
    }
  });
}

exports.info = {
  "nome": "udic",
  "descricao": "O melhor dicionário da atualidade. Urban Dictionary."
}
