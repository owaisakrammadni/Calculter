function calculator(val) {
    var firstvalue = document.getElementById("input")
    firstvalue.value += val
}

function cle() {
    var firstvalue = document.getElementById("input")
    firstvalue.value=""
}

function equal() {
    var firstvalue = document.getElementById("input")
    firstvalue.value=eval(firstvalue.value)
}

