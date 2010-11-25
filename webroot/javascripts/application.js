var db = openDatabase("Jungling", "0.1", "Jungling", 200000)

function transactional(func) {
	db.transaction(function(tx) {
		func(tx)
	})
}

function inceptionTemplate(title) {
	return {
		'title': title,
		'concerns': [
			{
				'title': 'Platform',
				'checkpoints': [
					{
						'title': 'Operating System',
						'description': 'TBD'
					},
					{
						'title': 'Programming Language',
						'description': 'TBD'
					},
					{
						'title': 'Foundation Framework',
						'description': 'TBD'
					},
				]
			}, 
			{
				'title': 'Architecture',
				'checkpoints': [
					{
						'title': 'Presentation',
						'description': 'TBD'
					},
					{
						'title': 'Persistent',
						'description': 'TBD'
					},
					{
						'title': 'Messaging',
						'description': 'TBD'
					},
				]
			}, 
			{
				'title': 'Integration',
				'checkpoints': [
					{
						'title': 'Existing Systems',
						'description': 'TBD'
					},
					{
						'title': '3rd Party Software',
						'description': 'TBD'
					},
					{
						'title': 'Libraries',
						'description': 'TBD'
					},
				]
			}, 
			{
				'title': 'Data',
				'checkpoints': [
					{
						'title': 'Migration',
						'description': 'TBD'
					},
					{
						'title': 'Data Dump',
						'description': 'TBD'
					},
					{
						'title': 'Synchronization',
						'description': 'TBD'
					},				
					{
						'title': 'Import / Export',
						'description': 'TBD'
					},				
				]
			}, 
			{
				'title': 'Testing',
				'checkpoints': [
					{
						'title': 'Unit Test',
						'description': 'TBD'
					},
					{
						'title': 'Functional Test',
						'description': 'TBD'
					},
					{
						'title': 'Integration Test',
						'description': 'TBD'
					},				
					{
						'title': 'UAT',
						'description': 'TBD'
					},				
					{
						'title': 'Performance Test',
						'description': 'TBD'
					},				
					{
						'title': 'NFR Test',
						'description': 'TBD'
					},				
				]
			}, 
			{
				'title': 'Deployment',
				'checkpoints': [
					{
						'title': 'Production Env.',
						'description': 'TBD'
					},
					{
						'title': 'Go Live',
						'description': 'TBD'
					},
					{
						'title': 'Backup',
						'description': 'TBD'
					},				
					{
						'title': 'Roll Back',
						'description': 'TBD'
					},				
				]
			}, 
			{
				'title': 'Environment',
				'checkpoints': [
					{
						'title': 'Dev Machines',
						'description': 'TBD'
					},
					{
						'title': 'Test Machines',
						'description': 'TBD'
					},
					{
						'title': 'SCM',
						'description': 'TBD'
					},				
					{
						'title': 'CI',
						'description': 'TBD'
					},				
					{
						'title': 'Mingle',
						'description': 'TBD'
					},				
				]
			}, 
			{
				'title': 'Resource',
				'checkpoints': [
					{
						'title': 'PM & BA',
						'description': 'TBD'
					},				
					{
						'title': 'Dev',
						'description': 'TBD'
					},				
					{
						'title': 'QA',
						'description': 'TBD'
					},				
					{
						'title': 'Other Experts',
						'description': 'TBD'
					}
				]
			}, 
			{
				'title': 'Planning',
				'checkpoints': [
					{
						'title': 'Business Value',
						'description': 'TBD'
					},				
					{
						'title': 'Stories',
						'description': 'TBD'
					},				
					{
						'title': 'Estimation',
						'description': 'TBD'
					},				
				]
			}, 
			{
				'title': 'Client',
				'checkpoints': [
					{
						'title': 'Leaders',
						'description': 'TBD'
					},				
					{
						'title': 'OPs',
						'description': 'TBD'
					},				
					{
						'title': 'DBA',
						'description': 'TBD'
					},				
				]
			}, 
		]
	}
	
}