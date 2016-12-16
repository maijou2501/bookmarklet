javascript:(function(){
	var link="[ "+document.title.replace(/([\[\]])/g,'\\$1')+" ]( "+document.location+" )";
	alert(link);
})()
