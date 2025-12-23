# Contributing to nextarter-tailwind

Thank you for considering contributing to this template! This document outlines the standards and process for contributing.

---

## 1. Governance & Philosophy

- **Pragmatism Over Dogma**: Code should be readable and maintainable by a generalist engineer.
- **Lean Implementation**: Prefer standard Web APIs and minimalist abstractions.
- **Strict Linting**: We use Biome to ensure consistency without the overhead of multiple tools.

---

## 2. Development Workflow

### Prerequisites
- Node.js `^24.11.x`
- pnpm `^10.24.0`

### Setup
```bash
git clone https://github.com/agustinusnathaniel/nextarter-tailwind.git
cd nextarter-tailwind
pnpm install
pnpm dev
```

### Git Conventions
We use **Conventional Commits** via `commitlint` and `husky`.
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, etc)
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools and libraries

**Pro Tip**: Run `pnpm release` to automate versioning and changelog generation.

---

## 3. Code Quality Standards

### Formatting & Linting
Run Biome before committing:
```bash
pnpm biome:check # Check for issues
pnpm biome:fix   # Auto-fix issues
```

### Type Safety
Ensure TypeScript passes without errors:
```bash
pnpm type:check
```

### Architecture Constraints
- **Filenames**: Use `kebab-case.tsx` or `kebab-case.ts`.
- **Component Exports**: Use named exports unless it's a Next.js entry point (e.g., `page.tsx`, `layout.tsx`).
- **Styles**: Use Tailwind utility classes. Avoid custom CSS unless absolutely necessary (add to `src/lib/styles/globals.css`).

---

## 4. Testing Expectations

We use **Playwright** for E2E testing.
- New features should include relevant E2E tests in the `tests/` directory (if applicable).
- Run tests with:
```bash
pnpm test:e2e
```

---

## 5. Review & PR Process

1. **Branching**: Create a feature branch from `main`.
2. **Checks**: Ensure `pnpm check:turbo` (runs Biome and TSC) passes.
3. **PR Description**: Explain the *why* behind the change, not just the *what*.
4. **Consistency**: Ensure the PR adheres to the `Lib-Delegation` pattern defined in `SPEC.md`.
