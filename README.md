
# Project-Management-System

This is a task management application that allows users to create, edit, and delete tasks. Users can also set deadlines, assign tasks to other users, and set priorities. The application uses React and Redux for state management, Express.JS and Socket.io for real time updates, and it is built with Bootstrap components, Tailwind utilities for a clean and modern look.


## Run Locally

Clone the project

```bash
  git clone https://github.com/chandan-30/Project-Management-System.git
```

Go to the client directory

```bash
  cd client
```

Install dependencies

```bash
  npm install
```
Go to the server directory

```bash
  cd server
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  cd server
  npm run start
```

Start the React local
```bash
  cd client
  npm run start
```


## API Reference

#### Sign Up

```http
  POST /register/
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `  `      | `      ` | Sign Up a user       |


```http
  POST /login/
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `  `      | `      ` | Login In a user       |



#### Get all Users

```http
  GET /users/
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `  `      | `      ` | Retrieves all registered Users       |

#### Get all Tasks

```http
  GET /api/tasks/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `    `    | `      ` | Retrieves all created Tasks       |


#### Update a Task

```http
  PUT /api/tasks/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| ` id `    | `string` | Updates a Task with referenced Id |


#### Create a Task

```http
  POST /api/tasks/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `    `    | `      ` | Creates a Task                    |


#### Delete a Task

```http
  DELETE /api/tasks/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `  id  `    | `  string ` | Deletes a Task                    |
## Tech Stack

**Client:** React, Redux, TailwindCSS, Bootstrap, react-router, axios, Socket.io-client, EmailJS

**Server:** Node, Express, JWT, REST API, Socket.io

**Database:** MongoDB


## Acknowledgements

 - [Awesome React Icons](https://react-icons.github.io/)
 - [Bootstrap](https://getbootstrap.com/docs/5.3)



## Contributing

Contributions are always welcome!

Please adhere to this project's `code of conduct`.


## 🚀 About Me
I'm a full stack developer...

Innovative, dedicated to crafting robust solutions with a user-centric focus. Profcient in
JavaScript, ReactJS, Redux, NextJS, PHP, Python, SQL, and more, extensive technical expertise is brought to various projects.
From elevating WordPress plugins to developing feature-rich web applications, fervent commitment exists to pushing the
boundaries of technology. 
## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://chandan-30.github.io/portfolio/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/sai-chandan-yata-4a50b01a2/)

