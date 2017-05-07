var exports = module.exports = {};
const request = require("request");
exports.executar = function(bot, msg, comandos){
  var ip = msg.content.replace(".localizar ", "").replace(".localizar", "");
  if(ip.length <= 3){
    return msg.channel.sendMessage([
      "`Em resposta a " + msg.author.username + " (ID " + msg.author.id + ")`:",
      "```",
      "IP/Domínio inválido.",
      "```"
    ]);
  }

  request('http://ip-api.com/json/' + ip, function (error, response, body) {
    var ipinfo = JSON.parse(body);
    if(ipinfo.status == "fail"){
      return msg.channel.sendMessage([
        "`Em resposta a " + msg.author.username + " (ID " + msg.author.id + ")`:",
        "```",
        "IP/Domínio inválido.",
        "```"
      ]);
    } else {
      return msg.channel.sendMessage([
        "`Em resposta a " + msg.author.username + " (ID " + msg.author.id + ")`:",
        "```",
        "IP: " + ipinfo.query,
        "PAÍS: " + ipinfo.country,
        "REGIÃO: " + ipinfo.regionName,
        "CIDADE: " + ipinfo.city,
        "CÓDIGO POSTAL: " + ipinfo.zip,
        "LATITUDE: " + ipinfo.lat,
        "LONGITUDE: " + ipinfo.lon,
        "TIMEZONE: " + ipinfo.timezone,
        "ISP: " + ipinfo.isp,
        "ORGANIZAÇÃO: " + ipinfo.org,
        "```"
      ]);
    }
  });
}

exports.info = {
  "nome": "localizar",
  "descricao": "Mostra informações de um IP ou domínio."
}
