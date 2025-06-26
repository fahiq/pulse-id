# UI/UX Assignment – Pulse iD

This project was built as part of a technical assignment for a Lead UI/UX Front-End position at **Pulse iD**. The task involved creating an interactive, responsive, and visually appealing interface to demonstrate design thinking, component architecture, video handling, and front-end engineering capability.

---

## 🚀 Live Demo

👉 [View Live Project]([https://your-vercel-url.vercel.app](https://pulse-9s0slzb40-fahiqs-projects.vercel.app/))  
(*Replace with your actual deployed Vercel URL*)

---

## 📌 Objective

- Develop an interactive and mobile-responsive UI using **Next.js**
- Showcase a **3D rotating carousel** with video cards
- Play videos from the local `/public/videos` folder
- Apply **gradient overlays**, SCSS styling, and interaction design
- Ensure clean layout, transitions, and attention to detail

---

## ✨ Highlights

- 🔁 3D Carousel with infinite swipe/drag support
- 🎥 Local `.mp4` video playback on center card
- 💅 Styled using custom **SCSS**, no utility libraries
- 📱 Responsive design with gesture support (`react-swipeable`)
- 🎨 Gradient overlays and dynamic content visibility
- 🧠 Clean component separation (carousel, card, controls)

---

## 🛠 Tech Stack

- [Next.js 13+](https://nextjs.org/)
- [React 18](https://react.dev/)
- SCSS Modules
- Local asset management (`/public/videos`)
- [react-swipeable](https://www.npmjs.com/package/react-swipeable)

---

## 📂 Project Structure

pulse-id/
├── public/
│ └── videos/ # MP4 files used in the carousel
├── components/
│ └── Carousel3D.jsx # Main carousel component
├── styles/
│ └── common.scss # All global and component styles
├── pages/ or app/ # App routing & main entry
├── README.md



---

## 🧪 How to Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/fahiq/pulse-id.git
cd pulse-id.

Install Dependencies

npm install

Run the Development Server

npm run dev

Visit http://localhost:3000 to view the project.
