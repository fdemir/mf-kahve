# MF-Kahve

MF Kahve is a practical example of microfrontends architecture by using vertical splitting and client-side composition. It is a simple coffee shop application that consists of multiple microfrontends and a host application.

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
  - [Policy](#policy)
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

There are 5 teams that are responsible for the development of the feature they are assigned to.

- **Search**: searching in the products
- **List**: list of products that are available in the coffee shop
- **Cart**: cart of the products that are selected by the user
- **Checkout**: checkout process.
- **Core**: common APIs that are used by the microfrontends, cross cutting concerns, etc.

- **Composer**: app shell that is responsible for the composition of the microfrontends and the routing between them.

### Tech Stack

- Vite
- Cypress

#### Storage

Since we are making an practical microfrontend example we doesn't care about the E2E structure. Normally each team owns their service and database. But in this example we are going to use an mocking service to simulate the backend.

#### Sharing data between microfrontends

Every microfrontend is responsible for its own data. Although, there must be some package that all teams agree on. This package is `zustand`. It is a simple state management library. It is used to share data between the microfrontends. The teams can expose the hook/state that they want to share with other teams.

#### Communication between microfrontends

The `@mf-kahve/core` package provides the event bus for the microfrontends. The event bus is a simple pub/sub implementation. It is used to communicate between the microfrontends.

#### Routing

Routing will be handled by **Composer** team. The composer team will be responsible for the composition of the microfrontends and the routing between them. The main technology behind the routing is `react-router`.

#### Styling

Design system will be handled by **Composer** team. The composer team will be responsible for the design system and the styling of the microfrontends. Teams can use the design system to style their microfrontends. The main technology behind the styling is "tailwindcss".

#### Testing

Microfrontend testing is done in isolation. Each microfrontend is tested separately. Unit testing is done with Jest and React Testing Library. Integration testing is done with Cypress.

#### Observability

(not implemented yet)

## Starting the application

```bash
docker-compose up
```

Check the application at `http://localhost:3000`

## Deployement

(not ready yet)

## CI/CD

CI/CD is done with Github Actions. There are 2 workflows. The first workflow is triggered when a pull request is created. It runs the tests and builds the docker images. The second workflow is triggered when a pull request is merged to the master branch. It runs the tests, builds the docker images and pushes them to the docker registry. It also deploys the application to the kubernetes cluster.

## Roadmap

- Integrate the microfrontends with each other
- Add testing
- Add policy to prevent duplicate packages, etc.

## Known Issues

### PNPM and Docker

It is impossible to create reflinks or hardlinks between a Docker container and the host filesystem during build time. The next best thing we can do is using BuildKit cache mount to share cache between builds. Alternatively, may use podman because it can mount Btrfs volumes during build time.

## References

- [Micro-frontends in context by Luca Mezzalira](https://increment.com/frontend/micro-frontends-in-context/)
- [Building Micro-Frontends by Luca Mezzalira](https://www.oreilly.com/library/view/building-micro-frontends/9781492082989/)
- [Micro Frontends by Cam Jackson](https://martinfowler.com/articles/micro-frontends.html)
- [Micro Frontends by Michael Geers](https://micro-frontends.org/)
- [Micro Frontends in Action by Michael Geers](https://www.manning.com/books/micro-frontends-in-action)
- [Pattern: Client-side UI composition](https://microservices.io/patterns/ui/client-side-ui-composition.html)

## License

[MIT](LICENSE)
