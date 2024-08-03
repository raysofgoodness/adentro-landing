import styles from './Search.module.scss';
import Image from 'next/image';

interface Items {
    title: string,
    description: string,
    id: number,
}

const Search: React.FC = () => {
    const items: Items[] = [
        {
            title: 'Real-Time Threat Detection',
            description: 'Quickly identify and respond to security incidents with real-time data analysis.',
            id: Math.random(),
        },
        {
            title: 'Enhanced Data Interpretation',
            description: 'LLMs provide deep understanding and context, making sense of complex data patterns ' +
                'and correlations.',
            id: Math.random(),
        },
        {
            title: 'Scalable Solutions',
            description: 'Both Elastic Search and LLMs are designed to scale with your business, ensuring ' +
                'consistent performance as your data grows.',
            id: Math.random(),
        }
    ];

    return (
        <section className={styles.search}>
            <div className="container">
                <h2 className="big-title">
                    <strong>
                        Elastic Search and LLM
                    </strong>
                    — a powerful combination
                </h2>
                <div className={styles.description}>
                    <p>
                        Elastic Search&apos;s robust data indexing and search capabilities combined with the
                        analytical power of Large Language Models (LLM) offer unparalleled
                        insights into your security data. This combination allows for:
                    </p>
                </div>
                <ul className={styles.list}>
                    {items.map((item, index) => (
                        <li key={item.id} className={styles.list__item}>
                            <span className={styles.count}>
                                {index + 1}
                            </span>
                            <h3 className={styles.list__title}>
                                {item.title}
                            </h3>
                            <p className={styles.list__description}>
                                {item.description}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Search;
