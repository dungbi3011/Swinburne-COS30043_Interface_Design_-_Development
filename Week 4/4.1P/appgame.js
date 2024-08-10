Vue.createApp ({
    data() {
      return {guess: 0, msg: "", secret: 0}
    },

    methods: {
        randomNum: function() {
            return Math.floor(Math.random() * 100) + 1;
        },

        checkGuess: function() {
            if (this.guessNum < 1 || this.guessNum > 100) {
                this.msg = "Your number must be between 1 and 100"
            } else {
                if (this.guess - this.secret > 0) {
                    this.msg = "Guess lower";
                } else if (this.guess - this.secret < 0) {
                    this.msg = "Guess higher";
                } else if (this.guess == this.secret) {
                    this.msg = "You got it!!!";
                }
            }
        },

        startOver: function() {
            this.msg = "Start guessing";
            this.secret =  this.randomNum();
        },

        giveUp: function() {
            this.msg = "The secret number is " + this.secret;
        }
    },

    created: function() {
        this.msg = "Start guessing...";
        this.secret = this.randomNum();
    }
}).mount("#app");