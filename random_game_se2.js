let PcGuess = Math.floor(Math.random()*100);
minimum = 0;
maximum = 100;
document.getElementById("PcResponse").textContent = `is ${PcGuess} your number ?`
document.getElementById("yes").onclick = function(){
    document.getElementById("PcResponse").textContent = "YESS i found your number 🥰"
}
document.getElementById("no-higher").onclick = function(){
    minimum = PcGuess;
    PcGuess = Math.floor(Math.random()*(maximum - minimum)) + minimum;
    document.getElementById("PcResponse").textContent = `is ${PcGuess} your number ?`
}
document.getElementById("no-lower").onclick = function(){
    maximum = PcGuess;
    PcGuess = Math.floor(Math.random()*(maximum - minimum))+ minimum;
    document.getElementById("PcResponse").textContent = `is ${PcGuess} your number ?`
}
