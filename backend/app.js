
// import express from "express";
// import cors from "cors";

// import authRoutes from "./routes/authRoutes.js";
// import studentRoutes from "./routes/studentRoutes.js";
// import teacherRoutes from "./routes/teacherRoutes.js";
// import adminRoutes from "./routes/adminRoutes.js";
// import chatRoutes from "./routes/chatRoutes.js";

// const app = express();

// app.use(cors({
//   origin: ["http://localhost:5173", "http://localhost:3000"],
//   credentials: true,
// }));
// app.use(express.json());

// app.use("/api/auth", authRoutes);
// app.use("/api/student", studentRoutes);
// app.use("/api/teacher", teacherRoutes);
// app.use("/api/admin", adminRoutes);
// app.use("/api/chat", chatRoutes);

// export default app;


import express from "express";
import cors from "cors";
import authRoutes   from "./routes/authRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
import teacherRoutes from "./routes/teacherRoutes.js";
import adminRoutes  from "./routes/adminRoutes.js";
import chatRoutes   from "./routes/chatRoutes.js";

const app = express();

// Allow all origins — simplest fix for deployment
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(express.json());

app.get("/", (req, res) => res.json({ status: "SmartCMS API running" }));

app.use("/api/auth",    authRoutes);
app.use("/api/student", studentRoutes);
app.use("/api/teacher", teacherRoutes);
app.use("/api/admin",   adminRoutes);
app.use("/api/chat",    chatRoutes);

export default app;
