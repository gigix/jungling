function Inception(title) {
	this.id = -1
	this.title = title
	this.concerns = new Array()
}

Inception.prototype.loadConcerns = function(tx) {
	var inception = this
	tx.executeSql("SELECT * FROM concerns WHERE inception_id = ? ORDER BY id ASC", [inception.id],
		function(tx, result) {
			for(var i = 0; i < result.rows.length; i++) {
				var record = result.rows.item(i)
				
				var concern = new Concern()
				concern.id = record['id']
				concern.inception_id = record['inception_id']
				concern.title = record['title']

				concern.loadCheckpoints(tx)
				
				inception.concerns.push(concern)
				concern.inception = inception
			}
		},
		null
	)
}

Inception.prototype.create = function(tx) {
	tx.executeSql("INSERT INTO inceptions (title) VALUES (?)", [this.title], null, null)			

	var concerns = this.concerns
	tx.executeSql("SELECT id FROM inceptions ORDER BY id DESC", [], 
		function(tx, result) {
			var inception_id = result.rows.item(0)['id']
			for(var i = 0; i < concerns.length; i++) {
				var concern = concerns[i]
				concern.create(tx, inception_id)
			}
		}, 
		null
	)
}

Inception.prototype.getStatus = function() {
	return summarizeStatus(this.concerns)
}

function viewInception(inceptionId) {
	transactional(function() {
		var loadInceptionWithinTransaction;
	})
}

function createInception(title, status) {
	var inceptionAsJson = inceptionTemplate(title)
	
	var inception = new Inception(inceptionAsJson.title)
	$.each(inceptionAsJson.concerns, function(index, concernAsJson) {
		var concern = new Concern(concernAsJson.title)		
		$.each(concernAsJson.checkpoints, function(index, checkpointAsJson) {
			var checkpoint = new Checkpoint(checkpointAsJson.title, checkpointAsJson.description)
			if(status) {
				checkpoint.status = status
			}
			concern.checkpoints.push(checkpoint)
		})
		inception.concerns.push(concern)
	})
		
	db.transaction(function(tx) {inception.create(tx) })
}

function listInceptionsWithinTransaction(tx, inceptions) {
	tx.executeSql("SELECT * FROM inceptions ORDER BY id ASC", [], 
		function(tx, result) {
			for(var i = 0; i < result.rows.length; i++) {
				var record = result.rows.item(i)
				
				var inception = new Inception()
				inception.id = record['id']
				inception.title = record['title']
				
				inception.loadConcerns(tx)
				inceptions.push(inception)
			}
		},
		null
	)
}

function listInceptions() {
	var inceptions = new Array()
	transactional(
		function(tx) {
			listInceptionsWithinTransaction(tx, inceptions)
		}
	)
	return inceptions
}