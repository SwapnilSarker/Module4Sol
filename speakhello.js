(function (window) {
    var helloSpeaker = {}; // Create the 'helloSpeaker' object
    var speakWord = "Hello";
  
    // Rewrite the 'speak' function to be attached to the helloSpeaker object.
    helloSpeaker.speak = function (name) {
      console.log(speakWord + " " + name);
    };
  
    // Expose the 'helloSpeaker' object to the global scope.
    window.helloSpeaker = helloSpeaker;
  
  })(window);
  