# Express Mongoose CRUD

A beginner-friendly user management app built while learning **Node.js**, **Express.js**, **MongoDB**, **Mongoose**, **EJS**, and **Tailwind CSS**.

The app lets you create users, view all users, edit user details, and delete users.

## Features

- Create a user with a name, email, and image URL
- Display all users in a dashboard
- Update existing user details
- Delete users
- Render pages with EJS templates
- Store user data in MongoDB through Mongoose
- Style the interface with Tailwind CSS

## Screenshots

### Create User

![Create User page](screenshots/home.png)

### All Users

![Users dashboard](screenshots/users.png)

### Edit User

![Edit user page](screenshots/edit-user.png)

### Updated Users

![Updated users dashboard](screenshots/updated-users.png)

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- EJS
- Tailwind CSS
- HTML

## Run Locally

1. Clone this repository:

   ```bash
   git clone https://github.com/ashik-210/express-mongoose-crud.git
   cd express-mongoose-crud
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Make sure MongoDB is running locally.

4. Start the app using your project's start command, or run:

   ```bash
   node app.js
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

> If your entry file is not `app.js`, replace it with the correct filename. Make sure `package.json` includes the dependencies needed by the project.

## What I Learned

- Building CRUD routes with Express
- Creating and querying MongoDB documents with Mongoose
- Passing database data to EJS views
- Handling HTML form submissions
- Organizing a basic Express project

---

This project was created for learning and practice.
