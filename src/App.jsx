import { useState } from 'react';
import { 
  Navbar, 
  Container, 
  SectionHeader, 
  Grid, 
  Card, 
  Button, 
  Flex,
  Hero,
  Badge,
  Sidebar,
  Footer,
  Input,
  Textarea,
  Select,
  Avatar,
  Divider,
  Modal,
  Tabs,
  Pagination,
  Checkbox,
  Radio,
  Switch,
  Progress,
  Alert,
  Tooltip,
  Spinner,
  EmptyState,
  SearchInput,
  Dropdown,
  Toast,
  ListItem,
  DarkModeToggle
} from './components';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('design');
  const [currentPage, setCurrentPage] = useState(2);
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(true);
  const [radioValue, setRadioValue] = useState('option1');
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(true);
  const [progress, setProgress] = useState(65);
  const [showAlert, setShowAlert] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const [todos, setTodos] = useState([
    { id: 1, text: 'Complete project documentation', completed: false },
    { id: 2, text: 'Review pull requests', completed: true },
    { id: 3, text: 'Plan next sprint', completed: false },
  ]);

  return (
    <>
      <Navbar 
        logo={<span>MyUI</span>} 
        links={[
          { label: 'Home', href: '#' },
          { label: 'Components', href: '#components' },
          { label: 'Docs', href: '#docs' },
          { label: 'About', href: '#about' }
        ]}
        actions={<DarkModeToggle />}
      />

      {/* Hero Section using Hero component */}
      <Hero
        title="Build UIs Faster"
        subtitle="A minimal, scalable React UI library. Create beautiful interfaces with reusable components and utility classes. No design skills required."
        primaryAction={{ label: 'Get Started', href: '#get-started' }}
        secondaryAction={{ label: 'View Components', href: '#components' }}
      />

      {/* Features Section */}
      <Container style={{ marginTop: 'var(--space-8)', marginBottom: 'var(--space-8)' }}>
        <SectionHeader 
          title="Why Choose MyUI?" 
          subtitle="Everything you need to build modern web applications quickly and efficiently." 
        />
        
        <Grid columns={3} gap="var(--space-5)">
          <Card 
            title="Reusable Components" 
            description="Pre-built components that work out of the box. Customize with props and CSS variables to match your brand."
          >
            <Flex gap="var(--space-2)" style={{ marginTop: 'var(--space-4)' }}>
              <Badge variant="primary">New</Badge>
              <Badge variant="success">Popular</Badge>
            </Flex>
            <Button variant=" outline" style={{ marginTop: 'var(--space-3)' }}>Learn More</Button>
          </Card>

          <Card 
            title="Consistent Design" 
            description="Design tokens control colors, spacing, and typography. Change once, update everywhere."
          >
            <Flex gap="var(--space-2)" style={{ marginTop: 'var(--space-4)' }}>
              <Badge variant="warning">Updated</Badge>
            </Flex>
            <Button variant="outline" style={{ marginTop: 'var(--space-3)' }}>Learn More</Button>
          </Card>

          <Card 
            title="Fully Responsive" 
            description="All components adapt beautifully to any screen size. Mobile-first approach ensures great UX everywhere."
          >
            <Flex gap="var(--space-2)" style={{ marginTop: 'var(--space-4)' }}>
              <Badge variant="default">Responsive</Badge>
              <Badge variant="primary">Mobile</Badge>
            </Flex>
            <Button variant="outline" style={{ marginTop: 'var(--space-3)' }}>Learn More</Button>
          </Card>
        </Grid>
      </Container>

      {/* Components Showcase */}
      <Container style={{ marginTop: 'var(--space-8)', marginBottom: 'var(--space-8)' }}>
        <SectionHeader 
          title="Component Showcase" 
          subtitle="See all available components in action" 
        />
        
        <Grid columns={2} gap="var(--space-5)">
          <Card title="Buttons">
            <Flex direction="column" gap="var(--space-3)">
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="outline">Outline Button</Button>
            </Flex>
          </Card>

          <Card title="Badges">
            <Flex direction="column" gap="var(--space-3)">
              <Flex gap="var(--space-2)" align="center">
                <Badge variant="default">Default</Badge>
                <Badge variant="primary">Primary</Badge>
                <Badge variant="success">Success</Badge>
              </Flex>
              <Flex gap="var(--space-2)" align="center">
                <Badge variant="warning">Warning</Badge>
                <Badge variant="danger">Danger</Badge>
              </Flex>
              <p style={{ margin: 0, fontSize: 'var(--font-size-sm)', color: 'var(--color-muted-text)' }}>
                Use badges to highlight status, categories, or labels
              </p>
            </Flex>
          </Card>
        </Grid>
      </Container>

      {/* UI Elements */}
      <Container style={{ marginTop: 'var(--space-8)', marginBottom: 'var(--space-8)' }}>
        <SectionHeader 
          title="Forms & UI Essentials" 
          subtitle="Modern, consistent building blocks ready for production." 
        />

        <Grid columns={2} gap="var(--space-5)">
          <Card title="Form Controls" description="Inputs that align with your design tokens and show validation states.">
            <Flex direction="column" gap="var(--space-3)">
              <Input label="Email" type="email" placeholder="you@example.com" />
              <Input label="Password" type="password" placeholder="••••••••" error="Password must be at least 8 characters" />
              <Select 
                label="Role" 
                options={[
                  { label: 'Designer', value: 'designer' },
                  { label: 'Developer', value: 'developer' },
                  { label: 'Product Manager', value: 'pm' },
                ]}
              />
              <Textarea label="Project Notes" placeholder="Share a quick brief..." rows={3} />
            </Flex>
          </Card>

          <Card title="Avatars, Tabs, and Pagination" description="Profile visuals, content switching, and pagination controls.">
            <Flex direction="column" gap="var(--space-4)">
              <Flex align="center" gap="var(--space-3)">
                <Avatar alt="Taylor Green" />
                <Avatar initials="AC" size="lg" />
                <Avatar src="https://i.pravatar.cc/150?img=5" alt="Profile" size="lg" />
              </Flex>

              <Divider />

              <Tabs 
                tabs={[
                  { label: 'Design', value: 'design', content: <p>Design tokens, spacing, and accessible defaults.</p> },
                  { label: 'Build', value: 'build', content: <p>Composable components ready for shipping features.</p> },
                  { label: 'Ship', value: 'ship', content: <p>Responsive layouts and polished interactions.</p> },
                ]}
                value={activeTab}
                onChange={setActiveTab}
              />

              <Flex align="center" justify="space-between">
                <Button variant="outline" onClick={() => setIsModalOpen(true)}>Open Modal</Button>
                <Pagination totalPages={5} currentPage={currentPage} onPageChange={setCurrentPage} />
              </Flex>
            </Flex>
          </Card>
        </Grid>
      </Container>

      {/* Checkboxes, Radios, and Switches */}
      <Container style={{ marginTop: 'var(--space-8)', marginBottom: 'var(--space-8)' }}>
        <SectionHeader 
          title="Interactive Controls" 
          subtitle="Checkboxes, radio buttons, and switches for user input." 
        />

        <Grid columns={3} gap="var(--space-5)">
          <Card title="Checkboxes" description="Select multiple options or toggle states.">
            <Flex direction="column" gap="var(--space-3)">
              <Checkbox 
                label="I agree to the terms and conditions" 
                checked={checkbox1}
                onChange={(e) => setCheckbox1(e.target.checked)}
              />
              <Checkbox 
                label="Subscribe to newsletter" 
                checked={checkbox2}
                onChange={(e) => setCheckbox2(e.target.checked)}
              />
              <Checkbox 
                label="Disabled checkbox" 
                disabled
              />
            </Flex>
          </Card>

          <Card title="Radio Buttons" description="Select a single option from a group.">
            <Flex direction="column" gap="var(--space-3)">
              <Radio 
                label="Option 1" 
                name="radio-group"
                value="option1"
                checked={radioValue === 'option1'}
                onChange={(e) => setRadioValue(e.target.value)}
              />
              <Radio 
                label="Option 2" 
                name="radio-group"
                value="option2"
                checked={radioValue === 'option2'}
                onChange={(e) => setRadioValue(e.target.value)}
              />
              <Radio 
                label="Option 3 (Disabled)" 
                name="radio-group"
                value="option3"
                disabled
              />
            </Flex>
          </Card>

          <Card title="Switches" description="Toggle settings on or off.">
            <Flex direction="column" gap="var(--space-3)">
              <Switch 
                label="Enable notifications" 
                checked={switch1}
                onChange={(e) => setSwitch1(e.target.checked)}
              />
              <Switch 
                label="Dark mode" 
                checked={switch2}
                onChange={(e) => setSwitch2(e.target.checked)}
              />
              <Switch 
                label="Disabled switch" 
                disabled
              />
            </Flex>
          </Card>
        </Grid>
      </Container>

      {/* Progress, Alerts, and Status Components */}
      <Container style={{ marginTop: 'var(--space-8)', marginBottom: 'var(--space-8)' }}>
        <SectionHeader 
          title="Status & Feedback" 
          subtitle="Progress indicators, alerts, and loading states." 
        />

        <Grid columns={2} gap="var(--space-5)">
          <Card title="Progress Bars" description="Show completion status or loading progress.">
            <Flex direction="column" gap="var(--space-4)">
              <div>
                <Progress value={progress} showLabel size="md" variant="primary" />
              </div>
              <div>
                <Progress value={45} showLabel size="sm" variant="success" />
              </div>
              <div>
                <Progress value={75} showLabel size="lg" variant="warning" />
              </div>
              <Button variant="outline" onClick={() => setProgress(Math.min(100, progress + 10))}>
                Increase Progress
              </Button>
            </Flex>
          </Card>

          <Card title="Alerts & Spinners" description="Display important messages and loading states.">
            <Flex direction="column" gap="var(--space-3)">
              {showAlert && (
                <Alert variant="info" title="Info" onClose={() => setShowAlert(false)}>
                  This is an informational message that can be dismissed.
                </Alert>
              )}
              <Alert variant="success" title="Success">
                Your changes have been saved successfully.
              </Alert>
              <Alert variant="warning" title="Warning">
                Please review your settings before continuing.
              </Alert>
              <Alert variant="danger" title="Error">
                Something went wrong. Please try again.
              </Alert>
              <Flex align="center" gap="var(--space-3)">
                <Spinner size="sm" />
                <Spinner size="md" />
                <Spinner size="lg" />
                <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-muted-text)' }}>
                  Loading...
                </span>
              </Flex>
            </Flex>
          </Card>
        </Grid>
      </Container>

      {/* Todo App Example */}
      <Container style={{ marginTop: 'var(--space-8)', marginBottom: 'var(--space-8)' }}>
        <SectionHeader 
          title="Todo App Example" 
          subtitle="A complete task management interface using our components." 
        />

        <Grid columns={2} gap="var(--space-5)">
          <Card title="Task List" description="Interactive todo list with checkboxes.">
            <Flex direction="column" gap="var(--space-2)">
              {todos.length > 0 ? (
                todos.map((todo) => (
                  <ListItem
                    key={todo.id}
                    onClick={() => {
                      setTodos(todos.map(t => 
                        t.id === todo.id ? { ...t, completed: !t.completed } : t
                      ));
                    }}
                    selected={todo.completed}
                  >
                    <Flex align="center" gap="var(--space-3)">
                      <Checkbox 
                        checked={todo.completed}
                        onChange={() => {
                          setTodos(todos.map(t => 
                            t.id === todo.id ? { ...t, completed: !t.completed } : t
                          ));
                        }}
                      />
                      <span style={{ 
                        textDecoration: todo.completed ? 'line-through' : 'none',
                        opacity: todo.completed ? 0.6 : 1,
                        flex: 1
                      }}>
                        {todo.text}
                      </span>
                    </Flex>
                  </ListItem>
                ))
              ) : (
                <EmptyState
                  icon="📝"
                  title="No tasks yet"
                  description="Add a new task to get started"
                />
              )}
            </Flex>
          </Card>

          <Card title="Search & Dropdown" description="Search functionality and dropdown menus.">
            <Flex direction="column" gap="var(--space-4)">
              <SearchInput 
                placeholder="Search tasks..." 
                onSearch={(value) => console.log('Searching for:', value)}
              />
              
              <Divider />

              <Flex direction="column" gap="var(--space-2)">
                <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, color: 'var(--color-text)' }}>
                  Actions Menu
                </span>
                <Dropdown
                  trigger={<Button variant="outline">More Options</Button>}
                  items={[
                    { label: 'Edit', icon: '✏️' },
                    { label: 'Duplicate', icon: '📋' },
                    { divider: true },
                    { label: 'Archive', icon: '📦' },
                    { label: 'Delete', icon: '🗑️', disabled: true },
                  ]}
                  onSelect={(item) => {
                    setShowToast(true);
                    setTimeout(() => setShowToast(false), 3000);
                  }}
                />
              </Flex>

              <Divider />

              <Tooltip content="This is a helpful tooltip" position="top">
                <Button variant="secondary">Hover for tooltip</Button>
              </Tooltip>
            </Flex>
          </Card>
        </Grid>
      </Container>

      {/* Empty States & Additional Components */}
      <Container style={{ marginTop: 'var(--space-8)', marginBottom: 'var(--space-8)' }}>
        <SectionHeader 
          title="Empty States & Utilities" 
          subtitle="Handle empty content gracefully with helpful messages." 
        />

        <Grid columns={2} gap="var(--space-5)">
          <Card>
            <EmptyState
              icon="📭"
              title="No messages"
              description="You don't have any messages yet. Start a conversation to see them here."
              action={<Button variant="primary">New Message</Button>}
            />
          </Card>

          <Card>
            <EmptyState
              icon="📊"
              title="No data available"
              description="There's no data to display at the moment. Check back later or add some data."
              action={<Button variant="outline">Refresh</Button>}
            />
          </Card>
        </Grid>
      </Container>

      {/* Sidebar Demo Section */}
      <Container style={{ marginTop: 'var(--space-8)', marginBottom: 'var(--space-8)' }}>
        <SectionHeader 
          title="Sidebar Navigation" 
          subtitle="Responsive sidebar component with mobile support" 
        />
        
        <Card>
          <p style={{ marginBottom: 'var(--space-4)' }}>
            The Sidebar component provides a collapsible navigation menu. On mobile devices, 
            it automatically becomes a slide-out menu with an overlay. Click the menu button 
            in the top-left corner to see it in action!
          </p>
          <Flex gap="var(--space-2)" align="center">
            <Badge variant="primary">Responsive</Badge>
            <Badge variant="success">Mobile Menu</Badge>
            <Badge variant="default">Accessible</Badge>
          </Flex>
        </Card>
      </Container>

      {/* Sidebar Component - Hidden by default, toggle with button */}
      <Sidebar
        logo={<span>MyUI</span>}
        links={[
          { label: 'Dashboard', href: '#dashboard', icon: '📊' },
          { label: 'Components', href: '#components', icon: '🧩' },
          { label: 'Documentation', href: '#docs', icon: '📚' },
          { label: 'Examples', href: '#examples', icon: '💡' },
          { label: 'Settings', href: '#settings', icon: '⚙️' }
        ]}
        activeLink="#components"
      />

      {/* Usage Example */}
      <Container style={{ marginTop: 'var(--space-8)', marginBottom: 'var(--space-8)' }}>
        <SectionHeader 
          title="Simple & Flexible" 
          subtitle="Build pages with minimal code. No custom CSS needed." 
        />
        
        <Grid columns={4} gap="var(--space-4)">
          <Card 
            title="Card 1" 
            description="Flexible width, auto height. Adapts to content."
          >
            <Badge variant="primary" style={{ marginTop: 'var(--space-3)' }}>Featured</Badge>
          </Card>
          <Card 
            title="Card 2" 
            description="Consistent spacing and styling across all cards."
          />
          <Card 
            title="Card 3" 
            description="Easy to customize with CSS variables."
          >
            <Badge variant="success" style={{ marginTop: 'var(--space-3)' }}>New</Badge>
          </Card>
          <Card 
            title="Card 4" 
            description="Works perfectly in any grid layout."
          />
        </Grid>
      </Container>

      {/* CTA Section */}
      <Container style={{ marginTop: 'var(--space-8)', marginBottom: 'var(--space-8)' }}>
        <Card style={{ textAlign: 'center', padding: 'var(--space-8)' }}>
          <SectionHeader 
            title="Ready to Get Started?" 
            subtitle="Start building your next project with MyUI today. It's free, open-source, and ready to use." 
          />
          <Flex justify="center" gap="var(--space-4)" style={{ marginTop: 'var(--space-6)' }}>
            <Button variant="primary">Install Now</Button>
            <Button variant="outline">View Documentation</Button>
          </Flex>
        </Card>
      </Container>

      {/* Footer Component */}
      <Footer
        logo={<span>MyUI</span>}
        links={[
          {
            title: 'Product',
            items: [
              { label: 'Features', href: '#features' },
              { label: 'Pricing', href: '#pricing' },
              { label: 'Documentation', href: '#docs' },
              { label: 'Changelog', href: '#changelog' }
            ]
          },
          {
            title: 'Company',
            items: [
              { label: 'About', href: '#about' },
              { label: 'Blog', href: '#blog' },
              { label: 'Careers', href: '#careers' },
              { label: 'Contact', href: '#contact' }
            ]
          },
          {
            title: 'Resources',
            items: [
              { label: 'Examples', href: '#examples' },
              { label: 'Templates', href: '#templates' },
              { label: 'Community', href: '#community' },
              { label: 'Support', href: '#support' }
            ]
          }
        ]}
        copyright="© 2024 MyUI. All rights reserved."
        socialLinks={[
          { name: 'GitHub', href: '#github', label: 'GitHub' },
          { name: 'Twitter', href: '#twitter', label: 'Twitter' },
          { name: 'LinkedIn', href: '#linkedin', label: 'LinkedIn' }
        ]}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Quick Modal"
        footer={
          <>
            <Button variant="secondary" onClick={() => setIsModalOpen(false)}>Close</Button>
            <Button variant="primary">Save</Button>
          </>
        }
      >
        <p style={{ margin: 0 }}>
          Use modals for confirmations, short forms, or focused flows.
        </p>
      </Modal>

      {/* Toast Notification */}
      {showToast && (
        <div style={{
          position: 'fixed',
          bottom: 'var(--space-4)',
          right: 'var(--space-4)',
          zIndex: 1000
        }}>
          <Toast
            message="Action completed successfully!"
            variant="success"
            onClose={() => setShowToast(false)}
          />
        </div>
      )}
    </>
  );
}
