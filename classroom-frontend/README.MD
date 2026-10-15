# Classroom Frontend

A modern, feature-rich React admin dashboard for managing classroom operations. Built with TypeScript, Vite, Refine framework, and Tailwind CSS for a responsive and intuitive user experience.

## 🚀 Tech Stack

- **Runtime:** Node.js
- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite 6
- **Admin Framework:** Refine 5.0
- **Routing:** React Router
- **Styling:** Tailwind CSS + Radix UI
- **UI Components:** Custom Radix UI-based component library
- **Form Management:** React Hook Form + Zod validation
- **HTTP Client:** Axios
- **File Upload:** Cloudinary
- **Development:** ESLint, TypeScript strict mode

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js 18+ and npm or yarn
- Git
- A running instance of the classroom backend (see backend README)

## 🔧 Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd classroom-frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   
   Create a `.env` file in the root directory with the following variables:
   ```env
   # Backend API Configuration
   VITE_BACKEND_BASE_URL=http://localhost:8000/api/
   
   # Cloudinary Image Upload
   VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
   VITE_CLOUDINARY_UPLOAD_PRESET=your_upload_preset
   VITE_CLOUDINARY_UPLOAD_URL=https://api.cloudinary.com/v1_1/your_cloud_name/image/upload
   ```

   **Environment Variables Guide:**
   - `VITE_BACKEND_BASE_URL`: Backend API URL (must match your backend's address)
   - `VITE_CLOUDINARY_CLOUD_NAME`: Your Cloudinary account cloud name
   - `VITE_CLOUDINARY_UPLOAD_PRESET`: Cloudinary upload preset for image uploads
   - `VITE_CLOUDINARY_UPLOAD_URL`: Full Cloudinary upload endpoint

   **Setting up Cloudinary (free):**
   1. Sign up at [Cloudinary](https://cloudinary.com)
   2. Go to your dashboard and find your Cloud Name
   3. Create an unsigned upload preset in Settings > Upload
   4. Add these values to your `.env` file

## 🏃 Running the Application

### Development Mode
Start the development server with hot module replacement:
```bash
npm run dev
```
The application will open at `http://localhost:5173`

### Production Build
Build the application for production:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

## 📁 Project Structure

```
classroom-frontend/
├── src/
│   ├── App.tsx                 # Main application component
│   ├── index.tsx               # React entry point
│   ├── App.css                 # Global styles
│   ├── vite-env.d.ts          # Vite environment type definitions
│   ├── components/
│   │   ├── upload-widget.tsx   # File upload component
│   │   ├── refine-ui/          # Custom Refine framework components
│   │   │   ├── buttons/        # Reusable button components
│   │   │   ├── data-table/     # Advanced data table with filtering/sorting
│   │   │   ├── form/           # Form components (sign-in, sign-up, etc.)
│   │   │   ├── layout/         # Layout components (header, sidebar, etc.)
│   │   │   ├── notification/   # Toast and notification components
│   │   │   ├── theme/          # Theme provider and selector
│   │   │   └── views/          # Refine view components (list, create, edit)
│   │   └── ui/                 # Radix UI component library
│   │       ├── accordion.tsx
│   │       ├── alert.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── checkbox.tsx
│   │       ├── dialog.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── form.tsx
│   │       ├── input.tsx
│   │       ├── select.tsx
│   │       ├── table.tsx
│   │       ├── tabs.tsx
│   │       └── [other UI components...]
│   ├── pages/
│   │   ├── dashboard.tsx       # Dashboard home page
│   │   ├── users/              # User management pages
│   │   ├── classes/            # Class management
│   │   │   ├── list.tsx
│   │   │   └── create.tsx
│   │   ├── subjects/           # Subject management
│   │   │   ├── list.tsx
│   │   │   └── create.tsx
│   │   ├── activities/         # Activity management
│   │   └── departments/        # Department management
│   ├── providers/
│   │   └── data.ts             # Refine data provider configuration
│   ├── hooks/
│   │   └── use-mobile.ts       # Mobile responsiveness hook
│   ├── lib/
│   │   ├── utils.ts            # Utility functions
│   │   └── schema.ts           # Validation schemas (Zod)
│   ├── constants/
│   │   ├── index.ts            # App constants
│   │   └── mock-data.ts        # Mock data for development
│   └── types/
│       └── index.ts            # TypeScript type definitions
├── public/                     # Static assets
├── index.html                  # HTML entry point
├── vite.config.ts             # Vite configuration
├── tsconfig.json              # TypeScript configuration
├── tailwind.config.ts         # Tailwind CSS configuration
├── components.json            # Refine CLI configuration
└── package.json               # Project dependencies
```

## 🎯 Main Features

### Dashboard
- Overview of classroom activities and statistics
- Quick navigation to all management modules
- Real-time data updates

### User Management
- View, create, edit, and delete users
- User role assignment
- Search and filtering capabilities

### Class Management
- Create and manage classes
- Assign subjects and teachers
- Class schedule management

### Subject Management
- Add and manage subjects
- Assign to classes
- Subject description and metadata

### Advanced Features
- **Data Table:** Sortable and filterable data tables with pagination
- **File Upload:** Cloudinary integration for image uploads
- **Authentication:** Secure user authentication via Better Auth
- **Theme Switching:** Light/dark mode support
- **Responsive Design:** Mobile-first responsive layout
- **Form Validation:** Client-side validation with error handling
- **Notifications:** Toast notifications for user feedback

## 🔌 API Integration

The frontend communicates with the backend through REST API endpoints. The base URL is configured in `.env`:

```typescript
VITE_BACKEND_BASE_URL=http://localhost:8000/api/
```

### Example API Calls

**Fetch subjects:**
```typescript
GET http://localhost:8000/api/subjects
```

**Create a new class:**
```typescript
POST http://localhost:8000/api/classes
```

All requests are handled through the Refine data provider configured in `src/providers/data.ts`.

## 🎨 Theming

The application includes a theme system supporting light and dark modes. Theme configuration is in:
- `src/components/refine-ui/theme/theme-provider.tsx` - Theme context and provider
- `src/components/refine-ui/theme/theme-select.tsx` - Theme selector component
- `tailwind.config.ts` - Tailwind CSS color configuration

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |
| `npm run type-check` | Check TypeScript types |

## 🚨 Troubleshooting

### Backend Connection Issues
- Verify `VITE_BACKEND_BASE_URL` in `.env` is correct
- Ensure the backend server is running (`npm run dev` in backend folder)
- Check browser console for CORS errors
- Verify backend CORS is configured to accept frontend URL

### Cloudinary Upload Issues
- Verify all `VITE_CLOUDINARY_*` variables are set correctly
- Check that the upload preset exists and is unsigned
- Ensure your Cloudinary account is active

### Styling Issues
- Run `npm install` to ensure Tailwind CSS is properly installed
- Clear browser cache and rebuild: `npm run build`
- Check that `tailwind.config.ts` includes all necessary template paths

### Port Already in Use
The dev server defaults to port 5173. To use a different port:
```bash
npm run dev -- --port 3000
```

## 🧪 Development Workflow

1. **Start the backend:** Open a terminal and run `npm run dev` in the `classroom-backend` folder
2. **Start the frontend:** Open another terminal and run `npm run dev` in this folder
3. **Edit components:** Changes will automatically reload in the browser (HMR)
4. **Test API calls:** Check browser Network tab and console for debugging
5. **Validate types:** Run `npm run type-check` to catch TypeScript errors

## 📚 Component Library

The application uses a comprehensive component library built on Radix UI:

```tsx
// Examples of available components
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Dialog } from "@/components/ui/dialog"
import { Table } from "@/components/ui/table"
import { Form } from "@/components/ui/form"
```

All components are in `src/components/ui/` and can be imported and used throughout the application.

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Docker Support
A Dockerfile is included for containerized deployment:
```bash
docker build -t classroom-frontend .
docker run -p 3000:80 classroom-frontend
```

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Refine Documentation](https://refine.dev/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Radix UI Documentation](https://www.radix-ui.com/docs)
- [React Hook Form](https://react-hook-form.com)

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/amazing-feature`
2. Make your changes and ensure TypeScript types are correct
3. Run linter: `npm run lint`
4. Commit your changes: `git commit -m 'Add amazing feature'`
5. Push to the branch: `git push origin feature/amazing-feature`
6. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.
