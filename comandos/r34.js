var exports = module.exports = {};
const request = require("request");
exports.executar = function(bot, msg, comandos){
  var msg_cache = [];

  // pegar as tags da mensagem, MAS ocultar conteúdo furry
  var tags = encodeURIComponent(msg.content.replace(".r34 ", "").replace("r34", "") + " -furry -anthro");

  msg_cache.push("`Em resposta a " + msg.author.username + " (ID " + msg.author.id + ")`:");
  request('http://rule34.xxx/index.php?page=dapi&s=post&q=index&tags=' + tags, function (error, response, xml) {
    var parseString = require('xml2js').parseString;
    parseString(xml, function (err, result) {
      var postsTotais = result.posts.$.count;
      var posts = result.posts.post;
      if(posts == null){
        msg_cache.push("`Nada encontrado. Seu fetiche é novo. (Ou a API está com down)`");
        msg.channel.sendMessage(msg_cache);
        return;
      }
      var postIndex = Math.floor(Math.random()*posts.length);
      var post = posts[postIndex];
      msg_cache.push("http:" + post.$.file_url);
      msg_cache.push("Post número " + postIndex + " de " + posts.length);
      msg.channel.sendMessage(msg_cache);
    });
  });
}

exports.info = {
  "nome": "r34",
  "descricao": "Delicie-se. (Usar tags para filtrar conteúdo é suportado)"
}
