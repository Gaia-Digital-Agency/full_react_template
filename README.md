# WebDev Agency Template

A modern, production-ready branding website template built with React, TypeScript, Vite, and Tailwind CSS. Perfect as a starter template for web development agencies, digital studios, or any service-based business.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18.2-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC.svg)
![Vite](https://img.shields.io/badge/Vite-5.1-646CFF.svg)

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [Customization Guide](#-customization-guide)
- [Pages Overview](#-pages-overview)
- [Components](#-components)
- [Styling Guide](#-styling-guide)
- [Database Setup (PostgreSQL)](#️-database-setup-postgresql)
- [Deployment](#-deployment)
  - [Google Cloud Platform (GCP)](#google-cloud-platform-gcp)
  - [Digital Ocean](#digital-ocean)
- [Browser Support](#-browser-support)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

- **Modern Stack**: React 18 + TypeScript + Vite for lightning-fast development
- **Responsive Design**: Mobile-first approach, works on Desktop, Tablet, Phone (iOS & Android)
- **Cross-Browser Compatible**: Tested on Chrome, Safari, Firefox
- **Dark Mode Support**: System preference detection + manual toggle ready
- **SEO Optimized**: Meta tags, Open Graph, Twitter Cards configured
- **Accessibility**: WCAG compliant, keyboard navigation, skip links, ARIA labels
- **Animations**: Smooth Framer Motion animations and transitions
- **Performance**: Code splitting, lazy loading, optimized assets
- **Type Safety**: Full TypeScript coverage with comprehensive types
- **SCSS Support**: Variables, mixins, and auto-imports configured
- **Visitor Tracking**: Location, visitor count, and live time in footer
- **Form Validation**: Contact form with client-side validation
- **Component Library**: Reusable Button, Card, and layout components

## 🛠 Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18.2.0 | UI Framework |
| TypeScript | 5.2.2 | Type Safety |
| Vite | 5.1.0 | Build Tool & Dev Server |
| Tailwind CSS | 3.4.1 | Utility-First CSS |
| SCSS/Sass | 1.71.0 | CSS Preprocessing |
| Framer Motion | 11.0.0 | Animations |
| React Router | 6.22.0 | Client-Side Routing |
| Lucide React | 0.344.0 | Icon Library |

## 📁 Project Structure

```
webdev-template/
├── public/                     # Static assets
│   ├── images/                 # Image files
│   ├── favicon.svg             # Site favicon
│   └── robots.txt              # SEO robots file
│
├── src/
│   ├── components/             # Reusable components
│   │   ├── common/             # Shared UI components
│   │   │   ├── Button.tsx      # Button with variants
│   │   │   └── Card.tsx        # Card with subcomponents
│   │   │
│   │   ├── layout/             # Layout components
│   │   │   ├── Navbar.tsx      # Responsive navigation
│   │   │   └── Footer.tsx      # Footer with visitor info
│   │   │
│   │   └── sections/           # Page section components
│   │       ├── Hero.tsx        # Hero banner
│   │       └── Services.tsx    # Services grid
│   │
│   ├── hooks/                  # Custom React hooks
│   │   └── useVisitorInfo.ts   # Geolocation & visitor tracking
│   │
│   ├── pages/                  # Page components
│   │   ├── Home.tsx            # Homepage
│   │   ├── About.tsx           # About page
│   │   ├── Products.tsx        # Products/Services page
│   │   └── Contact.tsx         # Contact page with form
│   │
│   ├── styles/                 # SCSS styles
│   │   ├── globals.scss        # Global styles & CSS variables
│   │   └── _variables.scss     # SCSS variables
│   │
│   ├── types/                  # TypeScript types
│   │   └── index.ts            # Type definitions
│   │
│   ├── utils/                  # Utility functions
│   │   └── helpers.ts          # Helper functions (cn, formatDate, etc.)
│   │
│   ├── App.tsx                 # Root component with routes
│   ├── main.tsx                # Application entry point
│   └── index.css               # CSS entry (Tailwind imports)
│
├── index.html                  # HTML template
├── package.json                # Dependencies & scripts
├── tsconfig.json               # TypeScript config
├── vite.config.ts              # Vite configuration
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
└── README.md                   # This file
```

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher (or yarn/pnpm)

### Installation

1. **Clone or download the template**
   ```bash
   # If using git
   git clone <repository-url> my-project
   cd my-project
   
   # Or copy the folder directly
   cp -r webdev-template my-project
   cd my-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

## 📜 Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `dev` | `npm run dev` | Start development server with HMR |
| `build` | `npm run build` | Build for production |
| `preview` | `npm run preview` | Preview production build locally |
| `lint` | `npm run lint` | Run ESLint (if configured) |
| `type-check` | `npm run type-check` | Run TypeScript type checking |

### Development Server
```bash
npm run dev
# Starts at http://localhost:5173
# Hot Module Replacement (HMR) enabled
# Auto-opens browser
```

### Production Build
```bash
npm run build
# Output: dist/ folder
# Minified, tree-shaken, optimized
```

## 🎨 Customization Guide

### 1. Update Company Information

**File: `src/components/layout/Navbar.tsx`**
```tsx
// Change company name in logo
<span className="text-xl font-display font-bold">
  YourCompany  {/* ← Update this */}
</span>
```

**File: `src/components/layout/Footer.tsx`**
```tsx
// Update footer company info
<p className="font-display font-bold text-2xl">
  YourCompany  {/* ← Update this */}
</p>
```

### 2. Update Colors

**File: `tailwind.config.js`**
```javascript
colors: {
  primary: {
    50: '#f0fdfa',   // Lightest
    500: '#1ea89e',  // Main brand color ← Update
    600: '#159187',  // Hover state
    900: '#0c4a45',  // Darkest
  },
  accent: {
    50: '#fff7ed',
    500: '#fe4f11',  // CTA color ← Update
    600: '#e5470f',
  },
}
```

### 3. Update Fonts

**File: `index.html`**
```html
<!-- Update Google Fonts link -->
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;500;600;700&display=swap" rel="stylesheet">
```

**File: `tailwind.config.js`**
```javascript
fontFamily: {
  display: ['Your Display Font', 'system-ui', 'sans-serif'],
  body: ['Your Body Font', 'system-ui', 'sans-serif'],
}
```

### 4. Update Content

Each page has data objects at the top of the file that you can modify:

- **Home.tsx**: `SERVICES` array for services section
- **About.tsx**: `TIMELINE`, `PORTFOLIO`, `CLIENTS`, `VALUES` arrays
- **Products.tsx**: `WORDPRESS_FEATURES`, `REACT_FEATURES`, `FAQS` arrays
- **Contact.tsx**: `CONTACT_INFO`, `SOCIAL_LINKS` arrays

### 5. Update Images

Replace placeholder images in:
- `public/images/` - Static images
- Update Unsplash URLs in page components with your own images

## 📄 Pages Overview

### Home Page (`/`)
- Hero section with animated text and CTAs
- Services grid showcasing offerings
- Why Choose Us section with stats
- Call-to-action banner

### About Page (`/about`)
- Company history timeline (vertically animated)
- Portfolio/Work grid with hover effects
- Client logos section
- Company values with icons

### Products Page (`/products`)
- Tabbed interface (WordPress vs React)
- Feature comparison lists
- Pricing information
- FAQ accordion

### Contact Page (`/contact`)
- Contact form with validation
- Company address and map placeholder
- Email and phone links
- Office hours
- Social media links

## 🧩 Components

### Button Component
```tsx
import Button from '@/components/common/Button';

// Variants: primary, secondary, accent, ghost
<Button variant="primary" size="lg" icon={<ArrowRight />}>
  Get Started
</Button>

// Loading state
<Button loading>Processing...</Button>

// Full width
<Button fullWidth>Submit</Button>
```

### Card Component
```tsx
import Card, { CardHeader, CardTitle, CardContent } from '@/components/common/Card';

<Card hoverable>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
</Card>
```

### Custom Hooks

**useVisitorInfo**
```tsx
import { useVisitorInfo } from '@/hooks/useVisitorInfo';

const { city, country, currentTime, visitorCount, isLoading } = useVisitorInfo();
```

## 🎨 Styling Guide

### Tailwind Classes
This template uses Tailwind CSS. Common custom classes:

```css
/* Buttons */
.btn-primary    /* Primary solid button */
.btn-secondary  /* Outline button */
.btn-accent     /* Accent color button */

/* Cards */
.card           /* Basic card */
.card-hover     /* Card with hover lift */

/* Typography */
.section-heading    /* Section title */
.section-subheading /* Section subtitle */
.gradient-text      /* Gradient text effect */

/* Forms */
.input-field    /* Form inputs */
```

### SCSS Variables
Located in `src/styles/_variables.scss`:

```scss
// Colors
$primary: #1ea89e;
$accent: #fe4f11;

// Typography
$font-display: 'Sora', sans-serif;
$font-body: 'DM Sans', sans-serif;

// Spacing
$section-padding: 5rem;
$container-padding: 1.5rem;
```

### Responsive Breakpoints
```javascript
// tailwind.config.js
screens: {
  'xs': '375px',   // Small phones
  'sm': '640px',   // Large phones
  'md': '768px',   // Tablets
  'lg': '1024px',  // Laptops
  'xl': '1280px',  // Desktops
  '2xl': '1536px', // Large screens
}
```

## 🗄️ Database Setup (PostgreSQL)

This template is designed to work with PostgreSQL as the primary database.

### Local Development

1. **Install PostgreSQL**
   ```bash
   # macOS (Homebrew)
   brew install postgresql@16
   brew services start postgresql@16

   # Ubuntu/Debian
   sudo apt update
   sudo apt install postgresql postgresql-contrib
   sudo systemctl start postgresql

   # Windows - Download installer from https://www.postgresql.org/download/windows/
   ```

2. **Create Database**
   ```bash
   # Connect to PostgreSQL
   psql -U postgres

   # Create database and user
   CREATE DATABASE myapp_db;
   CREATE USER myapp_user WITH ENCRYPTED PASSWORD 'your_secure_password';
   GRANT ALL PRIVILEGES ON DATABASE myapp_db TO myapp_user;
   \q
   ```

3. **Configure Environment Variables**
   ```env
   # .env
   DATABASE_URL=postgresql://myapp_user:your_secure_password@localhost:5432/myapp_db
   ```

### PostgreSQL Best Practices

- Use connection pooling (e.g., PgBouncer) for production
- Enable SSL connections in production environments
- Regular backups with `pg_dump` or managed backup solutions
- Use migrations for schema changes (e.g., Prisma, Drizzle, or node-pg-migrate)

## 🚢 Deployment

### Google Cloud Platform (GCP)

#### Option 1: Cloud Run (Recommended for containers)

1. **Install and configure gcloud CLI**
   ```bash
   # Install gcloud CLI
   curl https://sdk.cloud.google.com | bash
   gcloud init
   gcloud auth login
   ```

2. **Set up Cloud SQL (PostgreSQL)**
   ```bash
   # Create Cloud SQL instance
   gcloud sql instances create myapp-db \
     --database-version=POSTGRES_16 \
     --tier=db-f1-micro \
     --region=us-central1

   # Create database
   gcloud sql databases create myapp_db --instance=myapp-db

   # Create user
   gcloud sql users create myapp_user \
     --instance=myapp-db \
     --password=your_secure_password
   ```

3. **Build and deploy to Cloud Run**
   ```bash
   # Build container
   gcloud builds submit --tag gcr.io/PROJECT_ID/myapp

   # Deploy to Cloud Run
   gcloud run deploy myapp \
     --image gcr.io/PROJECT_ID/myapp \
     --platform managed \
     --region us-central1 \
     --add-cloudsql-instances PROJECT_ID:us-central1:myapp-db \
     --set-env-vars DATABASE_URL="postgresql://myapp_user:password@/myapp_db?host=/cloudsql/PROJECT_ID:us-central1:myapp-db"
   ```

#### Option 2: Compute Engine (VM-based)

1. **Create VM instance**
   ```bash
   gcloud compute instances create myapp-server \
     --machine-type=e2-small \
     --zone=us-central1-a \
     --image-family=ubuntu-2204-lts \
     --image-project=ubuntu-os-cloud \
     --boot-disk-size=20GB
   ```

2. **SSH and setup**
   ```bash
   gcloud compute ssh myapp-server --zone=us-central1-a

   # Install Node.js, PostgreSQL, and Nginx
   sudo apt update
   sudo apt install -y nodejs npm postgresql nginx
   ```

3. **Configure Nginx as reverse proxy**
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

#### Option 3: App Engine

1. **Create `app.yaml`**
   ```yaml
   runtime: nodejs18

   env_variables:
     DATABASE_URL: "your-cloud-sql-connection-string"

   beta_settings:
     cloud_sql_instances: "PROJECT_ID:REGION:INSTANCE_NAME"
   ```

2. **Deploy**
   ```bash
   gcloud app deploy
   ```

### Digital Ocean

#### Option 1: App Platform (Recommended)

1. **Create `app.yaml` for DO App Platform**
   ```yaml
   name: myapp
   services:
     - name: web
       github:
         repo: your-username/your-repo
         branch: main
       build_command: npm run build
       run_command: npm start
       envs:
         - key: DATABASE_URL
           scope: RUN_TIME
           value: ${db.DATABASE_URL}

   databases:
     - name: db
       engine: PG
       version: "16"
   ```

2. **Deploy via DO Console or CLI**
   ```bash
   # Install doctl CLI
   brew install doctl  # macOS
   doctl auth init

   # Create app
   doctl apps create --spec app.yaml
   ```

#### Option 2: Droplet (VM-based)

1. **Create Droplet**
   ```bash
   doctl compute droplet create myapp-server \
     --size s-1vcpu-1gb \
     --image ubuntu-22-04-x64 \
     --region nyc1
   ```

2. **SSH and setup**
   ```bash
   ssh root@your-droplet-ip

   # Install dependencies
   apt update
   apt install -y nodejs npm postgresql nginx certbot python3-certbot-nginx

   # Setup PostgreSQL
   sudo -u postgres createuser --interactive
   sudo -u postgres createdb myapp_db
   ```

3. **Setup PM2 for process management**
   ```bash
   npm install -g pm2
   pm2 start npm --name "myapp" -- start
   pm2 startup
   pm2 save
   ```

4. **Configure Nginx with SSL**
   ```bash
   # Get SSL certificate
   certbot --nginx -d your-domain.com
   ```

#### Option 3: Managed Database + Droplet

1. **Create Managed PostgreSQL**
   ```bash
   doctl databases create myapp-db \
     --engine pg \
     --version 16 \
     --size db-s-1vcpu-1gb \
     --region nyc1 \
     --num-nodes 1
   ```

2. **Get connection string**
   ```bash
   doctl databases connection myapp-db --format Host,Port,User,Password,Database
   ```

3. **Configure your app with the connection string**
   ```env
   DATABASE_URL=postgresql://user:password@host:port/database?sslmode=require
   ```

### Docker Deployment

```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Production Checklist

- [ ] Enable SSL/TLS for database connections
- [ ] Set up database backups (automated daily backups)
- [ ] Configure connection pooling for PostgreSQL
- [ ] Set up monitoring and alerting (Cloud Monitoring, DO Monitoring)
- [ ] Configure firewall rules (allow only necessary ports)
- [ ] Use secrets manager for sensitive environment variables
- [ ] Set up CI/CD pipeline for automated deployments

## 🌐 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | Last 2 versions |
| Firefox | Last 2 versions |
| Safari | Last 2 versions |
| Edge | Last 2 versions |
| iOS Safari | 14+ |
| Chrome Android | Last 2 versions |

## 📱 Mobile Support

- **Responsive Design**: Fluid layouts that adapt from 320px to 2560px+
- **Touch Optimized**: Large tap targets (44px minimum)
- **Safe Areas**: Support for notched devices (iPhone X+)
- **iOS Compatibility**: -webkit prefixes where needed
- **Android Compatibility**: Material-style interactions

## 🔧 Environment Variables

Create `.env` file for environment-specific settings:

```env
# Database (PostgreSQL)
DATABASE_URL=postgresql://user:password@localhost:5432/myapp_db
# For GCP Cloud SQL
# DATABASE_URL=postgresql://user:password@/myapp_db?host=/cloudsql/PROJECT_ID:REGION:INSTANCE
# For Digital Ocean Managed DB
# DATABASE_URL=postgresql://user:password@host:port/database?sslmode=require

# API Endpoints (if needed)
VITE_API_URL=https://api.yoursite.com

# Analytics (if using)
VITE_GA_ID=G-XXXXXXXXXX

# Contact Form API
VITE_FORM_ENDPOINT=https://formspree.io/f/xxxxx
```

Access in code:
```tsx
const apiUrl = import.meta.env.VITE_API_URL;
```

For server-side database access:
```tsx
const dbUrl = process.env.DATABASE_URL;
```


## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Credits

- **Design Inspiration**: [Gaiada.com](https://gaiada.com)
- **Icons**: [Lucide Icons](https://lucide.dev)
- **Fonts**: [Google Fonts](https://fonts.google.com) (Sora, DM Sans, JetBrains Mono)
- **Images**: [Unsplash](https://unsplash.com)

