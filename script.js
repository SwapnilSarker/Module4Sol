(function () {

    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  
    for (var i = 0; i < names.length; i++) {
      var firstLetter = names[i].charAt(0).toLowerCase();
  
      if (firstLetter === 'j') {
        byeSpeaker.speak(names[i]); // Use byeSpeaker's 'speak' method
      } else {
        helloSpeaker.speak(names[i]); // Use helloSpeaker's 'speak' method
      }
    }
  
  })();
  