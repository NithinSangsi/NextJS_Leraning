<p align="center">
  <img src="https://github.com/NithinSangsi/MaterialUI_React_Library/blob/932f00adab8d27ece263e480e4bd90f47c8efb66/MUI_logo.png" alt="MUI Logo" width="250" height="250"/>
</p>

<h1 align="center">
   What is NextJS
</h1>

The React Framework for the Web.
Next.js is an open-source full-stack React framework that provides a structured approach and built-in features for building high-performance, production-ready web applications.



# 🛒 Next.js E-Commerce Practice Project

## 📌 Introduction

This project is a **Next.js application** built using the **App Router architecture**.
The goal of this project is to understand how routing works in Next.js, how folders represent routes, and how different pages are structured inside the `app` directory.

In Next.js (App Router), **each folder inside the `app` directory represents a route**, and the file named **`page.tsx` acts as the main component for that route**.
If the file name is different, the route will not work correctly.

This project includes routes such as:

* **Home Page**
* **E-Commerce Page**
* **Dynamic Product Page using ID**

It also includes examples of **server-side and client-side components**.

---

# 🚀 Technologies Used

* **Next.js**
* **React**
* **TypeScript**
* **CSS**
* **App Router (Next.js routing system)**

---

# 📂 Important Folder Structure

Only the important routing folders are shown below.

```
NEXTJS/
│
├── app/
│
│   ├── ecom/
│   │   └── page.tsx
│   │
│   ├── home/
│   │   └── page.tsx
│   │
│   ├── products/
│   │   ├── page.tsx
│   │   └── [id]/
│   │       └── page.tsx
│   │
│   ├── components/
│   │   ├── client-side.tsx
│   │   ├── navbar.tsx
│   │   └── server-side.tsx
│   │
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
└── package.json
```

---

# 🧭 Routing Explanation

### Root Route

```
app/page.tsx
```

This represents the **main root route**:

```
localhost:3000/
```

---

### Home Route

```
app/home/page.tsx
```

Accessible at:

```
localhost:3000/home
```

---

### E-Commerce Route

```
app/ecom/page.tsx
```

Accessible at:

```
localhost:3000/ecom
```

This page is used to demonstrate a **basic e-commerce layout**.

---

### Products Route

```
app/products/page.tsx
```

Accessible at:

```
localhost:3000/products
```

This page lists available products.

---

### Dynamic Product Route

```
app/products/[id]/page.tsx
```

This is a **dynamic route**.

Example URLs:

```
localhost:3000/products/1
localhost:3000/products/2
localhost:3000/products/3
```

The **`[id]` folder represents a dynamic parameter** which allows the application to display different product details based on the product ID.

---

# 🧩 Components

### Navbar Component

```
app/components/navbar.tsx
```

Used for navigation across different routes.

---

### Client Side Component

```
app/components/client-side.tsx
```

This component runs on the **client side** and is used for interactive UI functionality.

---

### Server Side Component

```
app/components/server-side.tsx
```

This component runs on the **server side**, which is one of the core features of Next.js.

---

# ⚙️ How Next.js Routing Works

In the **Next.js App Router**:

* The **folder name becomes the route**
* The **`page.tsx` file becomes the main component**
* Nested folders create **nested routes**
* Dynamic routes are created using **`[parameter]`**

Example:

```
app/products/[id]/page.tsx
```

Here:

* `products` → route
* `[id]` → dynamic parameter
* `page.tsx` → page component

---

# ⚙️ Installation Guide

## 1️⃣ Install Node.js

Download and install Node.js from:

```
https://nodejs.org
```

---

## 2️⃣ Create a Next.js Application

Run the following command:

```bash
npx create-next-app@latest
```

Follow the setup prompts and select the required options such as:

* TypeScript
* App Router
* ESLint

---

## 3️⃣ Navigate to the Project Folder

```bash
cd your-project-name
```

---

## 4️⃣ Install Dependencies

```bash
npm install
```

---

## 5️⃣ Run the Development Server

```bash
npm run dev
```

---

## 6️⃣ Open the Application

Open the browser and visit:

```
http://localhost:3000
```

---

# 📌 Learning Outcomes

From this project, the following concepts were explored:

* Next.js **App Router**
* **Folder-based routing**
* **Dynamic routes**
* **Server Components**
* **Client Components**
* **Reusable components**
* **Navigation between routes**

---

# 🔧 Future Improvements

* Improve UI design
* Add better product layout
* Integrate real product APIs
* Add authentication
* Add cart functionality
* Improve responsiveness

---

# ⭐ Note

This project is built as a **learning project to understand Next.js routing, dynamic routes, and component architecture**.
