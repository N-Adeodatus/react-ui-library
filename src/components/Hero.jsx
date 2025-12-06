import Container from './Container';
import SectionHeader from './SectionHeader';
import Flex from './Flex';
import Button from './Button';

export default function Hero({ 
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  children,
  className = '',
  ...rest 
}) {
  return (
    <section className={`hero ${className}`} {...rest}>
      <Container>
        <SectionHeader title={title} subtitle={subtitle} />
        
        {(primaryAction || secondaryAction) && (
          <Flex justify="center" gap="var(--space-4)" style={{ marginTop: 'var(--space-6)' }}>
            {primaryAction && (
              <Button 
                variant={primaryAction.variant || 'primary'}
                href={primaryAction.href}
                onClick={primaryAction.onClick}
              >
                {primaryAction.label}
              </Button>
            )}
            {secondaryAction && (
              <Button 
                variant={secondaryAction.variant || 'outline'}
                href={secondaryAction.href}
                onClick={secondaryAction.onClick}
              >
                {secondaryAction.label}
              </Button>
            )}
          </Flex>
        )}

        {children}
      </Container>
    </section>
  );
}

