# 🔐 OTP Simulator – React Project

This is a simple **OTP (One Time Password) Input Simulator** built using **React.js**, often asked as a **common frontend interview question**.

The app simulates a user flow where:
- A user enters their **phone number**
- An OTP input screen is rendered
- User enters OTP digits into **individual input fields**
- Inputs automatically focus, validate, and move to the next field

---

## 🚀 Features

✅ Enter phone number with validation  
✅ Individual OTP input boxes (custom length)  
✅ Auto-focus to next input on key press  
✅ Move backward on backspace  
✅ Clean and reusable logic using `useRef` and `useState`  
✅ Keyboard navigation: Enter, Backspace, Arrow keys  
✅ Responsive with TailwindCSS (optional)

---

## 📁 Folder Structure


src/
├── components/
│ ├── PhoneNumber.jsx
│ └── Otp.jsx
├── App.jsx
├── main.jsx


---

## 📦 Technologies Used

- React (Hooks: `useState`, `useRef`, `useEffect`)
- React Router DOM
- Tailwind CSS (for styling)
- JavaScript (ES6+)
