import AnimatedLogo from '../AnimatedLogo';
import styles from './styles.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <AnimatedLogo scale={64} />
      <p>
        Felipe Benini Web Deveveloper 2023
      </p>
    </footer>
  )
}

export default Footer;
