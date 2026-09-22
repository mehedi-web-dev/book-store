# 📚 BookVibe — Online Book Store

BookVibe is a modern and responsive book discovery and reading platform built with Next.js.  
The website allows users to explore books, view detailed book information, manage their reading list, and keep track of books they want to read.

---

## 📊 Project Overview

BookVibe is designed for book lovers who want a simple and clean platform to discover interesting books and organize their reading journey.

The website includes a modern landing page, book collection, book details pages, reading-list functionality, and a dedicated read-book section.

---

## 🌐 Live Project

👉 [BookVibe Live Website](https://book-store-lemon-rho.vercel.app/)

## 📸 Screenshot

![BookVibe Website Screenshot](./public/screenshot.png)

---

## ✨ Key Features

### 🧭 Navigation

- Clean and minimal navigation bar
- Home page
- Books collection
- Listed Books section
- Read Books section
- Sign In and Sign Up buttons

### 🏠 Hero Section

- Modern book-focused hero section
- Featured book visual
- Short introduction to the collection
- "View The List" CTA
- "Explore Categories" CTA

### 📚 Book Collection

- Display available books in a card-based layout
- Book cover images
- Book title and author
- Book categories
- Publication year
- Rating information
- Book availability count

### 📖 Book Details

- Individual book details page
- Dynamic book routing
- Detailed information about selected books
- Easy navigation between the book collection and details

### ❤️ Listed Books

- Add books to a personal reading/listed collection
- View saved books separately
- Manage books that the user wants to read

### 📕 Read Books

- Dedicated section for books marked as read
- Helps users keep track of their reading progress

### 🔔 User Feedback

- Toast notifications for user actions
- Feedback when books are added or removed from lists

### 📱 Modern UI

- Clean and minimal interface
- Card-based book layout
- Modern typography
- Purple/blue primary color scheme
- Soft borders and subtle shadows
- Responsive layout for different screen sizes

### 📩 Footer

- BookVibe branding
- Website navigation links
- Book categories
- Contact information
- Newsletter subscription section
- Copyright information
- Privacy Policy and Terms links

---

## 🛠️ Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- JavaScript
- JSON
- React Context API
- React Toastify
- Vercel

---

## ⚙️ Main Concepts Implemented

This project demonstrates several important Next.js and React concepts:

- Next.js App Router
- Dynamic Routes
- Server Components
- Client Components
- TypeScript Interfaces
- Async/Await
- Fetch API
- Environment Variables
- React Context API
- State Management
- Dynamic Book Data
- Conditional Rendering
- Reusable Components
- Responsive UI Design

---

## 📂 Project Structure

```text
BookVibe/
│
├── public/
│   ├── booksData.json
│   └── images/
│
├── src/
│   └── app/
│       │
│       ├── components/
│       │   ├── Navbar/
│       │   ├── Footer/
│       │   └── ...
│       │
│       ├── context/
│       │   └── bookContext.tsx
│       │
│       ├── books/
│       │   └── page.tsx
│       │
│       ├── book/
│       │   └── [id]/
│       │       └── page.tsx
│       │
│       ├── ListedBook/
│       │   └── page.tsx
│       │
│       ├── ReadBook/
│       │   └── page.tsx
│       │
│       ├── type.ts
│       ├── page.tsx
│       ├── layout.tsx
│       └── globals.css
│
├── .env.local
├── package.json
├── next.config.ts
├── tsconfig.json
└── README.md
