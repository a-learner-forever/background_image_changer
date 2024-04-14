// function bgchange(color) {
// 	let colorarray = ["bg1.jpg", "bg2.jpg", "bg3.jpg"];
// 	document.body.style.backgroundImage = colorarray[color];
// }

// var colorarray = ["bg1.jpg", "bg2.jpg", "bg3.jpg"];
// var colorbox = document.getElementById("colorbox");

// colorarray.forEach(function (color, index) {
// 	let btn = document.createElement("button");
// 	btn.style.backgroundImage = "url(color)";
// 	btn.addEventListener("click", function () {
// 		bgchange(index);
// 	});
// 	colorbox.appendChild(btn);
// });





function bgchange(color) {
	let colorarray = ["bg1.jpg", "bg2.jpg", "bg3.jpg"];
	document.body.style.backgroundImage = "url('" + colorarray[color] + "')";
  }
  
  var colorarray = ["bg1.jpg", "bg2.jpg", "bg3.jpg"];
  var colorbox = document.getElementById("colorbox");
  
  colorarray.forEach(function (color, index) {
	let btn = document.createElement("button");
	btn.style.backgroundImage = "url('" + color + "')";
	btn.addEventListener("click", function () {
	  bgchange(index);
	});
	colorbox.appendChild(btn);
  });