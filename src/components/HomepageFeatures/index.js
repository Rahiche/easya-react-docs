import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Blockchain Integration',
    emoji: '🔗',
    description: (
      <>
        Connect to XRPL blockchain and manage transactions using BlockchainProvider.
      </>
    ),
  },
  {
    title: 'React Components',
    emoji: '⚛️',
    description: (
      <>
        Ready to use React components, just plug and play.
      </>
    ),
  },

  {
    title: 'Customization',
    emoji: '🎨',
    description: (
      <>
        Flexible theming system to match your styles while preserving functionality.
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