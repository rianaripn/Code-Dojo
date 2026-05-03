# ⛩️ Code-Dojo — Project Brief

> "Your digital dojo to master the art of code. Discover, filter, and collect sacred scrolls of knowledge without the overwhelm."

---

## 🎯 Problem

Beginner developers often find themselves trapped in "tutorial hell" and suffer from information overload. It is incredibly challenging to separate outdated tutorials from high-quality, level-appropriate resources among the millions scattered across the internet.

---

## 👤 Target User

Wandering developers (Ronin), computer science students, and career switchers who are focused on learning Full-Stack Web Development and need a highly curated, structured path to mastery.

---

## ⚔️ Fitur Utama (v1)

| Nama Fitur               | Deskripsi                                                                               |
| ------------------------ | --------------------------------------------------------------------------------------- |
| **The Training Grounds** | Curated catalog of resources grouped by tech stack (React Dojo, Node.js Dojo, CSS Dojo) |
| **Rank Filtering**       | Filter resources by rank: Kohai (Beginner), Senpai (Intermediate), Sensei (Advanced)    |
| **Jutsu Details**        | Dedicated detail page per resource — description, source link, estimated training time  |
| **Sacred Scrolls**       | Bookmark system via localStorage — no login required                                    |

---

## 🗺️ Route Structure

```
/                     → World Map (Home: search bar + dojo list + popular resources)
/dojo/:slug           → Dojo Page (all techniques in a specific tech stack)
/dojo/:slug?rank=kohai → Dojo Page + Rank Filter
/technique/:slug      → Technique Detail Page (resource detail)
/scrolls              → Sacred Scrolls (saved bookmarks via localStorage)
```

### Route Concepts Covered

| Route                    | React Router Concept         |
| ------------------------ | ---------------------------- |
| `/`                      | Static route                 |
| `/dojo/:slug`            | Dynamic route                |
| `/dojo/:slug?rank=kohai` | Dynamic route + Query params |
| `/technique/:slug`       | Dynamic route                |
| `/scrolls`               | Static route                 |

---

## 🧩 Reusable Components

| Component         | Alias          | vscode-browser:/383369f9-016e-4bed-9457-a78f4453cce2Deskripsi |
| ----------------- | -------------- | ------------------------------------------------------------- |
| `QuestBar`        | Navbar         | Main navigation — search bar + logo                           |
| `DojoCard`        | CategoryCard   | Visual card untuk tiap tech stack category                    |
| `ScrollCard`      | ResourceCard   | Card resource — title, rank badge, bookmark icon              |
| `RankSelect`      | FilterDropdown | Dropdown untuk manipulate `?rank=` query param                |
| `LoadingShuriken` | Loader         | Spinning pixel-art shuriken — loading state feedback          |

---

## 🛠️ Tech Stack (v1)

```
Frontend  : React.js + React Router v6
Styling   : Custom CSS (pixel-art / 8-bit aesthetic)
Data      : Static JSON (dummy data)
Bookmark  : localStorage
Deploy    : Vercel
```

---

## 📁 Folder Structure (Rencana)

```
code-dojo/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── QuestBar.jsx
│   │   ├── DojoCard.jsx
│   │   ├── ScrollCard.jsx
│   │   ├── RankSelect.jsx
│   │   └── LoadingShuriken.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── DojoPage.jsx
│   │   ├── TechniquePage.jsx
│   │   └── Scrolls.jsx
│   ├── data/
│   │   └── resources.json
│   ├── App.jsx
│   └── main.jsx
├── index.html
└── package.json
```

---

## 🚀 Future Plans (v2)

- [ ] Authentication system (JWT)
- [ ] Backend API (Node.js + Express.js)
- [ ] Database (MongoDB)
- [ ] User profile & progress tracking
- [ ] Community rating & review system
- [ ] Learning path / roadmap feature

---

## 📌 Notes

- v1 menggunakan static JSON sebagai data source — tidak butuh backend
- Bookmark disimpan di localStorage — tidak butuh authentication
- v2 akan upgrade ke full stack (Phase 3 roadmap)

---

_Brief ini dibuat sebagai reference sebelum development dimulai._
_Last updated: 2026_
