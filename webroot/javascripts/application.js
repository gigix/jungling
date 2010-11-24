var db = openDatabase("Jungling", "0.1", "Jungling", 200000)

function transactional(func) {
	db.transaction(function(tx) {
		func(tx)
	})
}