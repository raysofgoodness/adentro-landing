import styles from './Button.module.scss';

const Button: React.FC = () => {
    return (
        <a className={styles.button} href="#">
            Get started
        </a>
    );
};

export default Button;
