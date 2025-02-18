import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Seamless Blockchain Integration',
    emoji: '🔗',
    description: (
      <>
        Quick and easy integration with XRPL blockchain through our
        BlockchainProvider. Connect wallets and manage transactions with just
        a few lines of code.
      </>
    ),
  },
  {
    title: 'Complete Token Management',
    emoji: '💰',
    description: (
      <>
        Comprehensive suite of components for token operations including
        <code>BalanceDisplay</code>, <code>TransactionForm</code>, and
        <code>TrustLineForm</code> for complete token lifecycle management.
      </>
    ),
  },
  {
    title: 'Modern React Components',
    emoji: '⚛️',
    description: (
      <>
        Built with modern React practices, featuring dark/light mode support
        and responsive design. Fully customizable components that work seamlessly
        with your existing React application.
      </>
    ),
  },
  {
    title: 'Developer-First Experience',
    emoji: '👩‍💻',
    description: (
      <>
        Designed with developers in mind - TypeScript support, comprehensive
        documentation, and intuitive APIs make blockchain development
        straightforward and efficient.
      </>
    ),
  },
  {
    title: 'Secure by Design',
    emoji: '🔒',
    description: (
      <>
        Built-in security best practices for wallet integration and transaction
        handling. Safely manage digital assets with components that prioritize
        security.
      </>
    ),
  },
  {
    title: 'Extensive Customization',
    emoji: '🎨',
    description: (
      <>
        Flexible theming system allows you to match your brand's look and feel.
        Customize components with your own styles while maintaining functionality.
      </>
    ),
  },
];

function Feature({emoji, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <span className={styles.featureEmoji} role="img" aria-label={title}>
          {emoji}
        </span>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}