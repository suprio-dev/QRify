# ⚡ QRify

### A minimal, temporary QR code generator built with JavaScript.

Generate a QR code instantly from any **text or URL**, keep it visible for 30 seconds, and regenerate it whenever needed.

**Live Demo:** [QRify](https://suprio-dev.github.io/QRify/?utm_source=chatgpt.com)

---

## ✨ Features

- Generate QR codes from text or URLs
- 30-second automatic QR expiry
- Regenerate the last QR code
- Clear generated QR code
- Visual countdown timer
- Responsive dark glassmorphism UI
- QR-friendly white background for reliable scanning

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Structure |
| Tailwind CSS | Styling & responsive UI |
| JavaScript | Application logic |
| QRCode.js | QR generation |

---

## 🔄 How It Works

```text
Enter Text / URL
       ↓
   Generate
       ↓
   QRCode.js
       ↓
   QR Created
       ↓
   30s Timer
       ↓
  QR Automatically
      Clears
```

The QR is placed inside a **white wrapper** to maintain strong contrast between the QR modules and the dark interface, making it easier for camera scanners to detect the QR boundaries.

---

## ⏱️ Temporary QR System

Each generated QR remains active for **30 seconds**.

A new timer is started whenever a QR is generated or regenerated, while the previous `setInterval()` is cleared first to prevent multiple timers from running simultaneously.

```js
clearInterval(timerId);
```

---

## 🎯 Why I Built It

This project was built to practice working with:

- DOM manipulation
- Event listeners
- User input
- Third-party JavaScript libraries
- Timers with `setInterval()`
- `clearInterval()`
- Dynamic DOM updates
- Responsive UI design

---

## 🚀 Run Locally

```bash
git clone https://github.com/suprio-dev/QRify.git
cd QRify
```

Open `index.html` in your browser.

No build tools or installation required.

---

## 📌 Project Status

**Completed — v1.0**

More features may be added as the project evolves.