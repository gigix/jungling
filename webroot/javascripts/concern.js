function Concern(title) {
	this.id = -1
	this.inception_id = -1
	this.title = title
	this.checkpoints = new Array()
}

Concern.prototype.create = function(tx, inception_id) {
	tx.executeSql("INSERT INTO concerns (inception_id, title) VALUES (?, ?)", [inception_id, this.title], null, null)
}