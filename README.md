# React Native Expo Starter with NativeWind

A production-ready starter template for React Native Expo projects with TypeScript, Redux Toolkit, Expo Router, NativeWind (Tailwind CSS), Clerk Authentication, and comprehensive UI components.

## 🚀 Features

- ✅ **Expo Router** - File-based routing with nested layouts
- ✅ **TypeScript** - Full TypeScript support
- ✅ **Redux Toolkit** - State management with RTK
- ✅ **NativeWind v4** - Tailwind CSS for React Native
- ✅ **Clerk Authentication** - Complete auth flow (Sign In, Sign Up, Email Verification)
- ✅ **Protected Routes** - Automatic route protection
- ✅ **UI Components** - Reusable components (Button, Card, Input)
- ✅ **Custom Hooks** - Reusable React hooks
- ✅ **Expo SDK 54** - Latest Expo features
- ✅ **Mobile-First Design** - Optimized for mobile devices

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** (v9 or higher) or **yarn**
- **Expo CLI** (installed globally or via npx)
- **Git**
- **iOS Simulator** (for macOS) or **Android Studio** (for Android development)
- **Expo Go** app on your mobile device (optional, for testing)

## 🛠️ Installation

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd react-native-expo-starter
```

### 2. Install Dependencies

```bash
npm install --legacy-peer-deps
npm install react-native-worklets-core
```

 

**Note:** The `--legacy-peer-deps` flag is required due to React 19 peer dependency conflicts with some packages. This is safe and recommended for this project.


**Note:** The `react-native-worklets-core` flag is required Android Bundling failed 442ms node_modules\expo-router\entry.js (1 module)
 ERROR  Error: [BABEL] C:\MD_Kayesur\app project\My_App\node_modules\expo-router\entry.js: Cannot find module 'react-native-worklets/plugin'
 

### 3. Environment Variables Setup

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Or manually create `.env` and add:

```env
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_key_here
```

**Getting Your Clerk Key:**
1. Go to [Clerk Dashboard](https://dashboard.clerk.com)
2. Create a new application or select an existing one
3. Navigate to **API Keys**
4. Copy your **Publishable Key** (starts with `pk_test_` or `pk_live_`)
5. Paste it in your `.env` file

**Note:** The app will work without a Clerk key, but authentication features will be disabled. Users will see `isSignedIn: false` by default.

### 4. Start the Development Server

```bash
npm start
```

This will start the Expo development server. You can then:
- Press `i` to open iOS simulator
- Press `a` to open Android emulator
- Scan the QR code with Expo Go app on your phone
- Press `w` to open in web browser

## 📦 Dependencies

### Core Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `expo` | ^54.0.0 | Expo SDK |
| `expo-router` | ~6.0.21 | File-based routing |
| `react` | 19.1.0 | React library |
| `react-native` | 0.81.5 | React Native framework |
| `react-dom` | 19.1.0 | React DOM for web |
| `typescript` | ~5.9.2 | TypeScript compiler |

### Authentication

| Package | Version | Purpose |
|---------|---------|---------|
| `@clerk/clerk-expo` | ^2.19.18 | Clerk authentication for Expo |
| `@clerk/clerk-js` | ^5.0.0 | Clerk JavaScript SDK |

### State Management

| Package | Version | Purpose |
|---------|---------|---------|
| `@reduxjs/toolkit` | ^2.2.0 | Redux Toolkit |
| `react-redux` | ^9.1.0 | React bindings for Redux |

### Styling

| Package | Version | Purpose |
|---------|---------|---------|
| `nativewind` | ^4.0.1 | Tailwind CSS for React Native |
| `tailwindcss` | ^3.4.1 | Tailwind CSS framework |
| `twrnc` | ^4.16.0 | Tailwind React Native Classnames |
| `tailwind-react-native-classnames` | ^3.0.1 | Additional Tailwind utilities |

### Expo Modules

| Package | Version | Purpose |
|---------|---------|---------|
| `expo-blur` | ^15.0.8 | Blur effects |
| `expo-linear-gradient` | ^15.0.8 | Linear gradients |
| `expo-linking` | ~8.0.11 | Deep linking |
| `expo-secure-store` | ~15.0.8 | Secure storage |
| `expo-status-bar` | ~3.0.9 | Status bar control |
| `@expo/vector-icons` | ^15.0.3 | Icon library |

### Utilities

| Package | Version | Purpose |
|---------|---------|---------|
| `@react-native-async-storage/async-storage` | 2.2.0 | Async storage |
| `react-native-safe-area-context` | ~5.6.0 | Safe area handling |
| `react-native-screens` | ~4.16.0 | Native screen components |
| `react-native-web` | ^0.21.0 | Web support |
| `react-error-boundary` | ^6.0.3 | Error boundaries |

### Development Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `@babel/core` | ^7.24.0 | Babel compiler |
| `@types/react` | ~19.1.10 | React TypeScript types |
| `@types/expo` | ^32.0.13 | Expo TypeScript types |
| `autoprefixer` | ^10.4.17 | CSS autoprefixer |
| `postcss` | ^8.4.35 | PostCSS processor |

## 📁 Project Structure

```
react-native-expo-starter/
├── app/                          # Expo Router screens
│   ├── (auth)/                  # Authentication routes
│   │   ├── _layout.tsx          # Auth layout
│   │   ├── sign-in.tsx          # Sign in screen
│   │   ├── sign-up.tsx          # Sign up screen
│   │   └── missing-key.tsx      # Missing Clerk key screen
│   ├── (tabs)/                  # Tab navigation routes
│   │   ├── _layout.tsx         # Tabs layout
│   │   ├── about.tsx            # About screen
│   │   └── contact.tsx          # Contact screen
│   ├── (pages)/                 # Individual pages
│   │   ├── whatsapp.tsx
│   │   ├── cube.tsx
│   │   ├── paper-plane.tsx
│   │   ├── feather.tsx
│   │   └── shield.tsx
│   ├── workout/                 # Dynamic routes
│   │   └── [id].tsx
│   ├── _layout.tsx              # Root layout
│   ├── index.tsx                 # Landing page
│   ├── global.css                # Global styles
│   └── +not-found.tsx           # 404 page
├── components/                   # Reusable components
│   ├── ui/                      # UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Input.tsx
│   ├── shared/                  # Shared components
│   │   ├── Error.tsx
│   │   └── Loading.tsx
│   ├── ExpandableTabButton.tsx  # Custom tab button
│   └── SafeScreen.tsx           # Safe area wrapper
├── constants/                    # App constants
│   ├── categories.ts
│   └── colors.ts
├── hooks/                        # Custom hooks
│   ├── useAuth.ts
│   └── useTransactions.ts
├── store/                        # Redux store
│   ├── index.ts                  # Store configuration
│   ├── baseApi.ts                # RTK Query base
│   └── slices/                   # Redux slices
│       └── authSlice.ts
├── utils/                        # Utility functions
│   ├── formatters.ts
│   └── storage.ts
├── assets/                       # Static assets
│   ├── fonts/
│   └── images/
├── .env.example                  # Environment variables template
├── .gitignore                    # Git ignore rules
├── app.json                      # Expo configuration
├── babel.config.js               # Babel configuration
├── metro.config.js               # Metro bundler config
├── package.json                  # Dependencies
├── postcss.config.js             # PostCSS configuration
├── tailwind.config.js            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
└── README.md                     # This file
```

## 🎨 Styling

This project uses **NativeWind v4** (Tailwind CSS for React Native). You can use Tailwind utility classes directly in your components using `className` prop or `twrnc` for style objects.

### Using NativeWind (className)

```tsx
import { View, Text } from 'react-native';

export default function MyComponent() {
  return (
    <View className="flex-1 p-5 bg-white">
      <Text className="text-2xl font-bold text-gray-900">
        Hello World
      </Text>
    </View>
  );
}
```

### Using twrnc (style objects)

```tsx
import { View, Text } from 'react-native';
import tw from 'twrnc';

export default function MyComponent() {
  return (
    <View style={tw`flex-1 p-5 bg-white`}>
      <Text style={tw`text-2xl font-bold text-gray-900`}>
        Hello World
      </Text>
    </View>
  );
}
```

## 🔐 Authentication

This project uses **Clerk** for authentication. The authentication flow includes:

- **Sign Up**: Email/password registration with email verification
- **Sign In**: Email/password authentication
- **Protected Routes**: App routes automatically redirect to sign-in if not authenticated
- **Auth Routes**: Auth routes redirect to home if already signed in

### Authentication Flow

1. Unauthenticated users are redirected to `/(auth)/sign-in`
2. After signing up, users receive an email verification code
3. After verification, users are automatically signed in
4. Authenticated users can access all app routes
5. Sign out redirects back to the sign-in page

### Using Authentication in Components

```tsx
import { useAuth } from '@clerk/clerk-expo';

export default function MyComponent() {
  const { isSignedIn, userId } = useAuth();
  
  if (!isSignedIn) {
    return <Text>Please sign in</Text>;
  }
  
  return <Text>Welcome, {userId}!</Text>;
}
```

## 📱 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start Expo development server |
| `npm run android` | Run on Android emulator |
| `npm run ios` | Run on iOS simulator |
| `npm run web` | Run on web browser |

## 🚨 Troubleshooting

### Issue: `npm install` fails with peer dependency errors

**Solution:** Use `npm install --legacy-peer-deps` instead. This is safe and recommended for this project.

### Issue: Babel configuration errors

**Solution:** Clear cache and restart:
```bash
rm -rf node_modules/.cache .expo
npm start -- --clear
```

### Issue: Metro bundler errors

**Solution:** Reset Metro cache:
```bash
npm start -- --reset-cache
```

### Issue: TypeScript errors

**Solution:** 
1. Ensure all dependencies are installed
2. Restart your TypeScript server in your IDE
3. Check `tsconfig.json` is properly configured

### Issue: Clerk authentication not working

**Solution:**
1. Verify your `.env` file exists and has the correct key
2. Ensure the key starts with `pk_test_` or `pk_live_`
3. Restart the development server after changing `.env`
4. Check Clerk dashboard for API key status

### Issue: Styles not applying (NativeWind)

**Solution:**
1. Ensure `global.css` is imported in `app/_layout.tsx`
2. Check `tailwind.config.js` content paths
3. Verify `metro.config.js` has NativeWind configuration
4. Clear cache and restart

## 🔧 Configuration Files

### Babel (`babel.config.js`)
- Configured for Expo and NativeWind
- No additional setup needed

### Metro (`metro.config.js`)
- Configured with NativeWind transformer
- CSS file path: `./app/global.css`

### Tailwind (`tailwind.config.js`)
- Content paths: `./app/**/*.{js,jsx,ts,tsx}` and `./components/**/*.{js,jsx,ts,tsx}`
- Uses NativeWind preset
- Custom color theme included

### TypeScript (`tsconfig.json`)
- Path aliases configured (`@/*` maps to root)
- Strict mode enabled
- Includes all `.ts` and `.tsx` files

## 📝 Notes

- The project is configured for **mobile-first** development
- All platform-specific conditionals have been removed for mobile-only design
- The app works without Clerk key (auth features disabled)
- All dependencies are production-ready and tested

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 🙏 Acknowledgments

- [Expo](https://expo.dev) - React Native framework
- [NativeWind](https://www.nativewind.dev) - Tailwind CSS for React Native
- [Clerk](https://clerk.com) - Authentication service
- [Redux Toolkit](https://redux-toolkit.js.org) - State management

---

**Made with ❤️ using React Native and Expo**
