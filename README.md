# React Application Architecture for Production - published by Packt

## Overview

Building large-scale React applications can be overwhelming with the amount of tooling choices and lack of cohesive resources. To address these challenges, this hands-on guide covers best practices and web application development examples to help you build enterprise-ready applications with React in no time.

This book is for intermediate-level web developers who already have a solid understanding of JavaScript, React, and web development in general and want to build large-scale React applications effectively. Beginner-level TypeScript experience, along with JavaScript and React, will be beneficial.

This book covers the following exciting features:

- Use a good project structure that scales well with your application
- Create beautiful UIs with Chakra UI and emotion
- Configure a base Next.js app with static code analysis and Git hooks
- Learn to mock API endpoints for prototyping, local development and testing
- Choose an optimal rendering strategy in Next.js based on the page needs
- Learn to choose the best state management solution for given problem
- Write unit tests, integration tests and e2e tests in your React Application
- Configure CI/CD with GitHub Actions

## Customizations and Outcomes

### 1. Local Developer Experience

- run locally with mock service worker and handler endpoints.
- debug client side code in browser and React Dev Tools
- Debug serer side rendered code in VS Code

- Jest - automated integration tests
- Cypress - automated end to end

### 2. Containerization with Docker

- create a production build that has no dev dependencies included
- next js optimizes for code splitting and lazy loading.

- containerized prod build - has no back end or mocked service

- this build does not use mock service worker and will need a back end to communicate with
- use docker compose to include local instance of Api Gateway configured to an Azure APIM instance

### 3. Api Gateway - Azure Api Management instance run locally

- establish an Api Gateway in Azure Api Manager
- set up mock responses to match the Jobs App data
- run a self hosted gateway in docker compose
  https://medium.com/@vipulm124/the-self-hosted-gateway-running-azure-apim-on-your-laptop-665449aa1fa6

### 4. Deploy Docker application to Azure Container Apps

- implement GitHub Actions to:
  -- build test the source code,
  -- create docker image and push to registry
  -- check and build infrastructure
  -- deploy images to container apps
  -- run Cypress e2e tests

- use IaC to check or create for the necessary cloud components - APIM instance and configured API endpoints, Azure Container Registry, Azure Container App, Managed Identities.
