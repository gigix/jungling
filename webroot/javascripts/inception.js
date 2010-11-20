function Inception() {
	this.id = -1
	this.title = ''
	this.concerns = new Array()
}

function createInceptionWithinTransaction(tx, title) {
	tx.executeSql("INSERT INTO inceptions (title) VALUES (?)", [title], null, null)			
	tx.executeSql("SELECT id FROM inceptions ORDER BY id DESC", [], 
		function(tx, result) {
			var inception_id = result.rows.item(0)['id']
			tx.executeSql("INSERT INTO concerns (inception_id, title) VALUES (?, ?)", [inception_id, "Integration"], null, null)
		}, 
		null
	)
}

function listInceptionsWithinTransaction(tx, handleEach) {
	tx.executeSql("SELECT * FROM inceptions ORDER BY id ASC", [], 
		function(tx, result) {
			var inceptions = new Array()
			for(var i = 0; i < result.rows.length; i++) {
				var inception = new Inception()
				var record = result.rows.item(i)
				inception.id = record['id']
				inception.title = record['title']
				handleEach(inception)
			}
		},
		null
	)
}

function createInception(title) {
	db.transaction(
		function(tx) {
			createInceptionWithinTransaction(tx, title)
		}
	)
}

function listInceptions(handleEach) {
	db.transaction(
		function(tx) {
			listInceptionsWithinTransaction(tx, handleEach)
		}
	)
}