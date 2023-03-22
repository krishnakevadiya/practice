let amar = {
    name: "object A",
    say: function(greet) {
        alert(greet + ", " + this.name);
    }
}

amar.say("Hi"); 


let akbar = {
    name: "object A",
    say2: function(greet) {
        alert(greet + ", " + this.name);
    }
}

akbar.say2("Hi"); 



let anthony = {
    name: "object A",
    say3: function(greet) {
        alert(greet + ", " + this.name);
    }
}

anthony.say3("Hi"); 


amar.say.apply(akbar, ["Hello"]); 
akbar.say2.apply(amar, ["Hello"]); 
anthony.say3.apply(amar, ["Hello"]); 