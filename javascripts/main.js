//This adds "target = "_blank" to all links
var links = document.getElementsByTagName('a');
var len = links.length;

for(var i=0; i<len; i++)
{
   links[i].target = "_blank";
}
