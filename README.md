# MF-Kahve

MF Kahve is a practical example of microfrontends architecture by using horizontal splitting. It is a simple coffee shop application that consists of multiple microfrontends and a host application.

## Table of Contents

- [MF-Kahve](#mf-kahve)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Architecture](#architecture)
    - [Tech Stack](#tech-stack)
      - [Storage](#storage)
      - [Sharing data](#sharing-data-between-microfrontends)
      - [Communication](#communication-between-microfrontends)
      - [Routing](#routing)
      - [Styling](#styling)
      - [Testing](#testing)
      - [Observability](#observability)
      - [Deployement](#deployement)
    - [Roadmap](#roadmap)
  - [Starting the application](#starting-the-application)
  - [Deployement](#deployement-1)
  - [CI/CD](#cicd)
  - [References](#references)
  - [License](#license)

## Introduction

It is a simple coffee shop application that consists of multiple microfrontends. These microfrontends can be deployed and scale independently of each other. Since they are independent, they can be written in different frameworks and languages.

## Architecture

This architecture is highly depend on the organization of the team. The team can be organized by features or by layers. In this example, the team is organized by features. This leads to a better communication between the team members and a better understanding of the business domain. Teams can work autonomously and independently of each other.

Shell = Composer

Application shell loads multiple micro-frontends directly from the target(it usually a CDN in IRL). This way, the application shell can dynamically append the DOM nodes.

_See the following diagram for more details. Check the [spotify engineering culture](https://www.youtube.com/watch?v=hQDblYvY9RY) for more details._

<!-- imgk -->

There are 4 teams that are responsible for the development of the feature they are assigned to.

- **Search**: searching in the products
- **List**: list of products that are available in the coffee shop
- **Cart**: cart of the products that are selected by the user
- **Composer**: composition of the microfrontends and common APIs
- **Checkout**: checkout process.

### Tech Stack

- Vite
- Cypress

#### Storage

Since we are making an practical microfrontend example we doesn't care about the E2E structure. Normally each team owns their service and database. But in this example we are going to use an mocking service to simulate the backend.

#### Sharing data between microfrontends

(not implemented yet)

#### Communication between microfrontends

(not implemented yet)

#### Routing

Routing will be handled by **Composer** team. The composer team will be responsible for the composition of the microfrontends and the routing between them.

#### Styling

Design system will be handled by **Composer** team. The composer team will be responsible for the design system and the styling of the microfrontends. Teams can use the design system to style their microfrontends.

#### Testing

Microfrontend testing is done in isolation. Each microfrontend is tested separately. Unit testing is done with Jest and React Testing Library. Integration testing is done with Cypress.

#### Observability

(not implemented yet)

#### Deployement

(not implemented yet)

### Roadmap

- Add testing
- Add and integrate with observability libs and tools

## Starting the application

```bash
docker-compose up
```

Check the application at `http://localhost:8080`

## Deployement

Deployement is done with Docker and Kubernetes. Each microfrontend is deployed as a separate docker image. The host application is also deployed as a separate docker image. The docker images are pushed to a docker registry. The kubernetes cluster is configured to pull the images from the docker registry and deploy them.

## CI/CD

CI/CD is done with Github Actions. There are 2 workflows. The first workflow is triggered when a pull request is created. It runs the tests and builds the docker images. The second workflow is triggered when a pull request is merged to the master branch. It runs the tests, builds the docker images and pushes them to the docker registry. It also deploys the application to the kubernetes cluster.

## References

- [Micro-frontends in context](https://increment.com/frontend/micro-frontends-in-context/)

## License

[MIT](LICENSE)
