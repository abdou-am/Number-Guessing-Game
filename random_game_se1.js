let PcNumber = Math.floor(Math.random()*100);
let UserGuess;
document.getElementById("submit").onclick = function(){
    UserGuess = Number(document.getElementById("guess").value);
    if (UserGuess > PcNumber){
        document.getElementById("PcResponse").textContent = "my number is lower than this"
    }
    else if(UserGuess < PcNumber){
        document.getElementById("PcResponse").textContent = "my number is higher than this"
    }
    else{
        document.getElementById("PcResponse").textContent = "You guessed my number correctly 🥰"
    }
}
document.getElementById("guess").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        document.getElementById("submit").click();
    }
});
