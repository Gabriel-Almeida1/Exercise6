var cont = 0

while(cont < 5) {
    var num = prompt("Type a number: ")
    var numInt = parseInt(num)
    var numInt2 = parseInt(num)
    cont += 1

    var cont2 = 0
    while (cont2 < 5) {
        console.log(numInt, " x ", numInt2 + 1, ' = ', numInt * (numInt2 + 1))
        numInt2 += 1
        cont2 += 1
    }

}
