javascript:(function(){
var select="";
var list=document.getElementsByTagName('iframe');
for (i = 0, length = list.length; i < length; i++) {
	select=list[i].contentWindow.getSelection().toString();
	if(select!=""){
		alert(select.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/ /g, "&nbsp;").replace(/\\r/g, "&#13;").replace(/\\n/g, "&#10;"));
	}
}
select=window.getSelection().toString();
if(select!=""){
	alert(select.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/ /g, "&nbsp;").replace(/\\r/g, "&#13;").replace(/\\n/g, "&#10;"));
	}
})()
