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
    drag&drop.js = It covers the Test Scenario 1
    submitForm.js = It covers the Test Scenario 2 