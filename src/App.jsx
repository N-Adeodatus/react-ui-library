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
  Pagination
} from './components';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('design');
  const [currentPage, setCurrentPage] = useState(2);

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
            <Button variant="outline" style={{ marginTop: 'var(--space-3)' }}>Learn More</Button>
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
    </>
  );
}
