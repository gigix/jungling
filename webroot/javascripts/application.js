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
						'description': "In most cases, open source foundation framework candidates are available, \
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
						'description': "Is there any legacy system to be integrated? How will they be integrated? \
							Via API invocations? RESTful interfaces? Web Services? Database? File swapping? \
							\n\nIt's helpful to draw an integration map, which includes all the relavant applications, \
							then mark all integration points and integration approaches on the map. \
							\n\nMake sure you are fully prepared to handle all the integration points. For example, \
							\n\n  - you might need spike some technologies \
							  \n  - you might need acquire a copy/image of the legacy system"
					},
					{
						'title': '3rd Party Software',
						'description': "Is there any 3rd party software you to be integrated? For example, online payment system (e.g. PayPal)? \
							Any Google application to mashup? Microsoft Outlook (I REALLY hope you don't need this)? \
							\n\nHave you got their API reference? Have you done sufficient spike?"
					},
					{
						'title': 'Libraries',
						'description': "Is there any other important libraries besides the foundation framework? \
							Normally in-process libraries should be easy to handle. You just need think about it."
					},
				]
			}, 
			{
				'title': 'Data',
				'checkpoints': [
					{
						'title': 'Migration',
						'description': "How will the existing business data be migrated to work with new application? \
							Will the migration happen only once? Or should it happen in an incremental manner? \
							If the latter, how to trigger a partial migration? \
							\n\nHow to develop migration scripts iteratively? How to manage and apply migration scripts? \
							What's the backup/rollback strategy? \
							\n\nIs there any existing data migration supporting tool (e.g. [dbdeploy])available? If not, it's worth to build one.\
							\n\n[dbdeploy]:http://dbdeploy.com/"
					},
					{
						'title': 'Data Dump',
						'description': "You will need a database for development and test. If there's existing data, have you got a duplication of it? \
							\n\n  - You might want dump production database directly, if possible. \
							  \n  - Or you might want sanitize the production data and then dump it. \
							  \n  - Or you might want a sanitized small subset of production data. \
							\n\nAt least you need dump the production data structure (schema, triggers, stored procedures...everything except data). \
							In this case, you need run data tests upon UAT with more real data frequently."
					},
					{
						'title': 'Synchronization',
						'description': "Is it necessary to keep synchronizing multiple databases? \
							If so, how to implement the synchronization? With trigger? Scheduled stored procedure? \
							Or any scheduled task outside of database (e.g. cron job)? \
							\n\nHow to prevent data conflict from happening?"
					},				
					{
						'title': 'Import / Export',
						'description': "Is there any import/export requirement? \
							How will the users use it? How will it impacts performance?"
					},				
				]
			}, 
			{
				'title': 'Testing',
				'checkpoints': [
					{
						'title': 'Unit Test',
						'description': "What's the unit test framework? [JUnit]? [TestNG]? [Test::Unit]? [RSpec]? \
						\n\n*Note:* Test frameworks support [Behaviour-Driven Development] are worth trying. \
						\n\n[JUnit]:http://www.junit.org \
						\n[TestNG]:http://testng.org/doc/index.html \
						\n[Test::Unit]:http://test-unit.rubyforge.org/ \
						\n[RSpec]:http://rspec.info/ \
						\n[Behaviour-Driven Development]:http://behaviour-driven.org/"
					},
					{
						'title': 'Functional Test',
						'description': "How can the running system be tested as a black box? \
							There are open source functional testing tools available, for example: \
							\n\n - [Selenium] and [Watir]/[WatiN]/[Watij] for web applications \
							  \n - [EFT] for .NET desktop applications \
							  \n - [Marathon] for Java desktop applications \
							  \n - [UISpec] for iPhone applications \
							\n\nAlthough there are lots of commercial functional testing tools as well, however none of them are worth trying. \
							\n\nIf there isn't existing open source functional testing tool for your application yet, probably you should build one. \
							\n\n[Selenium]:http://selenium.openqa.org \
							\n[Watir]:http://www.openqa.org/watir/ \
							\n[WatiN]:http://watin.sourceforge.net/ \
							\n[Watij]:http://watij.com/ \
							\n[EFT]:http://code.google.com/p/eft/ \
							\n[Marathon]:http://www.marathontesting.com/Home.html \
							\n[UISpec]:http://code.google.com/p/uispec/"
					},
					{
						'title': "Integration Test",
						'description': "How to test the application integrated with other systems? Which integration points need to be tested? \
							How to automate these tests?"
					},				
					{
						'title': 'UAT',
						'description': "How should the customer trial and verify the application? Where should the UAT environment be set? \
							Who should be responsible to maintain the environment?"
					},				
					{
						'title': 'Performance Test',
						'description': "How to test performance of the application? Have you got the expected performance benchmark? \
							There is a chapter in [ThoughtWorks Anthology] described a practical performance testing approach. \
							\n\n[ThoughtWorks Anthology]:http://www.infoq.com/cn/minibooks/thoughtworks-anthology"
					},				
					{
						'title': 'NFR Test',
						'description': "Is there any other non-functional requirement besides performance? \
							Has the customer defined acceptance criteria for these NFRs? \
							How to automate these tests?"
					},				
				]
			}, 
			{
				'title': 'Deployment',
				'checkpoints': [
					{
						'title': 'Production Env.',
						'description': "Is the production environment ready? How can you access it? \
							Have you got username/password of authorized account? Do you have VPN access (if necessary)? \
							\n\nHow's the speed of download/upload? \
							\n\nHave all foundamental software been installed? "
					},
					{
						'title': 'Go Live',
						'description': "What's the process to deploy the application? How to automate the process? \
							Are you going to checkout/export from SCM repository directly? Or are you going to build a binary and then upload? \
							\n\nFor Rails application, [Capistrano] is definitely worth trying. \
							\n\n[Capistrano]:https://github.com/capistrano/capistrano/wiki/Documentation-v2.x"
					},
					{
						'title': 'Backup',
						'description': "Before the deployment, how do you backup existing application and/or storage? \
							Do you duplicate folders and databases? Or do you simply snapshot virtual machines? \
							Is versioned/timestamped backup necessary? How much storage and time will it cost? How do you automate the process?"
					},				
					{
						'title': 'Roll Back',
						'description': "If deployment has any problem, or if the application has any critical defect, \
							how can you revert the deployment and roll back to a previous working version? \
							How do you roll back application? How do you roll back database? How do you roll back information stored in file system?"
					},				
				]
			}, 
			{
				'title': 'Environment',
				'checkpoints': [
					{
						'title': 'Dev Machines',
						'description': "Have you got enough computers (also, mice and keyboards) for your developers to pair? \
							Do they have OS and development environment installed and properly configured? \
							Can anyone checkout the codebase and build the system with a single command? \
							Have you installed and configured IDE properly? \
							\n\nHow do you make dev machines identical and easy to duplicate? With Ghost? Or virtual machine?"
					},
					{
						'title': 'Test Machines',
						'description': "Have you got computer(s) installed and setup for exploratory/acceptance test? \
							Does it require further software beyond dev machines (e.g. a few more different browsers, a more comprehensive database)? \
							How to backup/restore this machine if necessary?"
					},
					{
						'title': 'SCM',
						'description': "What SCM will be used? Subversion or distributed SCM such as Git or Hg? Don't use anything older than SVN. \
							\n\nWhere will the repository be hosted? At *Thought*Works or at the client site? \
							\n\n - If TW hosts the repository, how does the client access it? Will it impact the deployment process? \
							  \n - If the client hosts the repository, how's the access speed? Is there any security requirement (e.g. VPN)? \
							  \n - If the repository is hosted somewhere public, is there any security issue?"
					},				
					{
						'title': 'CI',
						'description': "What CI tool will be used? CruiseControl? Hudson? \
							Or are you going to trial Go, even it doesn't allow you to install agents on multiple machines? \
							\n\nWhat environments do you need to verify with CI? How many machines (physical or virtual) do you need? \
							Have you got them all? \
							\n\nWhere do you host CI server? It's valuable to host CI in a public accessible machine."
					},				
					{
						'title': 'Mingle',
						'description': "Have you got a Mingle instance for the project? Have you got a reasonable template installed? \
							Is it accessible to the client? Do you need associate Mingle with the SCM repository?"
					},				
				]
			}, 
			{
				'title': 'Resource',
				'checkpoints': [
					{
						'title': 'PM & BA',
						'description': "Have you got a PM and a BA? Are you happy work with them?"
					},				
					{
						'title': 'Dev',
						'description': "How many developers would you have at the beginning of the project? How many at the peak? \
							Are they familiar with the technology stack? Are they familiar with general TW descipline? \
							\n\nWhat are the expectations of these developers, beyond delivery? \
							What should they learn during the project?"
					},				
					{
						'title': 'QA',
						'description': "Have you got a QA? Are you happy work with her? \
							\n\nIs she willing to learn program (the application, or just test automation)? If so, how would you coach her?"
					},				
					{
						'title': 'Other Experts',
						'description': "Do you need any other experts for short term tasks? DBA? UI expert?"
					}
				]
			}, 
			{
				'title': 'Planning',
				'checkpoints': [
					{
						'title': 'Business Value',
						'description': "Have you got a clear understanding of the client's business value? \
							How could the application help them? How does the application become valuable?"
					},				
					{
						'title': 'Stories',
						'description': "It's supposed to be PM/BA's job. You need make sure that you have got the story list. \
							Double check if the story list reflects the business value. \
							Try to find out hidden stories which are important to business but not mentioned in the list."
					},				
					{
						'title': 'Estimation',
						'description': "It's your job to estimate most of the stories. Do it in a consistent manner. \
							If you need spike to get a better estimation, you can ask your developers in office to do it."
					},				
				]
			}, 
			{
				'title': 'Client',
				'checkpoints': [
					{
						'title': 'Leaders',
						'description': "Have you met the sponsor and project manager of client side? \
							Make sure you know them, and (more important) they know you."
					},				
					{
						'title': 'OPs',
						'description': "Who will be the people operate and maintain the application in the future? \
							Make sure you talk with them. Ask their expectations, especially requirements on knowledge transfering."
					},				
					{
						'title': 'DBA',
						'description': "Make sure you know the DBA of client side. Involve him when you are working on 'Data' checkpoints."
					},				
				]
			}, 
		]
	}
	
}