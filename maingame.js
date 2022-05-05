/*prompt("hi")
const prompt1=()=>{

}*/
function promptMe(){
    var welcome= prompt("Welcome to Treasure Hunt! What is your name?");
    alert ("Hey "+welcome+"! Click on the number one to begin the hunt!")
}

function fstQuest(){
    var numOne= prompt("Quest 1 - Solve the riddle: Neat and in order...you get the gist. This tag is used to number your list. Is it A <ol> or B <numli>?")
    if(numOne==="A"){
        alert ("You're answer is true! For the next round, just click on the 2!")}

        else alert ("Oh no! You missed it! No treaure for you!")
    }
