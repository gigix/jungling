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

function viewInception(inceptionId) {
	transactional(function() {
		var loadInceptionWithinTransaction;
	})
}

function createInception(title) {
	var inception = new Inception(title)
	
	var integration_concern = new Concern('Integration')
	integration_concern.checkpoints.push(new Checkpoint('Integration Map', 'Have you drawn an integration map?'))
	integration_concern.checkpoints.push(new Checkpoint('Spikes', 'Have you done all the integration spikes?'))
	inception.concerns.push(integration_concern)
	
	var migration_concern = new Concern('Data Migration')
	migration_concern.checkpoints.push(new Checkpoint('Data Dump', 'Have you got a usable dump of existing database?'))
	inception.concerns.push(migration_concern)
	
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