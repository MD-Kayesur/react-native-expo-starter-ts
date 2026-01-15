# React Native Expo Starter with NativeWind

A starter template for React Native Expo projects with TypeScript, Redux Toolkit, Expo Router, NativeWind (Tailwind CSS), and Clerk Authentication.

## Features

- ✅ Expo Router (file-based routing)
- ✅ TypeScript
- ✅ Redux Toolkit
- ✅ NativeWind (Tailwind CSS for React Native)
- ✅ Clerk Authentication (Sign In, Sign Up, Email Verification)
- ✅ Protected Routes
- ✅ UI Components
- ✅ Custom Hooks
- ✅ Utilities

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
Create a `.env` file in the root directory and add your Clerk publishable key:
```
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_key_here
```

3. Start the development server:
```bash
npm start
```

3. Run on your device:
- Press `i` for iOS simulator
- Press `a` for Android emulator
- Scan QR code with Expo Go app

**Note:** The project is fully configured and ready to run. All dependencies, configurations (Metro, Babel, PostCSS, Tailwind), and project structure are set up correctly.

## Styling

This project uses **NativeWind** (Tailwind CSS for React Native). You can use Tailwind utility classes directly in your components:

```tsx
<View className="flex-1 p-5 bg-white">
  <Text className="text-2xl font-bold">Hello World</Text>
</View>
```

## Authentication

This project uses **Clerk** for authentication. The authentication flow includes:

- **Sign Up**: Email/password registration with email verification
- **Sign In**: Email/password authentication
- **Protected Routes**: App routes are automatically protected and redirect to sign-in if not authenticated
- **Auth Routes**: Auth routes redirect to home if already signed in

### Authentication Flow

1. Unauthenticated users are redirected to `/(auth)/sign-in`
2. After signing up, users receive an email verification code
3. After verification, users are automatically signed in and redirected to `/(app)`
4. Authenticated users can access all app routes
5. Sign out redirects back to the sign-in page

## Project Structure

- `app/` - Expo Router screens
  - `(auth)/` - Authentication screens (sign-in, sign-up)
    - `_layout.tsx` - Auth layout with redirect logic
  - `(app)/` - Main app screens (protected)
    - `_layout.tsx` - App layout with route protection
    - `index.tsx` - Home screen with auth state
  - `components/` - App-specific components
    - `SignOutButton.tsx` - Sign out button component
- `components/` - Reusable components
  - `ui/` - UI components (Button, Card, Input)
  - `shared/` - Shared components (Loading, Error)
- `constants/` - App constants
- `hooks/` - Custom React hooks
- `store/` - Redux store configuration
  - `slices/` - Redux slices
- `utils/` - Utility functions
- `assets/` - Images, fonts, etc.

## Available Scripts

- `npm start` - Start Expo development server
- `npm run android` - Run on Android
- `npm run ios` - Run on iOS
- `npm run web` - Run on web
