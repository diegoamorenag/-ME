# ⭐ **Portfolio App – MVP Specification**

## 🎯 **Goal**

## FRONTEND

Build a professional, modern, minimalistic portfolio website that presents:

- Projects
- Education
- Experience
- Tech Stack
- Personal Introduction
- Contact Form

The site should feature smooth navigation, a clean aesthetic, and light/subtle animations.

**Visual Style Guidelines**

- Modern, spacious layout
- Light or Dark Mode (optional for MVP)
- Subtle micro-interactions
- Limited, cohesive color palette
- Strong, readable typography

---

# 🏠 **1. Home Screen**

**Purpose:** Provide a strong, memorable first impression.

**Core Elements**

- Full-width hero section with:

  - Name: **“Diego Amorena – Full Stack Engineer”**
  - A short tagline, e.g.:

    > “I build end-to-end systems with React, .NET, Python, Docker, and more.”

- Optional profile photo/avatar
- Primary call-to-action buttons:

  - **View Projects**
  - **Contact Me**

---

# 🙋‍♂️ **2. About Me**

**Purpose:** Briefly communicate your profile and professional personality.

**Core Elements**

- A short introductory paragraph
- Key highlights:

  - Full-Stack Developer based in Montevideo, Uruguay
  - Experience with React, .NET, Python, Docker, PostgreSQL, etc.
  - Interests: AI/LLMs, backend systems, educational technology

- Optional: **Download CV** button

---

# 🧰 **3. Tech Stack**

**Purpose:** Display technologies used across your career in a structured and readable way.

**Core Elements**

Group technologies visually (e.g., badge grid):

- **Frontend:** React, JavaScript, TypeScript, HTML5, CSS3
- **Backend:** C#, .NET, Python, Java
- **Databases:** PostgreSQL, MySQL, MongoDB
- **DevOps:** Docker, Git
- **Tools:** Figma, Shell, Genexus

**Optional Enhancements**

- Hover effects
- Category filters

---

# 🧪 **4. Projects**

**Purpose:** Present your key work in the form of polished project cards.

**Each Project Card Includes:**

- Project title
- Short description (1–2 sentences)
- Technology tags (React, .NET, Llama, Docker, etc.)
- Thumbnail or placeholder image
- Optional buttons:

  - **Live Demo**
  - **GitHub Repo**

---

# 🎓 **5. Education**

**Purpose:** Communicate your academic background clearly and professionally.

**For Each Education Item:**

- Institution name
- Degree title
- Completion or expected graduation date
- Optional thumbnail or logo

**Current Education List**

- **Computer Systems Analyst – Facultad de Ingeniería (UDELAR)**
  Completed 2025

- **Computer Science Degree – Facultad de Ingeniería (UDELAR)**
  Expected July 2025

**Optional Timeline Format**

```
2022–2025 → Computer Systems Analyst (UDELAR)
2021–2025 → Computer Science (UDELAR)
```

---

# 💼 **6. Experience**

**Purpose:** Summarize your professional experience with clarity.

**For Each Role:**

- Company name
- Position
- Dates
- Bullet points outlining responsibilities and key achievements

Use **generic components** so items can be reused or scaled.

---

# ✉️ **7. Contact Form**

**Purpose:** Allow visitors to easily reach you.

**Core Fields**

- Name
- Email
- Message
- Submit button

**Behavior**

- Basic validation
- Sends data through:

  - EmailJS, Resend, Formspree, or a custom API

**Optional**

- Social icons (GitHub, LinkedIn)

---

# 🧭 **8. Navigation**

**Structure**

- Home

  - Includes hero, About Me, and Tech Stack

- Projects
- Education
- Experience
- Contact

**Visual Behavior**

- Sticky on scroll
- Slight blur or translucency effect

---

# 🎨 **9. Visual Standards (MVP)**

- Rounded corners (8–12px)
- Soft transitions on hover
- Soft neutral palette + one accent color (e.g., **#6366F1 Indigo**)
- Font pairing: **Inter + Space Grotesk**

---

# 📦 **10. Implementation Stack (React)**

- React + pnpm
- Tailwind CSS
- Framer Motion (animations)
- Shadcn UI (component library)
