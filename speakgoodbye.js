(function (window) {
    var byeSpeaker = {}; // Create the 'byeSpeaker' object
    var speakWord = "Good Bye";
  
    // Rewrite the 'speak' function to be attached to the byeSpeaker object.
    byeSpeaker.speak = function (name) {
      console.log(speakWord + " " + name);
    };
  
    // Expose the 'byeSpeaker' object to the global scope.
    window.byeSpeaker = byeSpeaker;
  
  })(window);
  