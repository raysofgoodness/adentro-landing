import styles from './Choose.module.scss';
import Image from 'next/image';

interface Advantages {
    title: string,
    description: string,
    id: number,
}

const Choose: React.FC = () => {
    const advantages: Advantages[] = [
        {
            title: 'Advanced Automation',
            description: 'Leverage the power of AI to automate complex security tasks, reducing manual effort ' +
                'and minimizing human error.',
            id: Math.random(),
        },
        {
            title: 'Leveraging Large Language Models (LLM)',
            description: 'Our automated frameworks ensure your organization remains compliant with the latest ' +
                'regulations, mitigating risks and safeguarding your reputation.',
            id: Math.random(),
        },
        {
            title: 'SAST/DAST Scanning',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ' +
                'ut labore et dolore magna aliqua.',
            id: Math.random(),
        },
        {
            title: 'Compliance Governance',
            description: 'Our automated frameworks ensure your organization remains compliant with the latest ' +
                'regulations, mitigating risks and safeguarding your reputation.',
            id: Math.random(),
        },
        {
            title: 'DevSecOps',
            description: 'Integrate security seamlessly into your development lifecycle with our DevSecOps ' +
                'approach, enhancing collaboration and delivering robust, secure applications faster.',
            id: Math.random(),
        },
        {
            title: 'Vulnerability Management',
            description: 'Proactively manage and remediate vulnerabilities with our comprehensive solution, ' +
                'ensuring your systems remain secure and resilient against emerging threats.',
            id: Math.random(),
        },
    ];

    return (
        <section className={styles.choose}>
            <div className="container">
                <h2 className={`${styles.title} section-title`}>
                    Why choose us?
                </h2>
                <ul className={styles.advantages}>
                    {advantages.map((item, index) => (
                        <li key={item.id} className={styles.advantages__item}>
                            <Image
                                src={`/advantage-${index + 1}.png`}
                                alt={`Advantage ${index + 1}`}
                                width={88}
                                height={88}
                            />
                            <div className={styles.advantages__content}>
                                <h3 className={styles.advantages__title}>
                                    {item.title}
                                </h3>
                                <p className={styles.advantages__description}>
                                    {item.description}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Choose;
