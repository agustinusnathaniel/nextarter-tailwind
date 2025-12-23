# AI Agent Guidance: nextarter-tailwind

This file provides context and instructions for AI agents (Cursor, Antigravity, Zed, Windsurf) to effectively navigate and modify this repository.

---

## 1. Mental Model for Agents

### Implementation Delegation
The most important pattern to understand is that **`src/app` is just a shell**. 
- To modify a page's content, look in `src/lib/pages/[page-name]`.
- To modify the site-wide layout, look in `src/lib/layout`.
- Do NOT add heavy logic or massive JSX blocks directly into `src/app`.

### Tooling Strategy
- **Linter**: We use **Biome**. Do not suggest adding ESLint or Prettier config.
- **Package Manager**: **pnpm**. Use `pnpm` for all commands.
- **Styles**: **Tailwind CSS v4**. Use standard utility classes.

---

## 2. Module Blueprint

| Directory | Content Type | Change Frequency | Risk Level |
| :--- | :--- | :--- | :--- |
| `src/app` | Routing/Next.js glue | Low | High (Affects routing) |
| `src/lib/pages` | Feature implementation | High | Low |
| `src/lib/layout` | Shared UI shell | Medium | Medium |
| `src/lib/components` | Atomic components | Medium | Low |
| `src/lib/styles` | Design System/Global CSS | Low | High |

---

## 3. Recommended Prompts for LLMs

- **Adding a Page**: "I want to add a new page `/about`. Create a new directory `src/lib/pages/about`, implement the component there, and then create `src/app/about/page.tsx` that exports it."
- **Adding a Shared Component**: "Create a new atomic component `Button` in `src/lib/components/button.tsx`. Follow the kebab-case naming convention and use named exports."
- **Refactoring Styles**: "Review the Tailwind classes in `src/lib/pages/home/index.tsx` and suggest optimizations or consistency improvements based on the existing design tokens in `globals.css`."

---

## 4. Known Pitfalls for Agents

1. **Default vs Named Exports**: Biome enforced named exports for everything in `lib`. Next.js requires default exports for `app` files. Agents often mix these up.
2. **Path Aliases**: Always use `@/...` aliases for imports.
3. **Hydration Warnings**: When adding theme-dependent components, ensure they handle hydration correctly (use `next-themes` and check for `mounted` state if necessary, or rely on the `suppressHydrationWarning` at root).
4. **Tailwind v4 Nuances**: Be aware that Tailwind v4 may have different configuration approaches compared to v3 (e.g., CSS-first configuration).

---

## 5. IDE Specific Hints

- **Cursor/Antigravity**: Reference `SPEC.md` when planning structural changes.
- **Windsurf**: Use the "Lib-Delegation" concept to focus your search in `src/lib` instead of getting lost in `src/app`.
- **Zed**: Focus on the `src/lib` directory for implementation details.
