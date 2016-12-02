window.onload = function(){
	var aList = document.getElementsByTagName('a');
	for(var i=0;i<aList.length;i++){
		aList[i].setAttribute("onfocus","this.blur()")
	}
}