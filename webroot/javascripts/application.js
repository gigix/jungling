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
						'description': "What's the target (production) operating system? What's the development operating system in your mind? \
							\n\n*Note*: unless you are targeting Windows Server, otherwise it's highly recommended to host your development \
							upon Mac or Ubuntu Linux. "
					},
					{
						'title': 'Programming Language',
						'description': "*Is it Java based?* Is API-level integration with existing systems required? \
							\n\n*Is it .NET based?* Is it necessary to deploy to Windows Server? \
							\n\n*Is it Ruby or Python based?* Other languages are much less used by *Thought*Workers."
					},
					{
						'title': 'Foundation Framework',
						'description': "In most cases, open source foundation framework alternatives are available, \
							for example, [Spring], [Spring .NET] or [Ruby on Rails]. \
							\n\nAre you going to choose an open source foundation framework? \
							\n\nAre you going to use a proprietary foundation framework? If so, why is that? \
							\n\n[Spring]:http://www.springsource.org/ \
							\n[Spring .NET]:http://www.springframework.net/ \
							\n[Ruby on Rails]:http://rubyonrails.org/ "
					},
				]
			}, 
			{
				'title': 'Architecture',
				'checkpoints': [
					{
						'title': 'Presentation',
						'description': "How do the users access the application? Via web browser, mobile device or a standalone desktop application? \
							\n\nWhat's the corresponding presentation/view technology? Any RIA technology (Ajax, Flash, etc.) needed?"
					},
					{
						'title': 'Persistent',
						'description': "How is business data stored and accessed? \
							\n\nIn most cases you will use relational database. Is there any O/R mapping framework (e.g. [Hibernate]) \
							or SQL mapping framework (e.g. [mybatis]) available? \
							Is cross-db operations required? If so, you might need a distributed transaction coordinator. \
							\n\nIs any reporting / data mining needed? Is any stored procedure needed? \
							\n\nAre you going to use NoSQL storage? What's the supporting framework? \
							\n\nIs any proprietary storage and/or content management system needed? If so, have you done preparations on it? \
							\n\n[Hibernate]:http://hibernate.org/ \
							\n[mybatis]:http://www.mybatis.org/"
					},
					{
						'title': 'Messaging',
						'description': "Is there any asynchronous operation? Is there any message bus involved?\
							Is there any messaging framework involved?\
							\n\nHow are the business logic modules organized? How do they interact with each other?\
							Do they send synchronous remote message (e.g. XML-RPC, Web Services) to each other? Do they \
							send asynchronous remote message to each other? Or do they simply invoke each other within the same process?"
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