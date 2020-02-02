# Thrift Shop App

Please do yarn install once you clone the file.

# Important Updates as of 2/1/2020
### Front End please do
1. Yarn start

### Running backend please do
1. mvn spring-boot:run

### if you come across error for web server, on terminal
1. netstat -ano | find "8080"
2. go to task manager > service tab > look at the PID listed on the listening of 8080 on the terminal and stop it completely on the task manager.

### If you are using Visual Studio Code please download the following extension:
- Debugger for Java by Microsoft
- Java Dependency by Microsoft
- Java Extension Pack by Microsoft
- Java Test Runner by Microsoft
- Language Support for Java(TM) by Red Hat
- Maven for Java by Microsoft
- Spring Boot Dashboard by Microsoft
- Spring Boot tools by Pivotal
- Spring Initializr Java Support by Microsoft

### Please do the following within the api/thrift-shop-app folder (maven folder):
1. mvn package (build would say success towards the end)
2. mvn dependency:tree
3. mvn spring-boot:run

# Important Updates as of 1/26/2020
- Updated Login and Sign Up Page for Front-End
- In Progress to connect Front End to Back End
- please do "npm install --save react-router-dom"

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

# Running Maven Tools
- Maven Phases
-- Although hardly a comprehensive list, these are the most common default lifecycle phases executed.
1. validate: validate the project is correct and all necessary information is available
2. compile: compile the source code of the project
3. test: test the compiled source code using a suitable unit testing framework. These tests should not require the code be packaged or deployed
4. package: take the compiled code and package it in its distributable format, such as a JAR.
5. integration-test: process and deploy the package if necessary into an environment where integration tests can be run
6. verify: run any checks to verify the package is valid and meets quality criteria
7. install: install the package into the local repository, for use as a dependency in other projects locally
8. deploy: done in an integration or release environment, copies the final package to the remote repository for sharing with other developers and projects.

### There are two other Maven lifecycles of note beyond the default list above. They are
1. clean: cleans up artifacts created by prior builds
2. site: generates site documentation for this project
Phases are actually mapped to underlying goals. The specific goals executed per phase is dependant upon the packaging type of the project. For example, package executes jar:jar if the project type is a JAR, and war:war if the project type is - you guessed it - a WAR.

### An interesting thing to note is that phases and goals may be executed in sequence.
1. mvn clean dependency:copy-dependencies package
This command will clean the project, copy dependencies, and package the project (executing all phases up to package, of course).

### Generating the Site
1. mvn site
This phase generates a site based upon information on the project's pom. You can look at the documentation generated under target/site.