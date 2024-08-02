import styles from './Expertise.module.scss';
import Image from 'next/image';

interface ImageData {
    width: number;
    height: number;
    id: number;
}

const Expertise: React.FC = () => {
    const imageData: ImageData[] = [
        { width: 224, height: 76, id: Math.random(), },
        { width: 226, height: 66, id: Math.random(), },
        { width: 269, height: 42, id: Math.random(), },
        { width: 118, height: 71, id: Math.random(), },
    ];

    return (
        <section className={styles.expertise}>
            <div className="container">
                <h2 className={`${styles.title} section-title`}>
                    Our expertise in automation
                </h2>
                <div className={styles.description}>
                    <p>
                        We specialize in developing sophisticated automation frameworks using the latest GenAI
                        technologies, seamlessly integrating Splunk and Elastic.
                    </p>
                </div>
                <div className={styles.bottom}>
                    <ul className={styles.partners}>
                        {imageData.map((image, index) => (
                            <li key={image.id} className={styles.partners__item}>
                                <Image
                                    src={`/partner-${index + 1}.png`}
                                    alt={`Partner ${index + 1}`}
                                    width={image.width}
                                    height={image.height}
                                />
                            </li>
                        ))}
                    </ul>
                    <div className={styles.description}>
                        <p>
                            Our solutions empower businesses to streamline their security operations, enhance
                            efficiency, and ensure robust compliance with ever-evolving regulatory requirements.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Expertise;
