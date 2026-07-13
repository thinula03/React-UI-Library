# Contributing

Thanks for helping improve `js-ui-library`.

## Development Setup

```bash
npm install
npm run dev
```

## Before You Open A Pull Request

Run the full verification suite:

```bash
npm run build
npm run lint
npm run test
```

## Component Guidelines

- Keep components dependency-free unless there is a strong reason.
- Use TypeScript props and export prop types.
- Put each component in `src/components/ComponentName`.
- Include `ComponentName.tsx`, `ComponentName.css`, and `index.ts`.
- Re-export public APIs from `src/index.ts`.
- Prefer accessible HTML semantics first.
- Keep styles token-driven using variables from `src/styles/tokens.css`.
- Add tests for logic-heavy, interactive, or high-value components.

## Naming

Use clear product UI names:

- Good: `PromptInput`, `MetricRing`, `ErrorSummary`
- Avoid: `FancyBox`, `CoolCard`, `Thing`

## Pull Request Checklist

- [ ] Component or hook is exported from `src/index.ts`
- [ ] Types are exported where useful
- [ ] Styles are scoped with the `jui-` prefix
- [ ] README or docs are updated if public API changes
- [ ] `npm run build` passes
- [ ] `npm run lint` passes
- [ ] `npm run test` passes

## Commit Style

Use clear, descriptive commits:

```text
Add MetricRing component
Improve Button focus styles
Document ThemeProvider usage
```
