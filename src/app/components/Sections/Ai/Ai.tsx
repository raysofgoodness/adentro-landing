import styles from './Ai.module.scss';
import Image from "next/image";

interface Modules {
    title: string,
    description: string,
    id: number,
}

const Ai: React.FC = () => {
    const modules: Modules[] = [
        {
            title: 'AI-Driven Security Monitoring',
            description: 'Our GenAI modules continuously monitor and analyze network traffic, detecting suspicious ' +
                'activities and potential threats with unprecedented accuracy.',
            id: Math.random(),
        },
        {
            title: 'Automated Incident Respons',
            description: 'GenAI-powered automation enables rapid incident response, executing predefined actions ' +
                'to mitigate threats and minimize damage.',
            id: Math.random(),
        },
        {
            title: 'Predictive Analysis',
            description: 'Utilize GenAI to predict potential security breaches and vulnerabilities, ' +
                'allowing proactive measures to strengthen your defenses.',
            id: Math.random(),
        },
        {
            title: 'Process Optimization',
            description: 'Automate routine processes and workflows, freeing up valuable resources and enhancing ' +
                'overall operational efficiency.',
            id: Math.random(),
        },
        {
            title: 'Dynamic Threat Intelligence',
            description: 'GenAI modules aggregate and analyze threat intelligence from multiple sources, providing ' +
                'real-time updates and actionable insights to stay ahead of emerging threats.',
            id: Math.random(),
        },
    ];

    return (
        <section className={styles.ai}>
            <div className="container">
                <h2 className="big-title">
                    <strong>
                        GenAI Modules
                    </strong>
                    in security and process automation
                </h2>
                <div className={styles.description}>
                    <p>
                        Our GenAI modules are at the forefront of security and process automation,
                        providing innovative solutions tailored to your needs. Key features include:
                    </p>
                </div>
                <ul className={styles.list}>
                    {modules.map((module, index) => (
                        <li key={module.id} className={styles.list__item}>
                            <Image
                                src={`/module-${index + 1}.png`}
                                alt={`Module image-${index + 1}`}
                                width={58}
                                height={58}
                            />
                            <h3 className={styles.list__title}>{module.title}</h3>
                            <p className={styles.list__description}>{module.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Ai;
