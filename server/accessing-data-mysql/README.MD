Tutorial link:
https://spring.io/guides/gs/accessing-data-mysql/#scratch


Project: Accessing Data with Spring and MySQL

  - Project Description: This is a basic bare bones Spring application that is bound to a MySQL database. 
 	Two end points are exposed:
 		1. GET localhost:8080/demo/all: Gets all data. 
 		2. POST localhost:8080/demo/add: Adds one user
 		
 - Run this application as follows:
 	1. Start the DB. Launch MySQL workbench and start the server.
 	2. Run the Spring app:
 		2a. Run as Java app in eclipse, or
 		2b. mvn package then java -jar appname.jar or
 		2c. mvn spring-boot: run
 		
 - Add users to the db:
 	$ curl localhost:8080/demo/add -d name=First -d email=someemail@someemailprovider.com
 	And the reply should be "Saved"
 	
 -Query the DB:
    $ curl localhost:8080/demo/all
    

TODO: 
	1. add frontend using VueJS
	2. add delete function
	3. add update function

 