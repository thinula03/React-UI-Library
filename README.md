# js-ui-library

A starter React UI library built with TypeScript and Vite library mode.

## Scripts

```bash
npm run dev
npm run build
npm run lint
```

## Usage

```tsx
import {
  Accordion,
  Alert,
  Avatar,
  Badge,
  Breadcrumbs,
  Button,
  Card,
  CardBody,
  CardHeader,
  Checkbox,
  DataTable,
  Divider,
  EmptyState,
  Pagination,
  Progress,
  RadioGroup,
  Select,
  Skeleton,
  Switch,
  Tabs,
  TextInput,
  Textarea,
  Toast,
  ToastViewport,
  Tooltip,
} from 'js-ui-library'
import 'js-ui-library/style.css'

export function Example() {
  return (
    <Card>
      <CardHeader>
        <strong>Project</strong>
        <Badge variant="success">Active</Badge>
      </CardHeader>
      <CardBody>
        <TextInput label="Name" name="name" placeholder="Acme dashboard" />
        <Select
          label="Priority"
          name="priority"
          options={[
            { label: 'Low', value: 'low' },
            { label: 'High', value: 'high' },
          ]}
        />
        <Checkbox label="Email me updates" name="updates" />
        <Textarea label="Notes" name="notes" />
        <Alert title="Saved" variant="success">
          Your changes are ready.
        </Alert>
        <Divider />
        <Breadcrumbs
          items={[
            { href: '#', label: 'Library' },
            { label: 'Project' },
          ]}
        />
        <Switch label="Enable compact mode" name="compact" />
        <RadioGroup
          label="Density"
          name="density"
          options={[
            { label: 'Compact', value: 'compact' },
            { label: 'Comfortable', value: 'comfortable' },
          ]}
        />
        <Progress label="Setup" value={75} />
        <Pagination page={1} totalPages={4} onPageChange={() => undefined} />
        <Accordion
          openId="details"
          onOpenChange={() => undefined}
          items={[
            { id: 'details', title: 'Details', content: 'More content' },
          ]}
        />
        <EmptyState title="No results" description="Try another search." />
        <Skeleton height={12} width="60%" />
        <DataTable
          columns={[
            { key: 'name', header: 'Name', render: (row) => row.name },
            { key: 'role', header: 'Role', render: (row) => row.role },
          ]}
          getRowKey={(row) => row.name}
          rows={[{ name: 'Ada', role: 'Engineer' }]}
        />
        <Tabs
          activeId="overview"
          onChange={() => undefined}
          tabs={[
            { id: 'overview', label: 'Overview', content: 'Details' },
            { id: 'usage', label: 'Usage', content: 'Examples' },
          ]}
        />
        <Tooltip content="Team member">
          <Avatar fallback="Ada Lovelace" />
        </Tooltip>
        <Button>Save changes</Button>
        <ToastViewport>
          <Toast title="Saved" variant="success">
            Your changes are ready.
          </Toast>
        </ToastViewport>
      </CardBody>
    </Card>
  )
}
```

## Components

- `Accordion`
- `Alert`
- `Avatar`
- `Badge`
- `Breadcrumbs`
- `Button`
- `Card`, `CardHeader`, `CardBody`
- `Checkbox`
- `DataTable`
- `Divider`
- `EmptyState`
- `Modal`
- `Pagination`
- `Progress`
- `RadioGroup`
- `Select`
- `Skeleton`
- `Spinner`
- `Switch`
- `Tabs`
- `TextInput`
- `Textarea`
- `Toast`, `ToastViewport`
- `Tooltip`

## Add Components

Create a component folder in `src/components`, export it from that folder's
`index.ts`, then re-export it from `src/index.ts`.

The first component is available at `src/components/Button`.
