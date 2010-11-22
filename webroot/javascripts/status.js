if(typeof Status == "undefined"){
	var Status = {
		NOT_DONE: 'Not Done Yet',
		DONE: 'Done',
		NOT_NEEDED: 'Not Needed'
	}
}

function summarizeStatus(children) {
	var result = Status.NOT_NEEDED
	for(var i = 0; i < children.length; i++) {
		var currentChild = children[i]
		if(currentChild.getStatus() == Status.NOT_DONE) {
			return Status.NOT_DONE
		}
		if(currentChild.getStatus() == Status.DONE) {
			result = Status.DONE
		}
	}
	return result
}