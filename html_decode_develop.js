javascript:(function(){
var select="";
var list=document.getElementsByTagName('iframe');
for (i = 0, length = list.length; i < length; i++) {
	select=list[i].contentWindow.getSelection().toString();
	if(select!=""){
		alert(select.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&nbsp;/g, "\\s").replace(/&#13;/g, "\\r").replace(/&#10;/g, "\\n"));
	}
}
select=window.getSelection().toString();
if(select!=""){
	alert(select.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&nbsp;/g, "\\s").replace(/&#13;/g, "\\r").replace(/&#10;/g, "\\n"));
}
})()
