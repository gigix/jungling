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

function statusIcon(item) {
	var status = item.getStatus()
	if(status == Status.DONE) {
		return 'emotion_smile-32.png'
	}
	if(status == Status.NOT_DONE) {
		return 'fire-32.png'
	}
	if(status == Status.NOT_NEEDED) {
		return 'hand_contra-32.png'
	}
}

function statusTag(item) {
	return "<img src='images/" + statusIcon(item) + "' />"
}

function toPriority(item) {
	switch(item.getStatus()) {
		case Status.NOT_DONE: return 1
		case Status.DONE: return 2
		default: return 3
	}
}

function priority(item_1, item_2) {
	return toPriority(item_1) - toPriority(item_2)
}