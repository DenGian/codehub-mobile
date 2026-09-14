# CodeHub Mobile

CodeHub is a React Native mobile application built with Expo and TypeScript as part of the Associate Degree in Computer Programming at AP Hogeschool Antwerpen. It helps authenticated users discover, filter, save, view, and submit programming resources and events.

## Core features

- Email/password registration, verification, sign-in, sign-out, and password recovery through Clerk.
- Auth-aware routing with protected tabs and public authentication screens.
- Programming-resource feed with text search, favorites filtering, pull-to-refresh, and incremental loading.
- Device-local favorites persisted with AsyncStorage.
- Resource detail pages with topics, levels, source links, and event metadata.
- Calendar view that groups resources with event dates.
- Native map markers for resources that include coordinates.
- Resource and event submission with client-side form validation.
- Profile name updates through Clerk and profile-image selection from the camera or photo library.
- Clerk session-token caching through Expo SecureStore.

## Technical highlights

- Expo Router provides file-based routes, nested authentication/tabs groups, and a modal detail route.
- Custom hooks isolate authentication workflows, API state, filtering, pagination, favorites, and form handling.
- A typed API client centralizes the configured base URL, bearer token, JSON headers, and response validation.
- Reusable presentational components keep screens focused on orchestration.
- TypeScript strict mode is enabled, with the `@/` alias for project-root imports.

## Architecture

```text
Expo Router routes
  -> Screen containers
    -> Presentational components
      -> Feature hooks and ProfilePictureContext
        -> API services / AsyncStorage / Clerk hooks

RootNavigator
  -> ClerkProvider
    -> Expo SecureStore token cache
    -> Authentication redirect hook
```

The route files delegate to screen containers. Screens compose UI components and feature hooks; hooks own state and workflows, while services handle network requests. Clerk provides authentication and remote profile data, AsyncStorage persists favorites, and SecureStore caches Clerk session tokens.

## Screenshots / Demo

Add four current screenshots to `docs/screenshots/` using the filenames below. Replace these placeholders before publishing the portfolio project.

### 1. Login / Onboarding

![Login and onboarding placeholder](docs/screenshots/login-onboarding.png)

### 2. Home Screen

![Home screen placeholder](docs/screenshots/home.png)

### 3. Resource Details and Map

![Resource details and map placeholder](docs/screenshots/resource-details-map.png)

### 4. Events Calendar

![Events calendar placeholder](docs/screenshots/events-calendar.png)

## Local setup

### Prerequisites

- Node.js 20 or newer
- npm
- Expo-compatible Android or iOS development environment, or Expo Go where supported
- A Clerk application with email/password authentication enabled
- A compatible REST API for coding resources

### Installation

1. Clone the repository and enter it:

   ```bash
   git clone git@github.com:DenGian/codehub-mobile.git
   cd codehub-mobile
   ```

2. Install dependencies:

   ```bash
   npm ci
   ```

3. Create the local environment file:

   ```bash
   cp .env.example .env
   ```

4. Set all values in `.env`:

   ```dotenv
   EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   EXPO_PUBLIC_API_URL=https://api.example.com
   EXPO_PUBLIC_API_TOKEN=your_api_token
   ```

   The API base URL must support `GET /codingResources` and `POST /codingResources`. Resource records must match the interface in `services/api/types.ts`.

5. Start Expo:

   ```bash
   npm start
   ```

Use `npm run android` or `npm run ios` to target a specific mobile platform.

## Quality checks

```bash
npm run typecheck
npm run lint
```

Automated tests are not currently included. The former test files were empty placeholders and were removed rather than represented as meaningful coverage.

## Known limitations

- The application depends on separately managed Clerk and REST API services; it does not include a backend.
- Profile-picture changes are held in application state for the current session and are not uploaded or persisted.
- Favorites are local to one device and are not synchronized with the authenticated account.
- Event creation depends on the configured API accepting write requests and the supplied bearer token having permission.
- Browser builds are not supported because the resource map uses the native `react-native-maps` implementation.
- The project remains on Expo SDK 52 and Clerk Core 2; migrating to Expo SDK 53 or newer is required before adopting the current `@clerk/expo` package.
- Automated test coverage has not yet been implemented.

## License

This project is available under the [MIT License](LICENSE).
