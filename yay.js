var i = 0;
		

		function typeWriter(text) {
        var tag = document.getElementById(text);
		//var html = tag.innerHTML;
		// var attr = tag.setAttribute("data", html);
		var txt = tag.getAttribute("data");
		var speed = 170;
		  if (i <= txt.length) {
		    tag.innerHTML = txt.slice(0 , i + 1);
		    i++;
		    setTimeout(typeWriter, speed);
		  }
		    //console.log(document.getElementById("text").innerHTML);
		}

typeWriter("text");


// function deltxt() {
// 			if (A <= txt.length) {
		// 	    document.getElementById("text").innerHTML = txt.slice(0, -A);
		// 	    A++;
		// 	    setTimeout(deltxt, 50);
		// 	  }
		// }
		// var backward = speed * txt.length + 1000		;
		// // console.log(backward);
		// setTimeout( function () {
		// 	deltxt();
		// },backward);