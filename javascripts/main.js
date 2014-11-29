//This adds "target = "_blank" to all links
//document.onload = document.getElementsByTagName("a")[0].setAttribute("target", "_blank"); 

function addBlank(){
	var a=document.getElementsByTagName("a");
	for (var i=0; i<a.length; i++){
		a[i].target="_blank";
	}
}
