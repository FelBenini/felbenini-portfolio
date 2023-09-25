import AnimatedLogo from '../AnimatedLogo';
import styles from './styles.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <AnimatedLogo scale={64} />
    </footer>
  )
}

export default Footer;
