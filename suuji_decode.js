javascript:(function(){
var moji="";
var list=document.getElementsByTagName('iframe');
for (i = 0, length = list.length; i < length; i++) {
	moji=list[i].contentWindow.getSelection().toString();
	if(moji!=""){
		moji_length = moji.length;
		var moji_x = "";
		for(var i=0;i<moji_length;i++){
		moji_x = moji_x + "&" + "#" + moji.charCodeAt(i) + ";";
		}
		alert(moji_x);
	}
}
moji=window.getSelection().toString();
if(moji!=""){
	moji_length = moji.length;
	var moji_x = "";
	for(var i=0;i<moji_length;i++){
	moji_x = moji_x + "&" + "#" + moji.charCodeAt(i) + ";";
	}
	alert(moji_x);
}

})()
