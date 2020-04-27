var disparea = document.getElementById("result")
function insval(num) {
	disparea.value += num
}

function calFunc() {
	disparea.value = eval(disparea.value)
}

function clrFunc() {
	disparea.value = ''
}

function delFunc() {
	disparea.value = disparea.value.slice(0, disparea.value.length-1)
}