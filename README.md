# Hostel Admission Management System

This repository contains a simple Hostel Admission Management System, which allows users to sign up, log in, apply for admission, and have their application approved or rejected by the admin. The system utilizes ReactJS for the frontend, Node.js and Express.js for the backend, and MySQL for the database.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Libraries Used](#libraries-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)

## Introduction

The Hostel Admission Management System is designed to simplify the process of hostel admissions. It provides a platform for students to sign up, log in, and apply for hostel admission. The admin can review and approve/reject applications, and students are notified via email about the admission status.

## Features

- **User Authentication**: Allows users to sign up and log in securely.
- **Admission Application**: Enables students to apply for hostel admission.
- **Admin Approval Process**: Admin can review and approve/reject admission applications.
- **Email Notification**: Notifies students via email about the status of their admission application.

## Libraries Used

- **ReactJS**: JavaScript library for building user interfaces.
- **Node.js**: JavaScript runtime for server-side applications.
- **Express.js**: Web application framework for Node.js.
- **MySQL**: Database management system used to store application and user data.

## Setup and Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/11a55an/hostel-admission-management-system.git
    ```

2. Set up the backend:
   - Navigate to the `backend` directory and install dependencies:

      ```bash
      cd backend
      npm install
      ```

   - Set up the MySQL database by running the SQL scripts provided in the `backend/database` directory.

   - Start the backend server:

      ```bash
      npm start
      ```

3. Set up the frontend:
   - Navigate to the `frontend` directory and install dependencies:

      ```bash
      cd frontend
      npm install
      ```

   - Start the ReactJS application:

      ```bash
      npm start
      ```

4. Access the application in your web browser at `http://localhost:3000`.

## Usage

1. Open the application in your web browser.

2. Sign up as a student or log in if you already have an account.

3. Apply for hostel admission and fill in the required details.

4. Admin can review the applications and approve/reject them.

5. Students will be notified via email about the status of their admission application.
