import styles from './Footer.module.scss';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={`${styles.footer__container} container`}>
                <h2 className={styles.title}>
                    Let’s make <br/>the connection!
                </h2>
                <a className={styles.link} href="mailto:email@email.com">email@email.com</a>
                <div className={styles.footer__bottom}>
                    <p>
                        &copy; 2024 adentro AG | Sihlbruggstrasse 109 | CH 6340 Baar ZG | Switzerland
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
