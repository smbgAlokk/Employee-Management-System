# 🌟 Employee Management System

Welcome to the **Employee Management System** project! 🎉 This repository showcases a well-structured, React-based web application designed to streamline employee and task management.

---

## 🚀 Features

### Admin Dashboard
- **Task Creation**: Admin can create tasks with specific details like title, description, due date, and category.
- **Task Overview**: Easily monitor all assigned tasks with color-coded statuses.
- **Employee Management**: Admin can oversee employee tasks and progress.
- **Logout Functionality**: Ensure secure access by logging out of the system.

### Employee Dashboard
- **Task View**: Employees can view tasks assigned to them with details such as priority, due date, and descriptions.
- **Task Progress**: Tasks are categorized based on their statuses: new, active, completed, or failed.
- **Logout Functionality**: Employees can securely log out of their dashboards.

### Authentication System
- **Role-Based Access**: Provides distinct dashboards for Admin and Employees based on login credentials.
- **Data Validation**: Ensures only registered users with valid credentials can access the system.

### Local Storage
- **Data Handling**: Stores all data locally without requiring a database.
- **Reusable Context API**: Centralized management of authentication and user data using the Context API.

---

## 🛠️ Code Highlights

### Project Architecture
This project is organized into distinct modules for better readability and maintainability:
- **AuthProvider**: Centralizes authentication and manages user data.
- **Components**:
  - **Auth**: Handles login functionality.
  - **Dashboard**: Includes `AdminDashboard` and `EmployeeDashboard` components.
  - **Others**: Contains reusable components like `Header`, `CreateTask`, and `TaskList`.

### Methods and Techniques Used

#### 1. Authentication System
- **Admin Login**: Hardcoded credentials for admin access.
- **Employee Login**: Validates against a list of employees stored in local storage.
- **Implementation**:
  ```javascript
  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      setUser("admin");
    } else if (
      authData?.employees?.find((e) => e.email === email && e.password === password)
    ) {
      setUser("employee");
    } else {
      alert("Invalid Credentials");
    }
  };
  ```

#### 2. Local Storage Management
- **Data Retrieval**: Fetches employees and admin data at application start using `useEffect`.
- **Structure**:
  ```javascript
  const employees = [
    {
      id: 1,
      email: "employee1@example.com",
      password: "123",
      tasks: [/* task objects */],
    },
  ];
  ```

#### 3. Task Management
- **Task Creation**: Admin creates tasks with all necessary details.
  ```javascript
  <form>
    <input type="text" placeholder="Task Title" />
    <input type="date" />
    <textarea placeholder="Description"></textarea>
    <button>Create Task</button>
  </form>
  ```
- **Task Filtering**: Tasks are displayed based on their status (new, active, completed).
- **Color-Coded Status**: Visual differentiation of tasks using color-coded cards.

#### 4. Reusable Components
- **Header**: Displays a greeting and logout button.
- **TaskList**: Dynamically renders tasks based on their category and priority.

---

## 🌈 Challenges and Solutions

### Challenge 1: Local Data Management
- **Problem**: Without a database, managing and updating data dynamically was tricky.
- **Solution**: Used local storage for persistent data and Context API for state management.

### Challenge 2: Role-Based Dashboards
- **Problem**: Navigating between admin and employee dashboards based on roles.
- **Solution**: Used conditional rendering based on the `user` state.

### Challenge 3: Task Status Visualization
- **Problem**: Differentiating tasks by their status visually.
- **Solution**: Employed Tailwind CSS for vibrant color schemes and intuitive designs.

---

## 🎨 Design
This project leverages **Tailwind CSS** for a modern and responsive UI:
- **Interactive Login**: User-friendly input fields and buttons.
- **Vibrant Dashboards**: Colorful task cards and status highlights.
- **Minimalistic Layout**: Clean and functional design elements.

---

## 📸 Screenshots

### Login Page 📊
![Login Page](https://github.com/smbgAlokk/Employee-Management-System/blob/main/LoginPage.png?raw=true)

### Admin Dashboard 👤
![Employee Dashboard](https://github.com/smbgAlokk/Employee-Management-System/blob/main/AdminDashboard.png?raw=true)

### Employee Dashboard 👤
![Employee Dashboard](https://github.com/smbgAlokk/Employee-Management-System/blob/main/EmployeeDashboard.png?raw=true
)

---

## 🧩 How to Run the Project

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

---

## 🏆 Highlights
- 📂 **Well-Structured Codebase**: Organized into clear, modular components.
- ⚡ **Efficient State Management**: Context API simplifies authentication and user data handling.
- 🎨 **Stylish UI**: Tailwind CSS ensures a visually appealing experience.

---

## 📬 Contact

For any questions or feedback, feel free to reach out:

- **Email:** contact.alokkumarr@gmail.com 📧
- **GitHub:** [My GitHub Profile](https://github.com/smbgAlokk) 🌐
- **LinkedIn:** [My LinkedIn Profile](https://www.linkedin.com/in/alokkumarr04/) 💼

---

## 🙌 Acknowledgments

Special thanks to:

- The open-source community 🌍
- Developers and contributors ❤️

---

## 🙌 Thank You!
Feel free to contribute, raise issues, or share your feedback! 🚀
