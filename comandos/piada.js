var exports = module.exports = {};
const request = require("request");
exports.executar = function(bot, msg, comandos){

  // TRISTE REALIDADE

  request('http://www.piadasnet.com/syndication/joke.php', function (error, response, body) {
    var piada = unescape(body);
    var re = new RegExp("</?a(?:(?= )[^>]*)?>");
    piada = piada.replace(re, "");
    piada = piada.replace('document.write(unescape("<div align=center><table border="0" cellpadding="1" cellspacing="1">', "");
    piada = piada.replace('<tr>', "");
    piada = piada.replace('<td height="27" colspan="3" valign="middle"><div align="center">', "");
    piada = piada.replace('<b><a href="" target="_blank">', "");
    piada = piada.replace('</a></b>', "");
    piada = piada.replace('</div></td>', "");
    piada = piada.replace('</tr>', "");
    piada = piada.replace('<td colspan="3" valign="top"><div align="justify"><span>', "");
    piada = piada.replace('<tr>', "");
    piada = piada.replace('</tr>', "");
    piada = piada.replace('</table>', "");
    piada = piada.replace('</div>', "");
    piada = piada.replace('"));', "");
    piada = piada.replace('</div>', "");
    piada = piada.replace('<b>', "");
    piada = piada.replace('</span>', "");
    piada = piada.replace('</td>', "");
    piada = piada.replace('</span></div></td></tr></tbody></table></div>', "");
    for(var i = 0; i < 5; i++){

      piada = piada.replace("            ", "");
      piada = piada.replace("           ", "");
      piada = piada.replace("          ", "");
      piada = piada.replace("         ", "");
      piada = piada.replace("        ", "");
      piada = piada.replace("       ", "");
      piada = piada.replace("      ", "");
      piada = piada.replace("     ", "");
      piada = piada.replace("    ", "");
      piada = piada.replace("   ", "");
      piada = piada.replace("  ", "");

    }
    piada = piada.replace(/\r?\n|\r/g, "");
    var msg_cache = [
      "`Em resposta a " + msg.author.username + " (ID " + msg.author.id + ")`:",
      "```",
      piada,
      "```"
    ];
    msg.channel.sendMessage(msg_cache);
  });
}

exports.info = {
  "nome": "piada",
  "descricao": "Conta uma piada muito engraçada. Não se esqueça de floodar 'KKK' antes da piada aparecer."
}
