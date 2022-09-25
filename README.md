[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/UtpalaShakya/cypress101-utpala.git)

# cypress101-utpala
# Lambda Test Certification

# SetUp
# 1. Clone The repo
     git clone https://github.com/UtpalaShakya/cypress101-utpala.git

# 2. Install the dependencies
      cd ${project_directory}
      npm install
      Editor of the Choice
      Visual Studio Code

For any other editor of choice make sure you config below dependencies yourself

# How to Run the Tests Locally
   ## Headed Mode:
        npx cypress open

   ## Headless Mode:
        npx cypress run 

# How to run the test in the LambdaTest Cloud
    lambdatest-cypress run
## The above code will upload the test in Lambda cloud where the result can be viewed directly.

# Test Structure
    cypress101.js = It covers the Test Scenario 1 and Test Scenario 2 

# Create Gitpod workspace
     https://gitpod.io/#<your repo url>
 
 # Configure Gitpod environment to install required dependencies
     create .gitpod.yml file and specify to use .gitpod.Dockerfile as Dockerfile. Then, add dependencies and push the changes.

# ADd cypress as a dev dependency after initializing the npm package
     npm install cypress --save-dev
     Then run the test.


