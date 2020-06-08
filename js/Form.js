class Form{



    constructor(){


    }
display(){

var title = createElement('h2');
title.html("Car racing Game");
title.position(130,10);

var input = createInput("Name");
input.position(200,200);

var button = createButton("play")
button.position(200,150)
var greeting = createElement('h3')
button.mousePressed(function(){

button.hide()
input.hide()

var name = input.value();
playerCount = playerCount+1
player.update(name);
player.updateCount(playerCount);
 greeting.html("Hello"+name);
greeting.position(200,200);
})
}
}