# Todo App using React And Golang
This project is a simple todo list app built with [React.js]() and [Golang](), using the [Gorilla Mux]() library for the backend. It allows you to create, read, update, and delete todos.
<br/>
## Installation
To run this project, you need to have [Node.js](), [Golang](), and [Git]() installed on your machine. Once you have these dependencies installed, follow these steps:
1. Clone the repository: `https://github.com/Supsource/TodoApp-Golang-React.git`
2. Install the frontend dependencies: `cd client && npm install`.
3. Build the frontend: `npm run build`.
4. Install the backend dependencies: `cd ../server && go get`.
5. Run the backend server: `go run main.go`.

## Usage
Once you have the backend server running, you can access the todo list app by opening your web browser and navigating to `http://localhost:8080`. You should see the app's main page, where you can view, create, edit, and delete todos.

## Overview
<p align="center">
  <img src="https://raw.githubusercontent.com/Supsource/TodoApp-Golang-React/main/img/fullstack.png" alt="Image description" style="display: block; margin: 0 auto;  width: 60%; height: auto">
</p>

### Backend
The backend server is built using Golang and the Gorilla Mux library. The project is structured into directories for the server, middleware, models, and router.

 
* **Server:**
The `main.go` file is the entry point of the Golang server. It sets up the server's configuration and starts the router.
* **Middleware:**
The `middleware/` directory contains middleware files that can be used in your server routes, such as authentication and logging.
* **Models:**
The `models/` directory holds the model definitions for your application, such as `todo.go` and `user.go`.
* **Router:**
The `router/` directory contains the `routes.go` file where you define your server's routes using Gorilla Mux. This file maps URLs to the appropriate handler functions in the `handlers/` directory.

### Frontend
The frontend is built using [React.js]() and is located in the `client/` directory. It contains the components for the app's UI, such as `Test.js` and `TodoList.js`.
* **App:** The `App.js` file acts as the main entry point for the React application.

## Contributing
Contributions to this project are welcome! If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b my-feature`.
3. Make your changes and commit them: `git commit -am 'Add new feature'`.
4. Push the branch to your forked repository: `git push origin my-feature`.
5. Open a pull request, describing your changes in detail and mentioning any relevant issues.

