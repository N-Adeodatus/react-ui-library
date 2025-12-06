import Container from './Container';
import Grid from './Grid';
import Flex from './Flex';

export default function Footer({ 
  logo,
  links = [],
  copyright = '',
  socialLinks = [],
  className = '', 
  ...rest 
}) {
  const currentYear = new Date().getFullYear();
  const defaultCopyright = `© ${currentYear} ${logo || 'MyUI'}. All rights reserved.`;

  return (
    <footer className={`footer ${className}`} {...rest}>
      <Container>
        <Grid columns={4} gap="var(--space-6)" style={{ marginBottom: 'var(--space-6)' }}>
          {/* Brand column */}
          <div className="footer-brand">
            {logo && <div className="footer-logo">{logo}</div>}
            {copyright && <p className="footer-copyright">{copyright}</p>}
            {!copyright && <p className="footer-copyright">{defaultCopyright}</p>}
          </div>

          {/* Links columns */}
          {links.map((linkGroup, i) => (
            <div key={i} className="footer-links">
              {linkGroup.title && <h4>{linkGroup.title}</h4>}
              <ul>
                {linkGroup.items?.map((link, j) => (
                  <li key={j}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Grid>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <Flex justify="space-between" align="center" style={{ flexWrap: 'wrap', gap: 'var(--space-4)' }}>
            <p className="footer-copyright-small">
              {copyright || defaultCopyright}
            </p>
            {socialLinks.length > 0 && (
              <Flex gap="var(--space-3)">
                {socialLinks.map((social, i) => (
                  <a 
                    key={i}
                    href={social.href}
                    className="footer-social"
                    aria-label={social.label || social.name}
                  >
                    {social.icon || social.name}
                  </a>
                ))}
              </Flex>
            )}
          </Flex>
        </div>
      </Container>
    </footer>
  );
}

