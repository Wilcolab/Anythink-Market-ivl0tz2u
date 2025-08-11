# Simple Express Server

This project is a simple Express server that listens on port 8001. It is designed to demonstrate the basic setup of an Express application using Docker and Yarn.

## Project Structure

```
simple-express-server
├── src
│   └── server.js        # Entry point of the application
├── package.json         # Configuration file for npm
├── yarn.lock            # Dependency lock file
├── Dockerfile           # Dockerfile to build the application image
└── README.md            # Project documentation
```

## Getting Started

To get started with this project, follow the instructions below.

### Prerequisites

- Ensure you have [Node.js](https://nodejs.org/) and [Yarn](https://yarnpkg.com/) installed on your machine.
- Docker should also be installed to build and run the application in a container.

### Running the Server Locally

1. Clone the repository:
   ```
   git clone <repository-url>
   cd simple-express-server
   ```

2. Install dependencies:
   ```
   yarn install
   ```

3. Start the server using Nodemon:
   ```
   yarn start
   ```

The server will be running on `http://localhost:8001`.

### Building and Running with Docker

1. Build the Docker image:
   ```
   docker build -t simple-express-server .
   ```

2. Run the Docker container:
   ```
   docker run -p 8001:8001 simple-express-server
   ```

The server will be accessible at `http://localhost:8001`.

## License

This project is licensed under the MIT License.