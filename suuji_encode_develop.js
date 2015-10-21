javascript:(function(){
var moji="";
var list=document.getElementsByTagName('iframe');
for (i = 0, length = list.length; i < length; i++) {
	moji=list[i].contentWindow.getSelection().toString();
	if(moji!=""){
		moji=moji.replace(/&#(\d+);/ig, function(match, $1, idx, all) {
		return String.fromCharCode($1);
		});
		alert(moji);
	}
}
moji=window.getSelection().toString();
if(moji!=""){
	moji=moji.replace(/&#(\d+);/ig, function(match, $1, idx, all) {
	return String.fromCharCode($1);
	});
	alert(moji);
}

})()
