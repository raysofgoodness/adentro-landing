import styles from './Hero.module.scss';
import Image from 'next/image';
import Button from "@/app/components/Button/Button";

const Hero: React.FC = () => {
    return (
        <section className={styles.hero}>
            <Image
                className={styles.image}
                src="/hero-image.png"
                alt="logo"
                width={739}
                height={694}
                layout="responsive"
                priority
            />
            <div className={`${styles.container} container`}>
                <h1 className={styles.title}>
                    Efficiency comes with <strong>automation</strong>
                </h1>
                <div className={styles.description}>
                    <p>
                        In today's dynamic digital landscape, efficient security operations are crucial
                        for organizational success and resilience. Cutting-edge automation transforms compliance
                        governance and risk assessment.
                    </p>
                </div>
                <div className={styles.bottom}>
                    <Button/>
                    <span className={styles.mark}>Pushing the limits since 2013
                    <Image
                        className={styles.mark__image}
                        src="/mark.svg"
                        alt="logo"
                        width={18}
                        height={14}
                    />
                </span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
