# [ng-jedi-demo-mcss](https://github.com/jediproject/ng-jedi-demo-mcss)

* This is a demo using jedi with [materializecss](http://materializecss.com)

## Requirements

* Install these tools:
	- [Node.JS](https://nodejs.org/download)
	- [Git Bash](https://git-scm.com/downloads)

* Download or Clone the demo from Github:
	- [Clone](https://github.com/jediproject/ng-jedi-demo-mcss.git)
	- [Download](https://github.com/jediproject/ng-jedi-demo-mcss/archive/master.zip)

## Runing

* Run the following command on bash
    * Windows:
        ```bash
        npm run start
        ```
        
    * Any *nix OS:
        ```bash
        npm run start-nix
        ```

* This command will load all projects dependencies, initialize mocks, and start application on http://localhost:8080

* Sign in with one of the two user/password below:
	- admin/pass
	- user/pass

## Bower components troubleshoot:
    
* If you have any problems when cloning bower components from git you can try the command below:
```bash
git config --global url."https://".insteadOf "git://"
```

* Tests:
    - With the application runing you can execute e2e tests:
	```bash
	grunt e2e
	```
    
    - Or if you're using Linux or Mac OS:
    ```bash
	grunt e2e-nix
	```
