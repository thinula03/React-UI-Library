import { useState } from 'react'
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
  Modal,
  Pagination,
  Progress,
  RadioGroup,
  Select,
  Skeleton,
  Spinner,
  Switch,
  Tabs,
  TextInput,
  Textarea,
  Toast,
  ToastViewport,
  Tooltip,
} from './index'
import './App.css'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')
  const [showToast, setShowToast] = useState(false)
  const [page, setPage] = useState(2)
  const [openAccordion, setOpenAccordion] = useState('tokens')
  const [density, setDensity] = useState('comfortable')

  return (
    <main className="preview-shell">
      <div className="preview-panel">
        <p className="eyebrow">React UI Library</p>
        <h1>Build once. Reuse everywhere.</h1>
        <p className="intro">
          This workspace is ready for component development, local preview, and
          package builds.
        </p>

        <section className="component-grid" aria-label="Component preview">
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
              <Badge variant="primary">Modal</Badge>
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
                <Progress label="Library coverage" value={72} />
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
