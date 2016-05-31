var blastOff = true
var count = 5

function counter(){
	while (blastOff) {
		console.log (count);
		if (count < 2) {
			blastOff = false;
		}
		count--;

	}
		console.log ("blastOff!")
}

counter();