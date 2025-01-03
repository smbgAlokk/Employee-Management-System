const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 1",
        description: "Complete the client report.",
        date: "2024-12-22",
        category: "Reporting",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 2",
        description: "Fix bugs in the project.",
        date: "2024-12-23",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Task 3",
        description: "Prepare presentation slides.",
        date: "2024-12-24",
        category: "Presentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 1",
        description: "Conduct team meeting.",
        date: "2024-12-22",
        category: "Management",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 2",
        description: "Code review.",
        date: "2024-12-23",
        category: "Review",
        active: true,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Task 3",
        description: "Submit project plan.",
        date: "2024-12-24",
        category: "Planning",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 1",
        description: "Design new logo.",
        date: "2024-12-22",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 2",
        description: "Update website UI.",
        date: "2024-12-23",
        category: "Development",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Task 3",
        description: "Create marketing strategy.",
        date: "2024-12-24",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 1",
        description: "Test new features.",
        date: "2024-12-22",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 2",
        description: "Prepare deployment plan.",
        date: "2024-12-23",
        category: "Deployment",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Task 3",
        description: "Organize team lunch.",
        date: "2024-12-24",
        category: "Team Building",
        active: false,
        newTask: true,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 1",
        description: "Prepare budget report.",
        date: "2024-12-22",
        category: "Finance",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 2",
        description: "Organize files.",
        date: "2024-12-23",
        category: "Administration",
        active: true,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Task 3",
        description: "Conduct interview.",
        date: "2024-12-24",
        category: "HR",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};
