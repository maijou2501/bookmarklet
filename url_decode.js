javascript:(function(){
var select="";
var list=document.getElementsByTagName('iframe');
for (i = 0, length = list.length; i < length; i++) {
	select=list[i].contentWindow.getSelection().toString();
	if(select!=""){alert(decodeURIComponent(select));}
}
select=window.getSelection().toString();
if(select!=""){alert(decodeURIComponent(select));}
})()
