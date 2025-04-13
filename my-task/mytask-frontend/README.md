src/
├── assets/              # รูปภาพ โลโก้ icon ต่างๆ
│   └── logo.png
│
├── components/          # UI components ที่ใช้ซ้ำได้
│   ├── Button.jsx
│   ├── InputField.jsx
│   └── Navbar.jsx
│
├── constants/           # ตัวแปรคงที่ เช่น role, status
│   └── roles.js
│
├── context/             # React Context (global state)
│   └── AuthContext.jsx
│
├── hooks/               # Custom Hooks เช่น useAuth
│   └── useTasks.js
│
├── layouts/             # Layout สำหรับหน้าต่างๆ
│   ├── AuthLayout.jsx
│   └── DashboardLayout.jsx
│
├── pages/               # หน้าต่างๆ แยกตามหมวด
│   ├── auth/
│   │   ├── LoginPage.jsx
│   │   └── RegisterPage.jsx
│   └── dashboard/
│       └── DashboardPage.jsx
│
├── routes/              # เส้นทางของแอป
│   ├── index.jsx           # รวมทุก routes
│   ├── PrivateRoutes.jsx   # สำหรับหน้า login ก่อนเข้า
│   └── PublicRoutes.jsx    # สำหรับหน้าไม่ต้อง login
│
├── services/            # ฟังก์ชันเรียก API
│   ├── authService.js
│   └── taskService.js
│
├── utils/               # ฟังก์ชันช่วยทั่วไป
│   └── formatDate.js
│
├── App.jsx              # แกนกลางของแอป
├── main.jsx             # จุดเริ่มต้น render แอป
└── index.css            # CSS หลัก
