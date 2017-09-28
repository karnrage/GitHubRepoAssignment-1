var earnings = .01;
var amount = .01;

for(var i = 2; i <= 10000 ; i++){
    earning = earnings * 2
    console.log(earnings)
    amount = amount + earnings
    console.log(amount)
    if (amount == Infinity) {
        console.log(i)
        break
    }
}
