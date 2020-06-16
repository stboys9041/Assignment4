
(function () {
    var names = ["Prince", "Jassi", "Jasmine", "Tanya", "Neerav", "Vasu", "Jashon", "Anandita", "Jatinder", "Joginder"];
    for (var i = 0; i < names.length; i++) {
      var firstLetter = names[i].charAt(0).toLowerCase();
    
      if (firstLetter === 'j') {
        bye(names[i]);
      } else {
        hi (names[i]);
      }
    }
    })();
    