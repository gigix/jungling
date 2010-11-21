function Concern(title) {
	this.id = -1
	this.inception_id = -1
	this.inception = null
	this.title = title
	this.checkpoints = new Array()
}

Concern.prototype.create = function(tx, inception_id) {
	tx.executeSql("INSERT INTO concerns (inception_id, title) VALUES (?, ?)", [inception_id, this.title], null, null)
	
	var checkpoints = this.checkpoints
	tx.executeSql("SELECT id FROM concerns ORDER BY id DESC", [], 
		function(tx, result) {
			var concern_id = result.rows.item(0)['id']
			for(var i = 0; i < checkpoints.length; i++) {
				var checkpoint = checkpoints[i]
				checkpoint.create(tx, concern_id)
			}
		}, 
		null
	)
}

Concern.prototype.loadCheckpoints = function(tx) {
	var concern = this
	tx.executeSql("SELECT * FROM checkpoints WHERE concern_id = ? ORDER BY id ASC", [concern.id], 
		function(tx, result) {
			for(var i = 0; i < result.rows.length; i++) {
				var record = result.rows.item(i)
			
				var checkpoint = new Checkpoint()
				checkpoint.id = record['id']
				checkpoint.concern_id = record['concern_id']
				checkpoint.title = record['title']
				checkpoint.description = record['description']
				checkpoint.comment = record['comment']
			
				concern.checkpoints.push(checkpoint)
				checkpoint.concern = concern
			}
		},
		null
	)
}