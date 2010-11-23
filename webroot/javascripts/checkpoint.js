function Checkpoint(title, description) {
	this.id = -1
	this.concern_id = -1
	this.concern = null
	this.title = title
	this.description = description
	this.comment = ''
	this.status = Status.NOT_DONE
}

Checkpoint.prototype.create = function(tx, concern_id) {
	tx.executeSql("INSERT INTO checkpoints (concern_id, title, description, comment, status) VALUES (?, ?, ?, ?, ?)", 
		[concern_id, this.title, this.description, this.comment, this.status], null, null)
}

Checkpoint.prototype.update = function(tx) {
	tx.executeSql("UPDATE checkpoints SET comment = ?, status = ? WHERE id = ?", [this.comment, this.status, this.id], 
		null, 
		function(tx, error) {
			alert('Error: ' + JSON.stringify(error))
		}
	)
}

Checkpoint.prototype.getStatus = function() {
	return this.status
}

Checkpoint.prototype.saveButton = function(image, commentTextArea, status) {
	var button = $("<img src='" + image + "' />")
	var checkpoint = this
	button.click(function() {
		checkpoint.comment = commentTextArea.val()
		if(status != undefined) {
			checkpoint.status = status
		}
		transactional(function(tx) { 
			checkpoint.update(tx) 
		})
		
		transactional(function() {
			alert("Save succeeded!")				
			showCheckpointDetail(checkpoint)		
		})
	})
	return button
}

Checkpoint.prototype.breadcrumb = function(concernViewHandler, inceptionViewHandler) {
	var concern = this.concern
	var breadcrumbDiv = concern.linkToInception(inceptionViewHandler)
	
	breadcrumbDiv.append($('<span> > </span>'))
	
	var concernLink = $("<a class='breadcrumb-item'>" + concern.title + "</a>")
	concernLink.click(function() {
		concernViewHandler(concern)
	})
	breadcrumbDiv.append(concernLink)
	
	breadcrumbDiv.append($("<span> > " + this.title + "</span>"))
	return breadcrumbDiv
}
