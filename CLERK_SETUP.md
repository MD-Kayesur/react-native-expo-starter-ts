# Clerk Authentication Setup Guide

## Issue: 401/403 Unauthorized Errors

If you're seeing 401 or 403 errors from Clerk, it's usually due to an invalid or incorrectly formatted publishable key.

## Steps to Fix:

### 1. Check Your .env File

Make sure you have a `.env` file in the root directory with your Clerk publishable key:

```
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_actual_key_here
```

### 2. Common Issues:

#### ❌ **DO NOT** include:
- Trailing `$` character
- Quotes around the key (unless the key itself contains spaces, which is rare)
- Extra spaces or newlines
- Shell variable syntax

#### ✅ **DO**:
- Use the exact key from your Clerk dashboard
- Copy the key directly without any trailing characters
- Make sure the key starts with `pk_test_` or `pk_live_`

### 3. Example of Correct Format:

```
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_bW9kZXN0LWphY2thbC00Ny5jbGVyay5hY2NvdW50cy5kZXYk
```

**Note:** The key you provided had a `$` at the end. Remove it!

### 4. Get Your Key from Clerk Dashboard:

1. Go to https://dashboard.clerk.com
2. Select your application
3. Go to **API Keys** in the sidebar
4. Copy the **Publishable Key** (starts with `pk_test_` or `pk_live_`)
5. Paste it in your `.env` file

### 5. Restart Your Development Server:

After updating the `.env` file:
```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm start
```

### 6. Verify the Key is Loaded:

Check the browser console. You should see:
- No 401/403 errors
- No warnings about invalid key format

If you still see errors, double-check:
- The key is correct in your Clerk dashboard
- The `.env` file is in the root directory (same level as `package.json`)
- You've restarted the dev server after changing `.env`
- The key doesn't have any trailing characters

## Troubleshooting:

### Error: "Missing Publishable Key"
- Make sure `.env` file exists in the root directory
- Check that the variable name is exactly: `EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY`
- Restart the dev server

### Error: 401 Unauthorized
- Verify the key is correct in Clerk dashboard
- Make sure you're using the right environment (test vs live)
- Check that the key doesn't have trailing `$` or other characters

### Error: 403 Forbidden
- Your key might be expired or revoked
- Generate a new key in Clerk dashboard
- Make sure your Clerk application is active
