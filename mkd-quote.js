javascript:(function(){
	var getSelect=document.getSelection().toString().replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\r?\n/g,"  \n> ");
	var blockquote="> "+getSelect+"  \n> <br><cite><a href=\""+document.location+"\">"+document.title.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')+"</a></cite>";
	alert(blockquote);
})()
