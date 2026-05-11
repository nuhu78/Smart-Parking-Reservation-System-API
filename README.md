# 🚗 Smart Parking Reservation System API (SPR Backend)

# Project Relocated Notice

⚠️ This project repository is no longer actively maintained here.

The development of this project has been moved to a new repository for better structure, updated features, and ongoing improvements.

## New Active Repository:
👉 [New Repository Link Here](https://github.com/nuhu78/Smart-Parking-Reservation-System.git)

## Why moved?
- Better project architecture
- Cleaner codebase
- Updated documentation
- New features and maintenance

## Note for Recruiters / Reviewers
This repository remains available because it was previously shared in my CV/portfolio.
Please visit the new repository for the latest version and active development.

Thank you!

## 📌 Project Overview

This is a **RESTful backend API** for a Smart Parking Reservation System built with **NestJS + TypeScript**.

The system allows users to:

* Register and log in (JWT authentication)
* View available parking slots
* Reserve parking slots
* Cancel reservations

The project focuses on:

* Clean backend architecture
* Proper database relationships
* Secure authentication

> ⚠️ No frontend is included. APIs can be tested using **Postman** or **Swagger UI**. 

---

## 🛠 Tech Stack

* **Backend Framework:** NestJS
* **Language:** TypeScript
* **Database:** PostgreSQL
* **ORM:** TypeORM
* **Authentication:** JWT + Role Guards
* **Validation:** class-validator
* **Password Hashing:** bcryptjs
* **Email Service:** Nodemailer + Mailer Module
* **Documentation:** Swagger UI

---

## ✅ Features

### 🔐 Authentication (DONE ✔️)

* User Registration
* User Login
* JWT Token Generation ✅ *(implemented)*
* Get Current User (`/auth/me`)

### 🚗 Parking Management

* Create Parking Area (Admin)
* View Parking Areas

### 🅿️ Slot Management

* Add Parking Slots
* View Available Slots

### 📅 Reservation System

* Reserve Slot
* View My Reservations
* Cancel Reservation

### 📧 Email Notifications

* Reservation Confirmation Email
* Reservation Cancellation Email

---

## 📡 API Endpoints

| Method | Endpoint            | Description           |
| ------ | ------------------- | --------------------- |
| POST   | `/auth/register`    | Register user         |
| POST   | `/auth/login`       | Login & get JWT       |
| GET    | `/auth/me`          | Get logged-in user    |
| POST   | `/parking`          | Create parking area   |
| GET    | `/parking`          | Get all parking areas |
| POST   | `/slots`            | Add parking slot      |
| GET    | `/slots`            | Get available slots   |
| POST   | `/reservations`     | Reserve slot          |
| GET    | `/reservations/my`  | My reservations       |
| DELETE | `/reservations/:id` | Cancel reservation    |

---

## 🧱 Database Design

### Entities:

* **User**
* **ParkingArea**
* **Slot**
* **Reservation**

### Relationships:

* One User → Many Reservations
* One ParkingArea → Many Slots
* One Slot → One ParkingArea
* One Reservation → One User & One Slot 

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the repo

```bash
git clone https://github.com/nuhu78/Smart-Parking-Reservation-System-API.git
cd smart-parking-api
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Setup environment variables

Create a `.env` file:

```env
PORT=3000

DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=yourpassword
DB_NAME=parking_db

JWT_SECRET=your_jwt_secret

MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USER=your_user
MAIL_PASS=your_pass
```

---

### 4️⃣ Run the project

```bash
npm run start:dev
```

---

## 📘 API Documentation

Swagger UI:

```
http://localhost:3000/api
```

---

## 🔑 Authentication Flow (Implemented)

1. User registers
2. User logs in
3. Server returns **JWT token**
4. Token is used in headers:

```
Authorization: Bearer <your_token>
```

---

## 📧 Mailer Setup

* Uses **@nestjs-modules/mailer + Nodemailer**
* Templates stored in:

```
src/mail/templates/
```

* Emails triggered on:

  * Reservation confirmation
  * Reservation cancellation 

---

## 🧪 Testing

* Use Postman or Swagger
* Jest recommended for unit testing

---

## 📂 Project Structure

```
src/
 ├── auth/
 ├── users/
 ├── parking/
 ├── slots/
 ├── reservations/
 ├── mail/
```

---

## 📦 Deliverables

* GitHub repository
* REST API
* Swagger documentation
* Email integration
* JWT Authentication (Completed ✅)

---

## 👨‍💻 Author

MD Tangimul Anjam Nuhu

---

## ⭐ Status

🚧 In Progress
✔️ Authentication & Token Generation Completed
🔜 Next: Reservations + Mailer

---


