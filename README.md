# What this is
An example on how a React/Yarn frontend can be built as part of a fullstack application with a Kotlin/Spring Boot/Maven backend.
The application is built as a docker image.

# How to run
Assuming Maven 3.6.0+ and Yarn 1.22.x+ are available in the environment:
1. `cd backend`
2. `mvn package`
3. `docker run -p 8080:8080 fullstack-scaffold:0.0.1-SNAPSHOT`
4. Visit `http://localhost:8080/index.html`, see how the React frontend is delivered and interfaces with the Spring Boot backend.
