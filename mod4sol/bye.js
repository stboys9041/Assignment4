
(bye = function (name) {
    var byeSpeaker = {};
    byeSpeaker.bye = name;
    var speakWord = "Good Bye";
    console.log(speakWord + " " + byeSpeaker.bye);
     window.byeSpeaker = byeSpeaker
  })(window);
  