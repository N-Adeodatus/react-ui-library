import { Navbar, Container, SectionHeader, Grid, Card, Button, Flex } from './components';

export default function App() {
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

      {/* Hero Section */}
      <Container style={{ marginTop: 'var(--space-8)', marginBottom: 'var(--space-8)' }}>
        <SectionHeader 
          title="Build UIs Faster" 
          subtitle="A minimal, scalable React UI library. Create beautiful interfaces with reusable components and utility classes. No design skills required." 
        />

        <Flex justify="center" gap="var(--space-4)" style={{ marginTop: 'var(--space-6)' }}>
          <Button variant="primary">Get Started</Button>
          <Button variant="outline">View Components</Button>
        </Flex>
      </Container>

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
            <Button variant="outline">Learn More</Button>
          </Card>

          <Card 
            title="Consistent Design" 
            description="Design tokens control colors, spacing, and typography. Change once, update everywhere."
          >
            <Button variant="outline">Learn More</Button>
          </Card>

          <Card 
            title="Fully Responsive" 
            description="All components adapt beautifully to any screen size. Mobile-first approach ensures great UX everywhere."
          >
            <Button variant="outline">Learn More</Button>
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

          <Card title="Layout Primitives">
            <p>Use Grid and Flex components to create any layout structure. They're fully responsive and work seamlessly together.</p>
            <Flex gap="var(--space-2)" style={{ marginTop: 'var(--space-4)' }}>
              <div style={{ 
                padding: 'var(--space-3)', 
                background: 'var(--color-primary)', 
                color: 'var(--color-white)',
                borderRadius: 'var(--radius-md)',
                fontSize: 'var(--font-size-sm)'
              }}>
                Grid
              </div>
              <div style={{ 
                padding: 'var(--space-3)', 
                background: 'var(--color-primary)', 
                color: 'var(--color-white)',
                borderRadius: 'var(--radius-md)',
                fontSize: 'var(--font-size-sm)'
              }}>
                Flex
              </div>
              <div style={{ 
                padding: 'var(--space-3)', 
                background: 'var(--color-primary)', 
                color: 'var(--color-white)',
                borderRadius: 'var(--radius-md)',
                fontSize: 'var(--font-size-sm)'
              }}>
                Container
              </div>
            </Flex>
          </Card>
        </Grid>
      </Container>

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
          />
          <Card 
            title="Card 2" 
            description="Consistent spacing and styling across all cards."
          />
          <Card 
            title="Card 3" 
            description="Easy to customize with CSS variables."
          />
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
    </>
  );
}
