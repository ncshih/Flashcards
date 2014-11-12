function save(valname, thevalue) {
	chrome.storage.sync.set({valname:thevalue}, function() {
		//give a notification
		console.log(valname + ' saved.');
	});
}
function get() {
	console.log("getted");
	chrome.storage.sync.get(null,function(items) {
		return items;
	});
}