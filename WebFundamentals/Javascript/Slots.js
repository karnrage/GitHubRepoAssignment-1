function slotMachine(quaters,walkAwayWith){
    while(quaters > 0){
        quaters --;
        var winnings = 1;
        if(Math.floor(Math.random()*100) === winnings);
        quaters += Math.floor(Math.random()*51 +50);
        (console.log("The user just won" + quaters + "quaters"))
        if(quarters > walkAwayWith){
            break;
        }
    }
    return quaters; 
}
var result = slotMachine(250,50);
console.log(result)