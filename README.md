# 🍽️ SmartCanteen – Brainware University Canteen Ordering App

**SmartCanteen** is a smart, intuitive web and mobile application developed exclusively for the students, faculty, and staff of **Brainware University**. It brings the entire campus canteen experience online—allowing users to order meals, snacks, and beverages seamlessly via web or Android app.

No more long queues or confusion—SmartCanteen makes food ordering fast, simple, and contactless.

---

## 📱 Platforms

- 🌐 **Web App** – https://smart-canteens.vercel.app/
- 🤖 **Android App (APK)** – Smooth and optimized for mobile ordering

---

## 🚀 Features

### For Students & Staff:
- 🔍 **Browse Menu** – View real-time menu items with prices and availability
- 🛒 **Order Food** – Place dine-in or takeaway orders directly from your device
- 💵 **Digital Payments** – Pay easily via wallet, UPI, or other methods
- ⏱️ **Track Orders** – Get real-time updates from placement to pickup
- 🧾 **View Order History** – Check previous orders and transactions
- 🔔 **Notifications** – Instant alerts when your food is ready

### For Canteen Admins:
- 📦 **Manage Orders** – Accept, prepare, and mark orders as ready
- 🧑‍🍳 **Update Menu** – Add, remove, or update menu items in real-time
- 📊 **View Reports** – Daily summary of orders and payments
- 📱 **Serve Better** – Improve efficiency and reduce waiting times

---

## 🧑‍💻 Tech Stack

- **Frontend:** React.js, HTML5, CSS3
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT-based login
- **Mobile App:** Android (Java/Kotlin with Android Studio)
- **Payment Gateway:** UPI / Razorpay Integration 
- **Hosting:** Vercel (Web), APK (Manual install)

---

## 🔧 Installation Guide

### 📁 Frok the repo and  Clone the Repository 

```bash
git clone https://github.com/skrijwan100/SmartCanteens.git
cd SmartCanteens
npm i
```
### For backend 'npx nodemon' and for client 'npm run dev'

| **Feature**             | **Zero Address**               | **One Address**                       | **Two Address**                       | **Three Address**                            |
| ----------------------- | ------------------------------ | ------------------------------------- | ------------------------------------- | -------------------------------------------- |
| **Definition**          | No operand address             | One operand address                   | Two operand addresses                 | Three operand addresses                      |
| **Architecture Type**   | Stack-based                    | Accumulator-based                     | Register-memory based                 | Register-register based                      |
| **Operand Location**    | Implicitly from stack          | One from memory, one from accumulator | Typically one source, one destination | Two sources and one destination              |
| **Instruction Example** | `ADD` (stack top values)       | `ADD B`                               | `ADD A, B` (A ← A + B)                | `ADD A, B, C` (A ← B + C)                    |
| **Instruction Size**    | Smallest                       | Small                                 | Moderate                              | Largest                                      |
| **Hardware Required**   | Stack                          | Accumulator                           | Register and memory                   | More registers                               |
| **Complexity**          | Simple for postfix expressions | Simple                                | Moderate                              | More flexible but complex                    |
| **Efficiency**          | Good for stack operations      | Efficient for simple operations       | Reduces number of instructions        | Fastest due to reduced memory access         |
| **Used In**             | HP calculators, RPN evaluators | Early computers                       | Some CISC architectures               | Most modern RISC processors                  |
| **Pros**                | Very short instructions        | Simple hardware                       | Less instruction count than 1-address | Fastest execution, fewer memory accesses     |
| **Cons**                | Needs stack management         | Heavy accumulator usage               | Limited destination flexibility       | Requires more instruction bits and registers |
