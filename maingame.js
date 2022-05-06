let keepScore=0

function checkScore(){
    keepScore++
    if(keepScore==1){
        let div=document.getElementById ("one").parentElement 
        let img=document.createElement("img")
        img.setAttribute("id","pirate")
        img.src="pirate.gif"
        div.append(img)
        alert ("Yikes! You've been spotted! Try again but don't doubt. Get another question wrong and the pirate will take you out!")
    }
    if(keepScore>1){
        let img=document.getElementById ("pirate")
        img.classList.toggle("pirateWin")
        alert ("Oh no! You missed it! Your chances are through. The pirate is coming! No treaure for you! GAME OVER!")
    }
}

function promptMe(){
    var welcome= prompt("Welcome to Treasure Hunt! What is your name?")
    alert ("Hey "+welcome+"! Click on the number one to begin the hunt!")
   
}

function restartMe(){
    var restart= alert("Click on Start Game to Begin!")
}

function fstQuest(){
    var numOne= prompt("Quest 1 - Solve the riddle: Neat and in order...you get the gist. This tag is used to number your list. Is it A <ol> or B <numli>?")
    if(numOne==="A"){
        alert ("You're answer is true! For the next round, just click on the 2!")
    }else{
        checkScore()
    }
}

function sndQuest(){
    var numTwo= prompt("Quest 2 - Solve the riddle: So many lines- so much at stake. This tag is used to add a line break. Is it A <break> or B <br>?")
    if(numTwo==="B"){
        alert ("You're alright with me! For the next round, just click on the 3!")
    }else{ 
        checkScore()
    }
}

function trdQuest(){
    var numThree= prompt("Quest 3 - Solve the riddle: I worked so hard to make this website. This tag is where I display copywrite. Is it A <footer> or B <copy>?")
    if(numThree==="A"){
        alert ("You're ready for more! For the next round, just click on the 4!")
    }else{
        checkScore()
    }
} 
           
function frthQuest(){
    var numFour= prompt("Quest 4 - Solve the riddle: Paragraphs, tables, a form just for kicks. This tag is used to add some nice pics. Is it A <pic> or B <img>?")
    if(numFour==="B"){
        alert ("X marks the spot! You're Treasure awaits! You won! Click X before it's too late!")
    }else{
        checkScore()
    } 
}

function endQuest(){
    let div=document.getElementById ("finish").parentElement 
    let img=document.createElement("img")
    img.src="treasure-chest.gif"
    div.append(img)
    alert ("You are the Winner!");
}