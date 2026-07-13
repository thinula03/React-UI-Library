import { useState } from 'react'
import {
  Accordion,
  ActivityQuadrant,
  Alert,
  AIChat,
  AnimatedNumber,
  AppShell,
  AreaChart,
  Avatar,
  Badge,
  BarChart,
  BentoGrid,
  BentoItem,
  BeforeAfter,
  Breadcrumbs,
  Button,
  Callout,
  CalendarHeatmap,
  Card,
  CardBody,
  CardHeader,
  Checkbox,
  CodeBlock,
  ColorSwatch,
  Combobox,
  CommandMenu,
  ComparisonTable,
  ContributionGraph,
  CopyButton,
  DataTable,
  Divider,
  Drawer,
  DropdownMenu,
  EmptyState,
  ErrorSummary,
  FeatureGrid,
  FeatureTour,
  FileUpload,
  FormField,
  Grid,
  IconButton,
  Kbd,
  KanbanBoard,
  LoadingOverlay,
  LogoCloud,
  Marquee,
  Meter,
  MetricRing,
  Modal,
  NavList,
  Pagination,
  PageHeader,
  Popover,
  PricingTable,
  Progress,
  PromptInput,
  RadioGroup,
  Rating,
  SearchInput,
  SegmentedControl,
  Select,
  SkipLink,
  Skeleton,
  Sparkline,
  Spinner,
  SpotlightCard,
  Switch,
  Tabs,
  TagInput,
  TextInput,
  Textarea,
  ThemeProvider,
  ThreeDBarChart,
  Timeline,
  Toast,
  ToastViewport,
  Tooltip,
  Stack,
  StatCard,
  StatusDot,
  Stepper,
  Slider,
  Toolbar,
  TestimonialCard,
  VisuallyHidden,
} from './index'
import './App.css'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')
  const [showToast, setShowToast] = useState(false)
  const [page, setPage] = useState(2)
  const [openAccordion, setOpenAccordion] = useState('tokens')
  const [density, setDensity] = useState('comfortable')
  const [tags, setTags] = useState(['React', 'TypeScript'])
  const [rating, setRating] = useState(4)
  const [plan, setPlan] = useState('pro')
  const [volume, setVolume] = useState(64)
  const [comboValue, setComboValue] = useState('but')
  const [commandQuery, setCommandQuery] = useState('')
  const contributionDays = Array.from({ length: 371 }, (_, index) => {
    const date = new Date(2025, 6, index + 1)
    const value =
      index % 31 === 0
        ? 10
        : index % 13 === 0
          ? 8
          : (index * 5 + index % 9) % 11

    return {
      date: [
        date.getFullYear(),
        String(date.getMonth() + 1).padStart(2, '0'),
        String(date.getDate()).padStart(2, '0'),
      ].join('-'),
      value,
    }
  })

  return (
    <main className="preview-shell">
      <div className="preview-panel">
        <section className="preview-hero" aria-label="Library overview">
          <div className="preview-hero__copy">
            <p className="eyebrow">React UI Library</p>
            <h1>Interfaces that feel expensive by default.</h1>
            <p className="intro">
              A polished component system for SaaS dashboards, AI products,
              launch pages, graph-heavy tools, and internal workflows.
            </p>
            <div className="preview-hero__actions">
              <Button size="lg">Explore components</Button>
              <Button size="lg" variant="secondary">
                View docs
              </Button>
            </div>
            <div className="preview-hero__metrics" aria-label="Library metrics">
              <span>
                <strong>81</strong>
                components
              </span>
              <span>
                <strong>10</strong>
                tests
              </span>
              <span>
                <strong>0</strong>
                styling deps
              </span>
            </div>
          </div>
          <div className="preview-hero__stage" aria-hidden="true">
            <div className="hero-widget hero-widget--countries">
              <span className="hero-search">Search countries...</span>
              <b>Germany (+241)</b>
              <b>Brazil (+46)</b>
              <b>Australia (+76)</b>
              <i>Login</i>
            </div>
            <div className="hero-widget hero-widget--filter">
              <div className="hero-tabs">
                <strong>Price Filter</strong>
                <span>Colors</span>
                <span>Brand</span>
              </div>
              <div className="hero-slider">
                <span />
              </div>
              <div className="hero-values">
                <b>$12,340.45</b>
                <b>$40,350.90</b>
              </div>
              <i>Apply</i>
            </div>
            <div className="hero-widget hero-widget--login">
              <span>Username</span>
              <b>Amirbaqian</b>
              <span>Password</span>
              <i>Login</i>
            </div>
            <div className="hero-widget hero-widget--upload">
              <b>Upload pictures</b>
              <span>Videos less than 30 MB</span>
              <i>Upload</i>
            </div>
            <div className="hero-floating-pill hero-floating-pill--one">
              Product Filter
            </div>
            <div className="hero-floating-pill hero-floating-pill--two">10</div>
          </div>
        </section>

        <section
          aria-label="Component preview"
          className="component-grid"
          id="main-preview"
        >
          <Card>
            <CardHeader>
              <strong>Buttons</strong>
              <Badge variant="primary">4 variants</Badge>
            </CardHeader>
            <CardBody>
              <div className="button-row" aria-label="Button variants">
                <Button>Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="danger">Danger</Button>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <strong>Icon Buttons</strong>
              <Badge variant="primary">Actions</Badge>
            </CardHeader>
            <CardBody>
              <Stack direction="row" gap="0.75rem" wrap>
                <IconButton label="Add item" variant="primary">
                  +
                </IconButton>
                <IconButton label="Edit item">✎</IconButton>
                <IconButton label="Remove item" variant="danger">
                  ×
                </IconButton>
                <DropdownMenu
                  align="right"
                  items={[
                    { label: 'Duplicate', onSelect: () => setShowToast(true) },
                    { label: 'Archive', onSelect: () => setShowToast(true) },
                    {
                      disabled: true,
                      label: 'Unavailable',
                      onSelect: () => undefined,
                    },
                  ]}
                  trigger={
                    <IconButton label="Open menu" variant="ghost">
                      ⋯
                    </IconButton>
                  }
                />
              </Stack>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <strong>Inputs</strong>
              <Badge variant="success">Ready</Badge>
            </CardHeader>
            <CardBody>
              <div className="field-stack">
                <TextInput
                  helperText="Use helper text for calm, contextual guidance."
                  label="Project name"
                  name="project"
                  placeholder="Acme dashboard"
                />
                <TextInput
                  error="This field needs a value."
                  label="Required field"
                  name="required"
                  placeholder="Type something"
                />
                <Select
                  helperText="Native select keeps forms simple and accessible."
                  label="Priority"
                  name="priority"
                  options={[
                    { label: 'Low', value: 'low' },
                    { label: 'Medium', value: 'medium' },
                    { label: 'High', value: 'high' },
                  ]}
                />
                <Checkbox
                  helperText="Pairs neatly with settings, filters, and forms."
                  label="Enable notifications"
                  name="notifications"
                />
                <Textarea
                  helperText="Textarea is useful for notes, descriptions, and messages."
                  label="Notes"
                  name="notes"
                  placeholder="Add useful context"
                  rows={3}
                />
                <TagInput
                  label="Tags"
                  onValueChange={setTags}
                  value={tags}
                />
                <FileUpload
                  helperText="PNG, JPG, or PDF up to your app limit."
                  label="Attachment"
                  name="attachment"
                />
                <Combobox
                  label="Component picker"
                  name="component-picker"
                  onInputChange={setComboValue}
                  onValueChange={setComboValue}
                  options={[
                    { label: 'Button', value: 'button' },
                    { label: 'Card', value: 'card' },
                    { label: 'Combobox', value: 'combobox' },
                  ]}
                  value={comboValue}
                />
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <strong>Badges</strong>
              <Badge>Default</Badge>
            </CardHeader>
            <CardBody>
              <div className="button-row" aria-label="Badge variants">
                <Badge>Neutral</Badge>
                <Badge variant="primary">Primary</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="danger">Danger</Badge>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <strong>Feedback</strong>
              <Spinner size="sm" />
            </CardHeader>
            <CardBody>
              <div className="field-stack">
                <Alert title="Everything is connected" variant="success">
                  Components share tokens and are exported from the package
                  entrypoint.
                </Alert>
                <Alert title="Heads up" variant="warning">
                  Replace the package name before publishing to npm.
                </Alert>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <strong>Overlay</strong>
              <Badge variant="primary">Modal + Drawer</Badge>
            </CardHeader>
            <CardBody>
              <div className="field-stack">
                <p className="muted-copy">
                  Use modal for focused confirmation, short forms, and
                  interruptive decisions.
                </p>
                <Button onClick={() => setIsModalOpen(true)}>
                  Open modal
                </Button>
                <Button onClick={() => setIsDrawerOpen(true)} variant="secondary">
                  Open drawer
                </Button>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <strong>Navigation</strong>
              <Badge variant="success">Tabs</Badge>
            </CardHeader>
            <CardBody>
              <Tabs
                activeId={activeTab}
                onChange={setActiveTab}
                tabs={[
                  {
                    content: 'Overview content keeps the first tab compact.',
                    id: 'overview',
                    label: 'Overview',
                  },
                  {
                    content: 'Usage notes can live in a second panel.',
                    id: 'usage',
                    label: 'Usage',
                  },
                  {
                    content: 'Settings are useful for denser app surfaces.',
                    id: 'settings',
                    label: 'Settings',
                  },
                ]}
              />
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <strong>Wayfinding</strong>
              <Badge>Nav</Badge>
            </CardHeader>
            <CardBody>
              <div className="field-stack">
                <Breadcrumbs
                  items={[
                    { href: '#', label: 'Library' },
                    { href: '#', label: 'Components' },
                    { label: 'Navigation' },
                  ]}
                />
                <Pagination
                  onPageChange={setPage}
                  page={page}
                  totalPages={5}
                />
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <strong>Sidebar</strong>
              <Badge>NavList</Badge>
            </CardHeader>
            <CardBody>
              <NavList
                items={[
                  { active: true, badge: '12', label: 'Overview' },
                  { badge: '4', label: 'Components' },
                  { label: 'Settings' },
                ]}
              />
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <strong>Settings</strong>
              <Tooltip content="Switch is exported as a controlled or uncontrolled input.">
                <Badge variant="primary">Hint</Badge>
              </Tooltip>
            </CardHeader>
            <CardBody>
              <div className="field-stack">
                <Switch
                  defaultChecked
                  helperText="Use this for preferences and feature toggles."
                  label="Enable compact mode"
                  name="compact"
                />
                <RadioGroup
                  helperText="RadioGroup supports controlled choice inputs."
                  label="Density"
                  name="density"
                  onValueChange={setDensity}
                  options={[
                    { label: 'Compact', value: 'compact' },
                    { label: 'Comfortable', value: 'comfortable' },
                  ]}
                  value={density}
                />
                <SegmentedControl
                  label="Plan"
                  onValueChange={setPlan}
                  options={[
                    { label: 'Free', value: 'free' },
                    { label: 'Pro', value: 'pro' },
                    { label: 'Team', value: 'team' },
                  ]}
                  value={plan}
                />
                <Slider
                  label="Volume"
                  max={100}
                  min={0}
                  onChange={(event) => setVolume(Number(event.currentTarget.value))}
                  output={`${volume}%`}
                  value={volume}
                />
                <Progress label="Library coverage" value={72} />
                <Meter label="Usage" max={100} optimum={40} value={68} />
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <strong>Toolbar</strong>
              <Badge variant="primary">Search</Badge>
            </CardHeader>
            <CardBody>
              <div className="field-stack">
                <SearchInput label="Find component" placeholder="Search components" />
                <Toolbar>
                  <Button size="sm" variant="secondary">
                    Filter
                  </Button>
                  <Button size="sm" variant="secondary">
                    Sort
                  </Button>
                  <Kbd>/</Kbd>
                  <CopyButton text="npm install js-ui-library" />
                  <Popover
                    content="Use a popover for compact contextual information and lightweight actions."
                  >
                    <Button size="sm" variant="ghost">
                      Info
                    </Button>
                  </Popover>
                </Toolbar>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <strong>Command</strong>
              <Kbd>⌘K</Kbd>
            </CardHeader>
            <CardBody>
              <div className="field-stack">
                <SearchInput
                  label="Command search"
                  onChange={(event) => setCommandQuery(event.currentTarget.value)}
                  placeholder="Type a command"
                  value={commandQuery}
                />
                <CommandMenu
                  items={[
                    { shortcut: <Kbd>B</Kbd>, title: 'Create button', value: 'button' },
                    { shortcut: <Kbd>C</Kbd>, title: 'Create card', value: 'card' },
                    { shortcut: <Kbd>T</Kbd>, title: 'Toggle theme', value: 'theme' },
                  ]}
                  onSelect={() => setShowToast(true)}
                  query={commandQuery}
                />
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <strong>Identity</strong>
              <Badge>Avatar</Badge>
            </CardHeader>
            <CardBody>
              <div className="avatar-row">
                <Avatar fallback="Thinul Adamsith" size="sm" />
                <Divider orientation="vertical" />
                <Avatar fallback="React Library" />
                <Avatar fallback="Design System" size="lg" />
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <strong>Layout</strong>
              <Badge>Grid</Badge>
            </CardHeader>
            <CardBody>
              <Grid gap="0.75rem" minColumnWidth="7rem">
                <Alert title="Stack">Directional spacing.</Alert>
                <Alert title="Grid">Responsive columns.</Alert>
                <Alert title="Container">Page width control.</Alert>
              </Grid>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <strong>App Structure</strong>
              <Badge variant="primary">Shell</Badge>
            </CardHeader>
            <CardBody>
              <AppShell
                header={<strong>Acme</strong>}
                sidebar={
                  <NavList
                    items={[
                      { active: true, label: 'Home' },
                      { label: 'Settings' },
                    ]}
                  />
                }
              >
                <PageHeader
                  actions={<Button size="sm">Create</Button>}
                  description="Composable layout primitives for app screens."
                  eyebrow="Workspace"
                  title="Dashboard"
                />
              </AppShell>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <strong>Data</strong>
              <Badge variant="primary">Table</Badge>
            </CardHeader>
            <CardBody>
              <DataTable
                columns={[
                  {
                    header: 'Component',
                    key: 'component',
                    render: (row) => row.component,
                  },
                  {
                    align: 'right',
                    header: 'Status',
                    key: 'status',
                    render: (row) => <Badge variant="success">{row.status}</Badge>,
                  },
                ]}
                getRowKey={(row) => row.component}
                rows={[
                  { component: 'Button', status: 'Ready' },
                  { component: 'Modal', status: 'Ready' },
                  { component: 'Toast', status: 'New' },
                ]}
              />
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <strong>Stats</strong>
              <Badge variant="success">Dashboard</Badge>
            </CardHeader>
            <CardBody>
              <Grid gap="0.75rem" minColumnWidth="8rem">
                <StatCard
                  label="Components"
                  trend="+6 this pass"
                  trendDirection="up"
                  value="42"
                />
                <StatCard label="Bundle" trend="gzip" value="5.05 kB" />
              </Grid>
              <div className="status-row">
                <StatusDot label="Operational" tone="success" />
                <StatusDot label="Queued" tone="warning" />
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <strong>Loading</strong>
              <Badge>Skeleton</Badge>
            </CardHeader>
            <CardBody>
              <div className="skeleton-stack">
                <Skeleton height={12} width="42%" />
                <Skeleton height={16} />
                <Skeleton height={16} width="78%" />
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <strong>Form State</strong>
              <Badge variant="danger">Errors</Badge>
            </CardHeader>
            <CardBody>
              <div className="field-stack">
                <ErrorSummary
                  errors={[
                    { href: '#email', message: 'Email is required.' },
                    { message: 'Password must be longer.' },
                  ]}
                />
                <FormField
                  description="Use FormField when you need custom composed controls."
                  error="Email is required."
                  label="Email"
                  required
                >
                  <TextInput id="email" name="email" placeholder="you@example.com" />
                </FormField>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <strong>Loading Overlay</strong>
              <Badge>Async</Badge>
            </CardHeader>
            <CardBody>
              <LoadingOverlay isLoading label="Syncing">
                <Card>
                  <CardBody>
                    <p className="muted-copy">Content remains in place while loading.</p>
                  </CardBody>
                </Card>
              </LoadingOverlay>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <strong>Notifications</strong>
              <Badge variant="warning">Toast</Badge>
            </CardHeader>
            <CardBody>
              <div className="field-stack">
                <p className="muted-copy">
                  Toast and viewport are exported separately for flexible app
                  placement.
                </p>
                <Button onClick={() => setShowToast(true)} variant="secondary">
                  Show toast
                </Button>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <strong>Disclosure</strong>
              <Badge variant="primary">Accordion</Badge>
            </CardHeader>
            <CardBody>
              <Accordion
                items={[
                  {
                    content:
                      'Tokens centralize color, radius, shadows, and focus rings.',
                    id: 'tokens',
                    title: 'Design tokens',
                  },
                  {
                    content:
                      'Components are exported from src/index.ts for consumers.',
                    id: 'exports',
                    title: 'Package exports',
                  },
                ]}
                onOpenChange={setOpenAccordion}
                openId={openAccordion}
              />
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <strong>Progression</strong>
              <Badge variant="success">Stepper</Badge>
            </CardHeader>
            <CardBody>
              <Stepper
                activeId="build"
                steps={[
                  {
                    description: 'Create component folders.',
                    id: 'scaffold',
                    label: 'Scaffold',
                  },
                  {
                    description: 'Export and preview components.',
                    id: 'build',
                    label: 'Build',
                  },
                  {
                    description: 'Publish the package.',
                    id: 'publish',
                    label: 'Publish',
                  },
                ]}
              />
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <strong>Empty State</strong>
              <Badge>Content</Badge>
            </CardHeader>
            <CardBody>
              <EmptyState
                action={<Button variant="secondary">Create item</Button>}
                description="Use this when a list, search, or dashboard has no data yet."
                icon="?"
                title="Nothing here yet"
              />
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <strong>Activity</strong>
              <Badge>Timeline</Badge>
            </CardHeader>
            <CardBody>
              <Timeline
                items={[
                  {
                    content: 'Created the library scaffold.',
                    id: 'created',
                    meta: 'Step 1',
                    title: 'Created',
                  },
                  {
                    content: 'Added component exports and styles.',
                    id: 'expanded',
                    meta: 'Step 2',
                    title: 'Expanded',
                  },
                  {
                    content: 'Build and lint checks are passing.',
                    id: 'verified',
                    meta: 'Step 3',
                    title: 'Verified',
                  },
                ]}
              />
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <strong>Rating</strong>
              <Kbd>⌘K</Kbd>
            </CardHeader>
            <CardBody>
              <div className="field-stack">
                <Rating onValueChange={setRating} value={rating} />
                <p className="muted-copy">
                  Use <Kbd>Tab</Kbd> to focus controls and keyboard shortcuts in
                  command surfaces.
                </p>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <strong>Docs</strong>
              <Badge>Code</Badge>
            </CardHeader>
            <CardBody>
              <div className="field-stack">
                <Callout title="Import styles" tone="info">
                  Consumers should import the bundled CSS once in their app.
                </Callout>
                <CodeBlock
                  code={"import { Button } from 'js-ui-library'\\nimport 'js-ui-library/style.css'"}
                  language="tsx"
                />
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <strong>Theming</strong>
              <Badge variant="primary">Dark</Badge>
            </CardHeader>
            <CardBody>
              <ThemeProvider className="theme-sample" theme="dark">
                <Callout title="Scoped theme">
                  ThemeProvider applies `data-jui-theme` to a subtree.
                </Callout>
              </ThemeProvider>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <strong>Creative Metrics</strong>
              <Badge variant="primary">Motion</Badge>
            </CardHeader>
            <CardBody>
              <SpotlightCard>
                <Stack gap="0.75rem">
                  <strong>
                    <AnimatedNumber value={12840} /> active sessions
                  </strong>
                  <Sparkline data={[12, 18, 16, 24, 28, 26, 34, 42]} />
                  <p className="muted-copy">
                    SpotlightCard, AnimatedNumber, and Sparkline add polish to
                    dense dashboards.
                  </p>
                </Stack>
              </SpotlightCard>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <strong>Palette</strong>
              <Badge>Swatches</Badge>
            </CardHeader>
            <CardBody>
              <div className="field-stack">
                <ColorSwatch color="#2563eb" label="Primary" />
                <ColorSwatch color="#14b8a6" label="Accent" />
                <Marquee speedSeconds={16}>
                  <Badge variant="primary">Design tokens</Badge>
                  <Badge variant="success">Composable</Badge>
                  <Badge variant="warning">Animated</Badge>
                </Marquee>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <strong>Bento</strong>
              <Badge variant="success">Layout</Badge>
            </CardHeader>
            <CardBody>
              <BentoGrid>
                <BentoItem span="wide">
                  <strong>Hero metric</strong>
                  <p className="muted-copy">Wide cards anchor important data.</p>
                </BentoItem>
                <BentoItem>
                  <strong>Signal</strong>
                  <p className="muted-copy">Compact supporting content.</p>
                </BentoItem>
                <BentoItem>
                  <strong>Detail</strong>
                  <p className="muted-copy">Flexible grid rhythm.</p>
                </BentoItem>
              </BentoGrid>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <strong>Executive Signal</strong>
              <Badge variant="primary">Ring + Heatmap</Badge>
            </CardHeader>
            <CardBody>
              <div className="field-stack">
                <MetricRing label="Activation score" value={86} />
                <CalendarHeatmap
                  days={Array.from({ length: 35 }, (_, index) => ({
                    date: `2026-07-${String(index + 1).padStart(2, '0')}`,
                    value: (index * 7) % 11,
                  }))}
                  max={10}
                />
              </div>
            </CardBody>
          </Card>

          <Card className="showcase-wide analytics-showcase">
            <CardHeader>
              <div>
                <strong>Contribution Analytics</strong>
                <p className="analytics-kicker">
                  Contribution health, ownership, and delivery shape in one panel.
                </p>
              </div>
              <Badge variant="success">GitHub-style</Badge>
            </CardHeader>
            <CardBody className="analytics-body">
              <div className="analytics-summary" aria-label="Contribution summary">
                <span>
                  <strong>693</strong>
                  Contributions
                </span>
                <span>
                  <strong>87%</strong>
                  Commits
                </span>
                <span>
                  <strong>52%</strong>
                  Code review
                </span>
                <span>
                  <strong>12%</strong>
                  Pull requests
                </span>
              </div>

              <div className="analytics-repos" aria-label="Connected repositories">
                <span>@Infinity-AI-DevHub</span>
                <span>@iinfinity-AI</span>
                <span>thinula03</span>
              </div>

              <ContributionGraph
                days={contributionDays}
                max={10}
                title="693 contributions in the last year"
              />

              <div className="analytics-dashboard-grid">
                <section className="analytics-panel analytics-panel--quadrant">
                  <div className="analytics-panel__header">
                    <div>
                      <strong>Activity overview</strong>
                      <p>Work distribution by contribution type.</p>
                    </div>
                    <StatusDot label="Healthy" tone="success" />
                  </div>
                  <ActivityQuadrant
                    metrics={[
                      { label: 'Code review', position: 'top', value: 52 },
                      { label: 'Issues', position: 'right', value: 1 },
                      { label: 'Pull requests', position: 'bottom', value: 12 },
                      { label: 'Commits', position: 'left', value: 87 },
                    ]}
                  />
                </section>

                <section className="analytics-panel">
                  <div className="analytics-panel__header">
                    <div>
                      <strong>Delivery mix</strong>
                      <p>Contribution volume by activity.</p>
                    </div>
                    <Badge>Live</Badge>
                  </div>
                  <BarChart
                    data={[
                      { color: '#166534', label: 'Commits', value: 87 },
                      { color: '#22c55e', label: 'PRs', value: 12 },
                      { color: '#86efac', label: 'Reviews', value: 52 },
                      { color: '#bbf7d0', label: 'Issues', value: 1 },
                    ]}
                    max={100}
                  />
                  <div className="analytics-panel__chart">
                    <AreaChart
                      data={[
                        { label: 'Jan', value: 14 },
                        { label: 'Feb', value: 22 },
                        { label: 'Mar', value: 18 },
                        { label: 'Apr', value: 35 },
                        { label: 'May', value: 44 },
                        { label: 'Jun', value: 51 },
                      ]}
                    />
                  </div>
                </section>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <strong>3D Metrics</strong>
              <Badge variant="warning">Dimensional</Badge>
            </CardHeader>
            <CardBody>
              <ThreeDBarChart
                data={[
                  { color: '#2563eb', label: 'API', value: 72 },
                  { color: '#14b8a6', label: 'Web', value: 94 },
                  { color: '#22c55e', label: 'AI', value: 64 },
                  { color: '#f59e0b', label: 'Ops', value: 48 },
                ]}
              />
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <strong>Workflow</strong>
              <Badge variant="success">Kanban</Badge>
            </CardHeader>
            <CardBody>
              <KanbanBoard
                columns={[
                  {
                    cards: [{ id: 'brief', meta: '2 files', title: 'Write brief' }],
                    id: 'todo',
                    title: 'Todo',
                  },
                  {
                    cards: [{ id: 'design', meta: 'In review', title: 'Design pass' }],
                    id: 'doing',
                    title: 'Doing',
                  },
                  {
                    cards: [{ id: 'ship', meta: 'Done', title: 'Ship package' }],
                    id: 'done',
                    title: 'Done',
                  },
                ]}
              />
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <strong>AI Surface</strong>
              <Badge>Prompt</Badge>
            </CardHeader>
            <CardBody>
              <PromptInput
                onSubmitPrompt={() => setShowToast(true)}
                placeholder="Generate a usage example for the Button component"
              />
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <strong>Launch Moment</strong>
              <Badge variant="warning">Tour</Badge>
            </CardHeader>
            <CardBody>
              <FeatureTour
                activeIndex={1}
                steps={[
                  {
                    description: 'Lead with the job users came to do.',
                    title: 'Focus',
                  },
                  {
                    description: 'Show what changed in one confident pass.',
                    title: 'Reveal',
                  },
                  {
                    description: 'Give users a next action immediately.',
                    title: 'Activate',
                  },
                ]}
              />
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <strong>Transformation</strong>
              <Badge>Before/After</Badge>
            </CardHeader>
            <CardBody>
              <BeforeAfter
                after="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 450'%3E%3Crect width='800' height='450' fill='%2314b8a6'/%3E%3Ccircle cx='590' cy='150' r='120' fill='%23ffffff' opacity='.4'/%3E%3Cpath d='M80 340h640' stroke='%23fff' stroke-width='28' stroke-linecap='round' opacity='.8'/%3E%3C/svg%3E"
                before="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 450'%3E%3Crect width='800' height='450' fill='%2394a3b8'/%3E%3Cpath d='M80 130h300M80 220h520M80 310h420' stroke='%23fff' stroke-width='26' stroke-linecap='round' opacity='.5'/%3E%3C/svg%3E"
                value={58}
              />
            </CardBody>
          </Card>

          <Card className="showcase-wide">
            <CardHeader>
              <strong>Revenue System</strong>
              <Badge variant="primary">Pricing</Badge>
            </CardHeader>
            <CardBody>
              <PricingTable
                tiers={[
                  {
                    cta: 'Start building',
                    description: 'For solo makers shipping polished prototypes.',
                    features: ['40+ primitives', 'Light and dark tokens', 'Typed APIs'],
                    name: 'Starter',
                    price: '$0',
                    suffix: '/project',
                  },
                  {
                    cta: 'Upgrade team',
                    description: 'For serious teams turning products into systems.',
                    features: [
                      'Premium product sections',
                      'Dashboard and AI surfaces',
                      'Composable app structure',
                    ],
                    highlighted: true,
                    name: 'Studio',
                    price: '$49',
                    suffix: '/seat',
                  },
                  {
                    cta: 'Talk to us',
                    description: 'For brands that need reusable interface kits.',
                    features: ['Launch pages', 'Decision tables', 'Trust components'],
                    name: 'Enterprise',
                    price: 'Custom',
                  },
                ]}
              />
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <strong>Trust Layer</strong>
              <Badge variant="success">Social Proof</Badge>
            </CardHeader>
            <CardBody>
              <div className="field-stack">
                <TestimonialCard
                  author="Maya Chen"
                  avatarFallback="MC"
                  quote="The pack feels like hiring a senior product designer and a React lead at the same time."
                  role="Founder, Northstar Labs"
                />
                <LogoCloud
                  items={[
                    { label: 'Northstar', meta: 'SaaS' },
                    { label: 'Atlas', meta: 'AI ops' },
                    { label: 'Orbit', meta: 'Fintech' },
                  ]}
                  title="Trusted by product teams"
                />
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <strong>Decision Pages</strong>
              <Badge>Compare</Badge>
            </CardHeader>
            <CardBody>
              <ComparisonTable
                columns={[
                  { key: 'basic', label: 'Basic UI kit' },
                  { key: 'jui', label: 'js-ui-library' },
                ]}
                rows={[
                  {
                    cells: { basic: 'Primitives', jui: 'Product systems' },
                    feature: 'Scope',
                  },
                  {
                    cells: { basic: 'Manual', jui: 'Typed components' },
                    feature: 'Integration',
                  },
                  {
                    cells: { basic: 'Plain docs', jui: 'Launch-ready examples' },
                    feature: 'Experience',
                  },
                ]}
              />
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <strong>Feature Story</strong>
              <Badge variant="primary">Launch</Badge>
            </CardHeader>
            <CardBody>
              <FeatureGrid
                features={[
                  {
                    description: 'Ship complete product sections without locking teams into a heavy runtime.',
                    eyebrow: 'Compose',
                    icon: '01',
                    title: 'Blocks, not baggage',
                  },
                  {
                    description: 'Use tokens, responsive layouts, and focused states that feel production-ready.',
                    eyebrow: 'Polish',
                    icon: '02',
                    title: 'Quiet details included',
                  },
                  {
                    description: 'Mix AI, dashboard, pricing, trust, and workflow surfaces in one package.',
                    eyebrow: 'Scale',
                    icon: '03',
                    title: 'From MVP to suite',
                  },
                ]}
              />
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <strong>AI Conversation</strong>
              <Badge variant="warning">Chat</Badge>
            </CardHeader>
            <CardBody>
              <AIChat
                assistantLabel="JUI"
                messages={[
                  {
                    content: 'Create a pricing section with a highlighted studio plan.',
                    id: 'm1',
                    role: 'user',
                  },
                  {
                    content: 'Done. I paired clear tiers with trust cues, concise copy, and responsive cards.',
                    id: 'm2',
                    role: 'assistant',
                  },
                  {
                    content: 'Now make it feel like a premium open-source launch.',
                    id: 'm3',
                    role: 'user',
                  },
                ]}
                userLabel="Builder"
              />
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <strong>Accessibility</strong>
              <Badge>Utility</Badge>
            </CardHeader>
            <CardBody>
              <p className="muted-copy">
                <SkipLink href="#main-preview">Skip to preview</SkipLink>
                <VisuallyHidden>Screen reader text:</VisuallyHidden>
                VisuallyHidden keeps assistive text available without changing
                layout.
              </p>
            </CardBody>
          </Card>
        </section>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Reusable modal"
      >
        <p>
          This dialog is exported from the library and rendered by the preview
          app.
        </p>
        <div className="modal-actions">
          <Button onClick={() => setIsModalOpen(false)} variant="secondary">
            Cancel
          </Button>
          <Button onClick={() => setIsModalOpen(false)}>Confirm</Button>
        </div>
      </Modal>

      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title="Reusable drawer"
      >
        <p>
          Drawers are useful for side panels, filters, details, and editing
          workflows.
        </p>
        <div className="modal-actions">
          <Button onClick={() => setIsDrawerOpen(false)} variant="secondary">
            Close
          </Button>
        </div>
      </Drawer>

      {showToast ? (
        <ToastViewport>
          <Toast
            onClose={() => setShowToast(false)}
            title="Library updated"
            variant="success"
          >
            New components are available from the public entrypoint.
          </Toast>
        </ToastViewport>
      ) : null}
    </main>
  )
}

export default App
