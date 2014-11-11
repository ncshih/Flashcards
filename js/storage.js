function save(valname, thevalue) {
	chrome.storage.sync.set({valname:thevalue}, function() {
		//give a notification
		console.log(valname + ' saved.');
	});
}
function get() {
	chrome.storage.sync.get(null,function(items) {
		message('stuff retrieved');
		console.log(items);
	});
}