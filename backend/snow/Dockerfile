# Build
FROM maven:3.9.5-eclipse-temurin-21-alpine AS build
COPY src/ /app/src
COPY pom.xml /app
RUN mvn -f /app/pom.xml clean package

FROM openjdk:21-jdk
COPY --from=build /app/target/snow-0.0.1-SNAPSHOT.jar /usr/local/lib/snow.jar
EXPOSE 9090
ENTRYPOINT ["java","-jar","/usr/local/lib/snow.jar"]

