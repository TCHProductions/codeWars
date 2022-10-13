/*Two objects that return a one word name in response to the first letter of the first name and one for the first letter of the surname are already given.

If the first character of either of the names given to the function is not a letter from A - Z, you should return "Your name must start with a letter from A - Z."

Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.*/



    // Code Here
    var firstName = {
        A: 'Alpha',
        B: 'Beta',
        C: 'Cache',
        D: 'Data',
        E: 'Energy',
        F: 'Function',
        G: 'Glitch',
        H: 'Half-life',
        I: 'Ice',
        J: 'Java',
        K: 'Keystroke',
        L: 'Logic',
        M: 'Malware',
        N: 'Nagware',
        O: 'OS',
        P: 'Phishing',
        Q: 'Quantum',
        R: 'RAD',
        S: 'Strike',
        T: 'Trojan',
        U: 'Ultraviolet',
        V: 'Vanilla',
        W: 'WiFi',
        X: 'Xerox',
        Y: 'Y',
        Z: 'Zero'
        };
        
      var surname = {
        A: 'Analogue',
        B: 'Bomb',
        C: 'Catalyst',
        D: 'Discharge',
        E: 'Electron',
        F: 'Faraday',
        G: 'Gig',
        H: 'Hacker',
        I: 'IP',
        J: 'Jabber',
        K: 'Killer',
        L: 'Lazer',
        M: 'Mike',
        N: 'n00b',
        O: 'Overclock',
        P: 'Payload',
        Q: 'Quark',
        R: 'Roy',
        S: 'Spy',
        T: 'T-Rex',
        U: 'Unit',
        V: 'Virus',
        W: 'Worm',
        X: 'X',
        Y: 'Yob',
        Z: 'Zombie'
        };
      
      function aliasGen(first, last) {
        var checkLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if(checkLetter.indexOf(first[0].toUpperCase()) === -1 || checkLetter.indexOf(last[0].toUpperCase()) === -1) {
          return 'Your name must start with a letter from A - Z.'
        } else {
          return firstName[first[0].toUpperCase()] + " " + surname[last[0].toUpperCase()];
        }  
      }  