# React Native Expo Starter with NativeWind

A starter template for React Native Expo projects with TypeScript, Redux Toolkit, Expo Router, and NativeWind (Tailwind CSS).

## Features

- ✅ Expo Router (file-based routing)
- ✅ TypeScript
- ✅ Redux Toolkit
- ✅ NativeWind (Tailwind CSS for React Native)
- ✅ Authentication flow
- ✅ UI Components
- ✅ Custom Hooks
- ✅ Utilities

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
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

## Project Structure

- `app/` - Expo Router screens
  - `(auth)/` - Authentication screens
  - `(app)/` - Main app screens
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
