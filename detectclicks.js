$('body').on('click', '*', function(event) {
    //window.alert(' ID of element- testing'); 
    console.log(event);
    console.log('nao');
    //window.alert(' ID of element=' + $(this).attr('id'));  // Get ID attribute
    //window.alert(' ID of Parent element=' + $(this).parent().attr('id'));
});

/*
chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript(null,{file:'jquery-3.1.1.js',allFrames:true});
	chrome.tabs.executeScript(null,{file:'script.js',allFrames:true});
});
*/