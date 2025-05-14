

# E‑Parking System

> A user‑friendly web application for real‑time parking reservation and management.


## 📋 Table of Contents

1. [About the Project](#about-the-project)  
2. [Features](#features)  
3. [Tech Stack](#tech-stack)  
4. [Getting Started](#getting-started)  
   - [Prerequisites](#prerequisites)  
   - [Installation](#installation)  
   - [Configuration](#configuration)  
   - [Running Locally](#running-locally)  
5. [Usage](#usage)  
6. [Testing](#testing)  
7. [Project Structure](#project-structure)  
8. [Roadmap](#roadmap)  
9. [Contributing](#contributing)  
10. [License](#license)  
11. [Team](#team)

---

## About the Project

E‑Parking System streamlines urban parking by allowing drivers to **search**, **reserve**, and **pay** for parking spots in real time, and letting facility managers **monitor**, **adjust**, and **report**—all from an intuitive dashboard.

> **Built**: April 2024  
> **Methodology**: Agile (9 sprints)  
> **Team Size**: 11 members  

<details>
  <summary>🛠️ Objectives & Approach</summary>

  1. **Seamless UX**  
     - Mobile‑first, WCAG‑compliant  
     - Instant slot search with map integration  

  2. **Agile Delivery**  
     - Sprint planning, daily stand‑ups, retrospectives  
     - Test‑Driven Development & CI/CD pipelines  

  3. **Scalability & Quality**  
     - Microservices‑friendly architecture  
     - Automated blue/green deployments  
     - Unit, integration, E2E, and performance testing  
</details>

---

## ✨ Features

- **User Portal**  
  - Secure JWT authentication (signup/login)  
  - Live availability map (Google Maps/OpenStreetMap)  
  - Filters: distance, price, accessibility  
  - One‑click booking + SMS/email confirmation  

- **Payment Module**  
  - Paystack integration (cards & wallets)  
  - Encrypted transaction logs  
  - Refund processing  

- **Admin Dashboard**  
  - Real‑time occupancy & revenue charts  
  - Dynamic pricing controls  
  - Exportable PDF & Excel reports  

- **Notifications**  
  - Session reminders via email/SMS  
  - Customizable user preferences  

---

## 🛠 Tech Stack

| Layer         | Technology                              |
| ------------- | --------------------------------------- |
| **Frontend**  | React · Tailwind CSS · JavaScript       |
| **Backend**   | .NET Core (C#) · RESTful APIs · JWT     |
| **Database**  | SQL Server                              |
| **CI/CD**     | GitHub Actions · Docker · Vercel        |
| **Testing**   | Jest · NUnit · Cypress · JMeter         |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) ≥ v16  
- [.NET SDK](https://dotnet.microsoft.com/) ≥ 6.0  
- [SQL Server](https://www.microsoft.com/sql-server) instance  
- Paystack account & API keys  

### Installation

1. **Clone the repo**  
   ```bash
   git clone https://github.com/Kingsley-commit/e-parking-system.git
   cd e-parking-system
2. **Configure Environment**
   Copy example env files and fill in credentials:

   ```bash
   cp backend/.env.example backend/.env
   cp frontend/.env.example frontend/.env
   ```

   * `DB_CONNECTION_STRING`
   * `PAYSTACK_SECRET_KEY`

### Running Locally

#### Backend

```bash
cd backend
dotnet restore
dotnet ef database update      # Run migrations
dotnet run                     # Starts API on http://localhost:5000
```

#### Frontend

```bash
cd frontend
npm install
npm run dev                    # Starts UI on http://localhost:3000
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Testing

* **Backend Unit & Integration**

  ```bash
  cd backend
  dotnet test
  ```

* **Frontend Unit**

  ```bash
  cd frontend
  npm test
  ```

* **E2E (Cypress)**

  ```bash
  cd frontend
  npm run cypress:open
  ```

* **Performance (JMeter)**

  ```bash
  jmeter -n -t tests/load_test.jmx
  ```

---

## 🗂 Project Structure

```
e-parking-system/
├── backend/         # C# API & DB migrations
├── frontend/        # React + Tailwind UI
├── docs/            # Architecture diagrams & sprint reports
├── scripts/         # CI/CD & deployment automation
├── tests/           # E2E & load test plans
└── README.md
```

---

## 🎯 Roadmap

* [x] Core booking & payment
* [x] Admin analytics & reporting
* [ ] Predictive slot suggestions (ML)
* [ ] Smart‑city integrations (IoT sensors)
* [ ] Mobile companion app

---

## 🤝 Contributing

1. **Fork**
2. **Branch**: `git checkout -b feat/your-feature`
3. **Commit**: `git commit -m "Add amazing feature"`
4. **Push**: `git push origin feat/your-feature`
5. **PR** & await review

> ✔️ Ensure all tests pass & adhere to coding standards.
> 📝 Please read [CODE\_OF\_CONDUCT.md](CODE_OF_CONDUCT.md).


