# js-ui-library

A modern React UI library for building polished product interfaces, dashboards,
AI tools, and internal apps.

`js-ui-library` is intentionally broad: it includes everyday primitives like
buttons, inputs, cards, and modals, but also higher-level product components
like command menus, kanban boards, metric rings, heatmaps, bento layouts,
prompt inputs, pricing tables, testimonial sections, AI chat surfaces, and
creative dashboard experiences.

## Why This Exists

Most UI libraries are either tiny primitive kits or heavy design systems. This
project sits in the middle:

- Ready-to-use React components
- TypeScript-first APIs
- CSS-based styling with design tokens
- No runtime styling dependency
- Accessible defaults where practical
- Creative components for memorable product experiences
- Premium product sections for pricing, trust, comparison, and AI workflows
- Library-mode Vite build with ESM, CJS, and type declarations

## Features

- 81 exported component folders
- React 19-ready peer dependencies
- TypeScript declarations generated at build time
- Light and dark theme token support
- Hooks for common behavior
- Vitest and Testing Library setup
- CSS bundled separately through `js-ui-library/style.css`

## Installation

```bash
npm install js-ui-library
```

React and React DOM are peer dependencies:

```bash
npm install react react-dom
```

## Quick Start

```tsx
import { Button, Card, CardBody, CardHeader, TextInput } from 'js-ui-library'
import 'js-ui-library/style.css'

export function Example() {
  return (
    <Card>
      <CardHeader>
        <strong>Create project</strong>
      </CardHeader>
      <CardBody>
        <TextInput label="Project name" name="project" />
        <Button>Save project</Button>
      </CardBody>
    </Card>
  )
}
```

## Theming

Import the bundled CSS once in your app:

```tsx
import 'js-ui-library/style.css'
```

Use `ThemeProvider` to scope a theme to part of your interface:

```tsx
import { Callout, ThemeProvider } from 'js-ui-library'

export function DarkPanel() {
  return (
    <ThemeProvider theme="dark">
      <Callout title="Dark mode">This subtree uses dark design tokens.</Callout>
    </ThemeProvider>
  )
}
```

The library styles are powered by CSS custom properties in
`src/styles/tokens.css`, so projects can override tokens at the app level.

## Component Categories

### Foundations

- `Button`
- `IconButton`
- `Badge`
- `Kbd`
- `Divider`
- `Container`
- `Stack`
- `Grid`
- `ThemeProvider`
- `VisuallyHidden`
- `SkipLink`

### Layout And App Structure

- `AppShell`
- `PageHeader`
- `Card`, `CardHeader`, `CardBody`
- `BentoGrid`, `BentoItem`
- `Toolbar`
- `NavList`

### Forms And Inputs

- `TextInput`
- `Textarea`
- `Select`
- `Checkbox`
- `RadioGroup`
- `Switch`
- `Slider`
- `SegmentedControl`
- `TagInput`
- `Combobox`
- `SearchInput`
- `FileUpload`
- `PromptInput`
- `FormField`
- `ErrorSummary`

### Feedback And Overlays

- `Alert`
- `Callout`
- `Toast`, `ToastViewport`
- `Spinner`
- `Skeleton`
- `LoadingOverlay`
- `Progress`
- `Meter`
- `Modal`
- `Drawer`
- `Popover`
- `Tooltip`
- `DropdownMenu`

### Navigation And Disclosure

- `Accordion`
- `Tabs`
- `Breadcrumbs`
- `Pagination`
- `Stepper`
- `FeatureTour`

### Data And Dashboard Components

- `DataTable`
- `StatCard`
- `MetricRing`
- `Sparkline`
- `CalendarHeatmap`
- `ContributionGraph`
- `ActivityQuadrant`
- `BarChart`
- `AreaChart`
- `ThreeDBarChart`
- `KanbanBoard`
- `Timeline`
- `StatusDot`
- `Rating`

### Analytics And Graphs

- GitHub-style contribution grids with `ContributionGraph`
- Activity distribution visuals with `ActivityQuadrant`
- Compact KPI sparklines with `Sparkline`
- 2D trend surfaces with `AreaChart`
- Horizontal comparison bars with `BarChart`
- Dimensional dashboard visuals with `ThreeDBarChart`

### Creative Product Components

- `SpotlightCard`
- `Marquee`
- `AnimatedNumber`
- `ColorSwatch`
- `BeforeAfter`
- `EmptyState`
- `CommandMenu`
- `CodeBlock`

### Premium Product Sections

- `PricingTable`
- `ComparisonTable`
- `TestimonialCard`
- `LogoCloud`
- `FeatureGrid`
- `AIChat`

## Hooks

```tsx
import { useClipboard, useDisclosure } from 'js-ui-library'
```

- `useDisclosure` for open/close/toggle state
- `useClipboard` for copy-to-clipboard interactions

## Example: Dashboard Card

```tsx
import {
  AnimatedNumber,
  MetricRing,
  Sparkline,
  SpotlightCard,
  Stack,
} from 'js-ui-library'

export function DashboardMetric() {
  return (
    <SpotlightCard>
      <Stack gap="0.75rem">
        <strong>
          <AnimatedNumber value={12840} /> active sessions
        </strong>
        <Sparkline data={[12, 18, 16, 24, 28, 26, 34, 42]} />
        <MetricRing label="Activation" value={86} />
      </Stack>
    </SpotlightCard>
  )
}
```

## Example: AI Prompt Surface

```tsx
import { PromptInput } from 'js-ui-library'

export function AssistantBox() {
  return (
    <PromptInput
      onSubmitPrompt={(prompt) => console.log(prompt)}
      placeholder="Generate a product launch checklist..."
    />
  )
}
```

## Example: Premium Launch Section

```tsx
import {
  FeatureGrid,
  LogoCloud,
  PricingTable,
  TestimonialCard,
} from 'js-ui-library'

export function LaunchPage() {
  return (
    <>
      <FeatureGrid
        features={[
          {
            description: 'Typed React components with CSS tokens and no runtime styling dependency.',
            eyebrow: 'Compose',
            title: 'Build serious product surfaces fast',
          },
          {
            description: 'Use pricing, comparison, trust, and AI sections alongside primitives.',
            eyebrow: 'Launch',
            title: 'Go beyond a basic component kit',
          },
        ]}
      />
      <PricingTable
        tiers={[
          {
            cta: 'Start building',
            description: 'For polished product teams.',
            features: ['Premium sections', 'Dashboard components', 'Theme tokens'],
            highlighted: true,
            name: 'Studio',
            price: '$49',
            suffix: '/seat',
          },
        ]}
      />
      <TestimonialCard
        author="Maya Chen"
        quote="This feels like a product design system, not a box of disconnected widgets."
        role="Founder"
      />
      <LogoCloud
        items={[
          { label: 'Northstar', meta: 'SaaS' },
          { label: 'Atlas', meta: 'AI ops' },
        ]}
        title="Trusted by builders"
      />
    </>
  )
}
```

## Development

```bash
npm install
npm run dev
```

The local preview runs with Vite.

## Scripts

```bash
npm run dev        # Start the local preview
npm run build      # Type-check and build the package
npm run lint       # Run oxlint
npm run test       # Run tests once
npm run test:watch # Run tests in watch mode
```

## Build Output

The package builds to `dist`:

```text
dist/index.js
dist/index.cjs
dist/index.d.ts
dist/index.css
```

Consumers should import the CSS once:

```tsx
import 'js-ui-library/style.css'
```

## Project Structure

```text
src/
  components/
    Button/
      Button.tsx
      Button.css
      index.ts
  hooks/
  styles/
  index.ts
```

Each component lives in its own folder and exports from `src/index.ts`.

## Quality

The project currently uses:

- TypeScript
- Vite library mode
- `vite-plugin-dts`
- Oxlint
- Vitest
- Testing Library
- jsdom

Before opening a pull request, run:

```bash
npm run build
npm run lint
npm run test
```

## Contributing

Contributions are welcome. Please read [CONTRIBUTING.md](./CONTRIBUTING.md)
before opening a pull request.

Good first contributions include:

- Improving accessibility behavior
- Adding focused tests for existing components
- Improving documentation examples
- Refining responsive styles
- Adding small, dependency-free components

## Roadmap

- More accessibility audits
- Storybook or dedicated docs site
- Component API reference pages
- Better keyboard behavior for advanced composites
- More test coverage for interactive components
- Release automation and changelog generation

## Security

Please report vulnerabilities privately. See [SECURITY.md](./SECURITY.md).

## License

MIT. See [LICENSE](./LICENSE).
