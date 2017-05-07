var sitesList=[["http://heeeeeeeey.com/",!1],["http://thatsthefinger.com/",!1],["http://cant-not-tweet-this.com/",!1],["http://weirdorconfusing.com/",!1],["http://eelslap.com/",!1],["http://www.staggeringbeauty.com/",!1],["http://burymewithmymoney.com/",!0],["http://endless.horse/",!1],["http://www.fallingfalling.com/",!0],["http://ducksarethebest.com/",!1],["http://www.trypap.com/",!1],["http://www.republiquedesmangues.fr/",!1],["http://www.movenowthinklater.com/",!1],["http://www.partridgegetslucky.com/",!1],["http://www.rrrgggbbb.com/",!0],["http://beesbeesbees.com/",!1],["http://www.sanger.dk/",!0],["http://www.koalastothemax.com/",!1],["http://www.everydayim.com/",!1],["http://www.leduchamp.com/",!0],["http://r33b.net/",!0],["http://randomcolour.com/",!1],["http://cat-bounce.com/",!0],["http://www.sadforjapan.com/",!0],["http://www.taghua.com/",!0],["http://chrismckenzie.com/",!0],["http://hasthelargehadroncolliderdestroyedtheworldyet.com/",!1],["http://ninjaflex.com/",!1],["http://iloveyoulikeafatladylovesapples.com/",!0],["http://ihasabucket.com/",!1],["http://corndogoncorndog.com/",!1],["http://www.ringingtelephone.com/",!0],["http://www.pointerpointer.com/",!1],["http://imaninja.com/",!1],["http://willthefuturebeaweso.me/",!1],["http://www.ismycomputeron.com/",!1],["http://www.nullingthevoid.com/",!0],["http://www.muchbetterthanthis.com/",!0],["http://www.ouaismaisbon.ch/",!0],["http://www.yesnoif.com/",!1],["http://iamawesome.com/",!1],["http://www.pleaselike.com/",!1],["http://crouton.net/",!1],["http://corgiorgy.com/",!1],["http://www.electricboogiewoogie.com/",!0],["http://www.wutdafuk.com/",!1],["http://unicodesnowmanforyou.com/",!1],["http://www.crossdivisions.com/",!1],["http://tencents.info/",!1],["http://intotime.com/",!0],["http://leekspin.com/",!0],["http://www.patience-is-a-virtue.org/",!1],["http://whitetrash.nl/",!1],["http://www.theendofreason.com/",!1],["http://zombo.com",!0],["http://pixelsfighting.com/",!1],["http://baconsizzling.com/",!1],["http://isitwhite.com/",!1],["http://onemillionlols.com/",!1],["http://www.omfgdogs.com/",!1],["http://oct82.com/",!1],["http://semanticresponsiveillustration.com/",!0],["http://chihuahuaspin.com/",!1],["http://potato.io/",!1],["http://www.blankwindows.com/",!1],["http://www.biglongnow.com/",!0],["http://dogs.are.the.most.moe/",!1],["http://tunnelsnakes.com/",!1],["http://www.infinitething.com/",!1],["http://www.trashloop.com/",!1],["http://www.ascii-middle-finger.com/",!1],["http://www.coloursquares.com/",!1],["http://spaceis.cool/",!1],["https://thebigdog.club/",!1],["http://buildshruggie.com/",!1],["http://buzzybuzz.biz/",!1],["http://yeahlemons.com/",!1],["http://burnie.com/",!1],["http://www.sealspin.com/",!1]];

// essa lista de sites eu kibei msm desculpa

var exports = module.exports = {};
exports.executar = function(bot, msg, comandos) {
  var n = Math.floor(Math.random()*sitesList.length);
  var msg_cache = [
    "`Em resposta a " + msg.author.username + " (ID " + msg.author.id + ")`:",
    "`",
    "Site #" + n + " de " + sitesList.length + ":` " + sitesList[n][0],
  ];
  msg.channel.sendMessage(msg_cache);
}

exports.info = {
  "nome": "webinutil",
  "descricao": "Retorna um site inútil."
}
