var intervalID = setInterval(function () {
	var divs = document.getElementsByClassName('blurry-text');
	if (divs.length) {
		var xhr = new XMLHttpRequest();
		xhr.onload = function() {
			var oldNodes = document.getElementsByClassName('article');
			var newNodes = this.responseXML.getElementsByClassName('article');
			var length;
			if (newNodes.length < oldNodes.length) {
				length = newNodes.length;
			} else {
			      length = oldNodes.length;
			}
			    
			for (var i = 0; i < length; i++)
				oldNodes.item(i).innerHTML = newNodes.item(i).innerHTML;
		}
			
		xhr.open("GET", 
			 window.location.href);
			 xhr.responseType = "document";
		xhr.send();
		
		clearInterval(intervalID);
	}	
} , 100);
setTimeout(function() {clearInterval(intervalID);} , 10000);
