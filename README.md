# Angular NgRx Tutorial Project

This project is a simple Angular application demonstrating the use of NgRx for state management, focusing on product listing, shopping basket, and user authentication features.

## Key Features

*   Angular Framework
*   NgRx for centralized state management (@ngrx/store)
    *   Manages application state for products, basket, and authentication.
*   Basic user authentication flow (login/logout).
*   (Likely) Components for displaying products, managing the basket, and handling login.

## Prerequisites

*   [Node.js](https://nodejs.org/) (which includes npm)
*   [Angular CLI](https://angular.io/cli): `npm install -g @angular/cli`

## Getting Started

1.  **Clone the repository (if applicable):**
    ```bash
    git clone <your-repository-url>
    cd <repository-directory>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    ng serve -o
    ```
    The application will be available at `http://localhost:4200/`.

## Core Concepts

*   **Angular:** The application is built using the Angular framework.
*   **NgRx:** State management is handled using NgRx, following the Redux pattern (Actions, Reducers, Selectors, Store).
    *   **State:** Defined in `src/app/core/store/reducers/reducers.type.ts`.
    *   **Actions:** Trigger state changes (e.g., `src/app/core/store/actions/`).
    *   **Reducers:** Handle state transitions based on actions.
    *   **Selectors:** Retrieve specific pieces of state for components.
*   **Services:** Angular services (`src/app/core/services/`) encapsulate business logic like authentication.

## Project Structure (Partial)

```
src/
├── app/
│   ├── core/
│   │   ├── services/       # Application-wide services (e.g., AuthService)
│   │   ├── store/          # NgRx state management files
│   │   │   ├── actions/
│   │   │   ├── reducers/
│   │   │   ├── selectors/
│   │   │   └── effects/      # (If using @ngrx/effects)
│   │   └── types/          # Core data types/interfaces
│   ├── features/         # (Likely location for feature modules/components)
│   │   ├── auth/
│   │   ├── products/
│   │   └── basket/
│   ├── shared/           # Shared components, directives, pipes
│   ├── app.component.ts    # Root application component
│   ├── app.config.ts     # Main application configuration
│   └── app.routes.ts     # Application routing
├── assets/               # Static assets (images, etc.)
└── environments/         # Environment configuration
```

*(Note: This structure might vary based on the actual project layout)*
