console.log("hey")


let coin = {
    state: 0,
    flip: function() {
        if (Math.floor(Math.random() * 11) <= 5) {
        this.state = 1;
    } else {
        this.state = 0;
    }
        console.log("hey")
        
        

        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
    },
    toString: function() {
        if (this.state === 0) {
            return ("HEADS! ")
        } else {
            return ("TAILS! ")
        }
        
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
    },
    toHTML: function() {
        let image = document.createElement('img');
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        if (this.state === 0) {
            image.src = "https://researchmaniacs.com/Random/Images/Quarter-Heads.png"
        } else { 
            image.src = "http://researchmaniacs.com/Random/Images/Quarter-Tails.png"
        }
        return image;
    }
};



function  display20Flips () {
for (let index = 0; index < 20; index = index + 1) {
    coin.flip()
    coin.toString()
    document.body.append(coin.toString())
    console.log(coin.toString())
    }
}

function display20Images () {
for (let index = 1; index < 20; index = index + 1) {
    coin.flip()
    coin.toHTML()
    document.body.append(coin.toHTML())
    console.log(coin.toHTML())
}
}

display20Images ()
display20Flips ()
// console.log(coin.toHTML())
//document.body.append(coin.toHTML());
