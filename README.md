# React OpenAPI

This project is a React OpenAPI project built with React (Vite + Typescript + SWC), a framework designed for efficient and scalable UI applications. It also employs Docker for containerization, NVM for managing Node.js versions.

## Prerequisites

-   Node.js version 20.x.x (LTS)
-   Docker (Optional)
-   NVM (optional, for managing Node.js versions)

## Table of Contents

-   [Installation](#installation)
-   [Usage](#usage)
-   [Docker](#docker)
-   [Testing](#testing)
-   [Linting and Formatting](#linting-and-formatting)

## Installation

Before starting, ensure you have [Node.js](https://nodejs.org/) installed. It's recommended to use [NVM](https://github.com/nvm-sh/nvm) to manage Node.js versions. The project uses the Node.js version specified in `.nvmrc`.

1. Clone this repository:

    ```bash
    git clone https://github.com/pashamakhilkumarreddy/react-openapi.git
    ```

2. Navigate to the project directory:

    ```bash
    cd react-openapi
    ```

3. If using NVM, set the correct Node.js version:

    ```bash
    nvm use
    ```

4. Create a `.env` file in the project root directory and add the required environment variables (use `.env.example` as a reference).

    ```bash
    cp .env.example .env
    ```

5. Install dependencies:

    ```bash
    npm install
    ```

## Usage

To start the application:

-   Development Mode:

    ```bash
    npm run dev
    ```

-   Production Mode:

    ```bash
    npm run build
    ```

## Docker

The project includes Docker Compose files for various environments. Ensure the necessary environment variables are set in the corresponding `.env` files (use `.env.example` as a reference).

### Building Docker Images

To build and run the Dockerfile you provided, you'll need to follow these steps. The Dockerfile describes a multi-stage build process where the first stage is for building a Node.js application and the second stage is for serving the built application using Nginx. Here’s how you can do it:

#### Step-by-Step Instructions

1. **Build the Docker Image**

    Open a terminal, navigate to the directory where your Dockerfile is located, and run the following command to build the Docker image. Replace `react-openapi` with your desired image name if different:

    ```bash
    docker build -t react-openapi .
    ```

    The `-t` flag tags the image with a name (`react-openapi` in this case). The `.` specifies the build context, which is the current directory.

2. **Run the Docker Container**

    Once the image is built, you can run a container from it using the following command:

    ```bash
    docker run -d -p 80:80 --name react-app react-openapi
    ```

3. **Access Your Application**

    After running the container, you can access your application in a web browser by navigating to `http://localhost`. If you mapped a different port, adjust the URL accordingly.

4. **Check Logs (Optional)**

    If you need to check the logs to see if everything is running smoothly, you can use:

    ```bash
    docker logs my-react-app
    ```

5. **Stop and Remove the Container (Optional)**

    To stop the container, use:

    ```bash
    docker stop my-react-app
    ```

    To remove the container, use:

    ```bash
    docker rm my-react-app
    ```

## Testing

1. Run Tests:

    ```bash
    npm test
    ```

## Linting and Formatting

1. Run ESLint:

    ```bash
    npm run lint
    ```

2. Format Code:

    ```bash
    npm run format:fix
    ```

### Pre-commit Hook

Pre-commit hooks using Husky and lint-staged enforce linting and formatting. To bypass these hooks temporarily:

```bash
git commit --no-verify -m "Your commit message"
```

## Scripts

Key npm scripts include:

-   `npm run build`: Build the application for production.
-   `npm run format`: Format code using Prettier.
-   `npm run lint`: Lint code using ESLint.
-   `npm run start`: Start the application in production mode.
-   `npm run start:dev`: Start the application in development mode.
-   `npm run start:debug`: Start the application in debug mode.

Refer to the `package.json` file for more details.

## Contributing

For contributing guidelines, see the [Contributing guide](./CONTRIBUTING.md).
