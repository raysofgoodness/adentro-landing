import styles from './Partner.module.scss';

const Partner: React.FC = () => {
    return (
        <section className={styles.partner}>
            <div className="container">
                <h2 className={styles.hidden}>Partner</h2>
                <div className={styles.description}>
                    <p>
                        Partner with us to revolutionize your security operations, achieve unparalleled efficiency,
                        and maintain unwavering compliance in an increasingly complex digital world.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Partner;
