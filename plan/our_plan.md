# Master Plan: Economist Portfolio Website on GitHub Pages

**Author:** Siwat Teimtad  
**Focus:** Economic Analysis, Classical Insights & Strategic Decision Models  
**Status:** Approved for Implementation  

---

## 1. Specifications & Design Architecture

### 🎨 Visual & Typography
- **Theme:** Modern dark theme (deep obsidian `#0a0c10`, card surface `#121620`, elevated surface `#1a202c`, borders `#262d40`, accents in emerald `#00e599` and electric cyan `#38bdf8`).
- **Typography:** Google Fonts **JetBrains Mono** applied consistently across all headers, cards, text content, tables, and buttons.
- **Brand Asset:** [`black.png`](../black.png) used as the personal logo in the sticky navigation header and hero badge.

### 📐 Structural Layout
1. **Header & Navigation:**
   - Logo ([`black.png`](../black.png)) + Brand text ("Siwat Teimtad | Economist").
   - Navigation links: `Overview`, `Hazlitt's Lesson`, `Game Theory`, `About & Contact`.
   - Dynamic reading progress bar across the top of the viewport.
2. **Hero Section:**
   - Primary quote: **"Master Economics, the Simple Way."**
   - Subtitle: Clear, intuitive breakdowns of fundamental economic principles and strategic interactions.
   - Quick action buttons: `Read Hazlitt Analysis` and `Explore Game Theory`.
3. **Project 1: Key Concepts of *Economics in One Lesson* (Henry Hazlitt, 1946):**
   - **Requirement:** Comprehensive breakdown (**at least 1,000 words**).
   - **Content Coverage:**
     - The Central Lesson: Seen vs. Unseen consequences.
     - The Broken Window Fallacy and capital destruction.
     - Public works and the illusion of job creation via taxation.
     - Protective tariffs and consumer burden.
     - Price ceilings, floors, and artificial shortages.
     - Inflation as an invisible, regressive tax.
     - Modern relevance for contemporary policy.
4. **Project 2: Game Theory: The Strategic Architecture of Decision-Making:**
   - **Requirement:** Comprehensive breakdown (**at least 1,000 words**).
   - **Content Coverage:**
     - Foundations: Simultaneous vs. Sequential games, rationality assumptions.
     - The Prisoner's Dilemma and dominant strategy traps.
     - Nash Equilibrium and coordinating expectations.
     - Coordination games, Battle of the Sexes, and Stag Hunt.
     - Repeated games, discount factors, and Axelrod’s Tit-for-Tat tournament.
     - Information asymmetry and Mechanism Design.
   - **Interactive Component:** Dynamic 2x2 Prisoner's Dilemma matrix simulator allowing visitors to test player strategies interactively.
5. **About Me & Contact Section:**
   - Full Name: **Siwat Teimtad**
   - Direct Email: **dx@outlook.com** (with instant copy-to-clipboard button and `mailto:` link).
   - Profile summary detailing economic philosophy, analytical background, and research focus.
6. **Footer:**
   - Copyright notice, GitHub Pages deployment info, and back-to-top button.

---

## 2. File Architecture

```text
my_website/
├── black.png               # Existing logo image
├── index.html              # Main HTML markup and 1000+ word essays
├── style.css               # JetBrains Mono styling, dark mode variables, responsive layout
├── script.js               # Interactive matrix calculator, reading progress, copy email
└── plan/
    └── our_plan.md         # This master plan document
```

---

## 3. GitHub Pages Deployment Steps

### Step 1: Local Development & Verification
1. Create `index.html`, `style.css`, and `script.js` in `my_website/`.
2. Verify word counts programmatically to guarantee both essays are **>1,000 words**.
3. Verify asset links use relative paths (`./black.png`, `./style.css`, `./script.js`).

### Step 2: Initialize Git Repository
In PowerShell inside `C:\Users\Admin\Desktop\my_website`:
```powershell
git init
git add .
git commit -m "feat: complete economist portfolio with essays and interactive models"
git branch -M main
```

### Step 3: Create GitHub Repository & Push
1. Create a new repository on GitHub (e.g., `portfolio` or `<your-username>.github.io`) set to **Public**.
2. Connect and push your code:
```powershell
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

### Step 4: Configure GitHub Pages
1. Go to repository **Settings** -> **Pages** (under Code and automation).
2. Under **Build and deployment**:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
3. Click **Save**.

### Step 5: Verification
- Site will be available at: `https://<your-username>.github.io/<repo-name>/` (or `https://<your-username>.github.io/`).
- Test responsiveness across mobile, tablet, and desktop viewports.
