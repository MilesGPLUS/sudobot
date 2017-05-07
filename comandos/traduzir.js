var exports = module.exports = {};
const translator = require('google-translator');
exports.executar = function(bot, msg, comandos){
  try{
    JSON.parse(msg.content.replace(".traduzir ", ""));
  } catch(ex){
    msg.channel.sendMessage("`Em resposta a " + msg.author.username + " (ID " + msg.author.id + ")`:\n" + 'Não foi possível traduzir. Tenha certeza que a sintaxe está correta: .traduzir ["<de>", "<para>", "<texto>"]. INCLUA os "",[]. LÍNGUAS: https://pastebin.com/raw/vqiEAYVg');
    return;
  }
  var code = JSON.parse(msg.content.replace(".traduzir ", ""));
translator(code[0], code[1], code[2], response => {
    var msg_cache = [
      "`Em resposta a " + msg.author.username + " (ID " + msg.author.id + ")`:",
      "```",
      "Tradução feita com sucesso!",
      "De: " + code[0],
      "Para: " + code[1],
      "-----------------",
      response.text,
      "-----------------",
      "LÍNGUAS: https://pastebin.com/raw/vqiEAYVg",
      "```"
    ];
    msg.channel.sendMessage(msg_cache);
});
}

exports.info = {
  "nome": "traduzir",
  "descricao": "Traduz texto. LÍNGUAS: https://pastebin.com/raw/vqiEAYVg"
}
