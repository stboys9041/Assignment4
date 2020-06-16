
(hi = function (name) {
    var helloSpeaker = {};
  helloSpeaker.name = name;
    var speakWord = "Hello";
    console.log(speakWord + " " + helloSpeaker.name);
    window.helloSpeaker = helloSpeaker;
  })(window);
  
  
  