function promptMe(){
    var welcome= prompt("Welcome to Treasure Hunt! What is your name?");
    alert ("Hey "+welcome+"! Click on the number one to begin the hunt!")
   
}
function restartMe(){
    var restart= alert("Click on Start Game to Begin!");
}

function fstQuest(){
    var numOne= prompt("Quest 1 - Solve the riddle: Neat and in order...you get the gist. This tag is used to number your list. Is it A <ol> or B <numli>?")
    if(numOne==="A"){
        alert ("You're answer is true! For the next round, just click on the 2!")
    }
            else {alert ("Oh well...you tried. Today's not your day. The pirate is coming to chase you away! GAME OVER!")}
    

}
function sndQuest(){
        var numTwo= prompt("Quest 2 - Solve the riddle: So many lines- so much at stake. This tag is used to add a line break. Is it A <break> or B <br>?")
        if(numTwo==="B"){
            alert ("You're alright with me! For the next round, just click on the 3!")}
    
                else {alert ("Oh no! You missed it! Your chances are through. The pirate is coming! No treaure for you! GAME OVER!")}
        }

function trdQuest(){
        var numThree= prompt("Quest 3 - Solve the riddle: I worked so hard to make this website. This tag is where I display copywrite. Is it A <footer> or B <copy>?")
        if(numThree==="A"){
            alert ("You're ready for more! For the next round, just click on the 4!")}
        
                else 
            /*let div=document.getElementById ("three").parentElement 
            let img=document.createElement("img")
            img.src="pirate.gif"
            div.append(img)*/
                alert ("Oh well...you tried. Today's not your day. The pirate is coming to chase you away! GAME OVER!")
            }

function frthQuest(){
     var numFour= prompt("Quest 4 - Solve the riddle: Paragraphs, tables, a form just for kicks. This tag is used to add some nice pics. Is it A <pic> or B <img>?")
        if(numFour==="B"){
            alert ("X marks the spot! You're Treasure awaits! You won! Click X before it's too late!")}
            
                else alert ("Oh no! You missed it! Your chances are through. The pirate is coming! No treaure for you! GAME OVER!")
                }
/*function fithQuest(){
     var numFive= prompt("Quest 1 - Solve the riddle: Neat and in order...you get the gist. This tag is used to number your list. Is it A <ol> or B <numli>?")
        if(numFive==="A"){
            alert ("You're answer is true! For the next round, just click on the 2!")}
                
                else alert ("Oh no! You missed it! No treaure for you!")
                    }*/

function endQuest(){
    let div=document.getElementById ("finish").parentElement 
    let img=document.createElement("img")
    img.src="treasure-chest.gif"
    div.append(img)
    alert ("You are the Winner!");
}
    /*var goodBye= prompt("Quest 1 - Solve the riddle: Neat and in order...you get the gist. This tag is used to number your list. Is it A <ol> or B <numli>?")
        if(goodBye==="A"){
            alert ("You're answer is true! For the next round, just click on the 2!")}
                                   
        else alert ("Oh no! You missed it! No treaure for you!")*/
    