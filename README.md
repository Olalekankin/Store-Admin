# Multi-Vendor Store Admin Dashboard

##  Overview
The **Multi-Vendor Store Admin Dashboard** is a web application that allows administrators to oversee and manage **vendors, customers, products, and orders**. Built with **Next.js**, **Tailwind CSS**, and **Zustand**, this dashboard provides essential insights and CRUD functionalities to efficiently handle multi-vendor store operations.

##  Features
-  **Dashboard Overview** – View total sales, orders, active vendors, and customers.


##  Technology Stack
- **Next.js** – Framework for server-side rendering and routing.
- **Tailwind CSS** – Utility-first styling for a sleek and responsive UI.
- **Zustand** – State management for handling global application state.
- **API Routes** – Next.js **`/api`** routes for fetching and managing data.

##  Project Structure
```
/your-project
│── /app
│   ├── /api/dashboard/route.js  # API for dashboard data
│   ├── /dashboard/page.js       # Dashboard UI
│
│── /components
│   ├── DashboardStats.js        # Sales overview widget
│
│── /store
│   ├── dashboardStore.js        # Zustand store for dashboard state
│
│── /public
│   ├── /icons                   # Static icons
│
│── package.json                 # Dependencies
│── tailwind.config.js            # Tailwind configuration
│── README.md                     # Documentation
```

##  Installation & Setup
###  Clone the Repository:
```bash
git clone https://github.com/your-repo/multi-vendor-dashboard.git
cd multi-vendor-dashboard
```
### Install Dependencies:
```bash
npm install
# or
yarn install
```
### Run the Development Server:
```bash
npm run dev
```
Then open `http://localhost:3000` in your browser. 

## Future Enhancements
- **Role-Based Authentication (Admin & Vendor Access)**
- **Real-time Data Updates with WebSockets**
- **Dark Mode Support**

## Contributing
Contributions are welcome! If you'd like to improve the dashboard, feel free to fork the repository and submit a pull request.

---
💡 **Need Help?** Reach out via GitHub Issues or start a discussion. 🚀

