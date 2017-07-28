// var x : numbet = 0;

// while (x < 10) {
// 	console.log(x);
// 	x++;
// }

let players : number[] = [3, 54, 6, 7, 4]
console.log("for/in");
for (let player in players) {
	console.log(player);
}

// let players : number[] = [3, 54, 6, 7, 4]
console.log("for/of");
for (let player of players) {
	console.log(player);
}

