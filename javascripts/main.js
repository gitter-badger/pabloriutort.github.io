//This adds "target = "_blank" to all links
//document.onload = document.getElementsByTagName("a")[0].setAttribute("target", "_blank"); 

function addBlank(){
	var a=document.getElementsByTagName("a");
	for (var i=0; i<a.length; i++){
		//Ignore if the element has class (That would be "email")
		if !a[i].hasAttribute("class"){
			a[i].target="_blank";
		}
	}
}
