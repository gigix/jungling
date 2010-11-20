var db = openDatabase("Jungling", "0.1", "Jungling", 200000)

function initializeDatabase() {	
	db.transaction(
		function(tx) {
			tx.executeSql("DROP TABLE inceptions", [], null, null)
			tx.executeSql("DROP TABLE concerns", [], null, null)
			tx.executeSql("DROP TABLE checkpoints", [], null, null)
		}
	)
	
	db.transaction(
		function(tx) {
			tx.executeSql("CREATE TABLE inceptions (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, title TEXT)", [], null, null)
			tx.executeSql("CREATE TABLE concerns (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, inception_id INTEGER NOT NULL, title TEXT)", [], null, null)
			tx.executeSql("CREATE TABLE checkpoints (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, concern_id INTEGER NOT NULL, title TEXT, description TEXT, comment TEXT)", [], null, null)
		}
	)	
}