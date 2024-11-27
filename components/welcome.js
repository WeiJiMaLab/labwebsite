import styles from '../styles/welcome.module.css';
import Parallax from './parallax';

export default function Welcome(){
    const items = {
        name : "welcome-banner",
        background: "linear-gradient(rgba(255, 255, 255, 1))",
        backgrounddepth: "-0.3",
        layers: [ 
        // {image: "https://images.unsplash.com/photo-1703785977558-37bcbbf3a1e1?q=80&w=4643&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", ydepth: "-1.0", xdepth: "", name: "screen wlayer1"},
        // {image: "/images/profile-2.png", ydepth: "-1.0", xdepth: "0.35", name: "screen wlayer2"},
        // {image: "/images/profile-1.png", ydepth: "-1.0", xdepth: "0.85", name: "screen wlayer3"},
        ]
    }

    return (
        <section id="welcome" style={{height: "100vh"}}>
            <Parallax items={items}>
            </Parallax>
            <div className={styles.header}>
                <h1 className={styles.headerTitle}>
                    Wei Ji Ma Lab
                </h1>
                <h2 className={styles.headerSubtitle}>
                    The computational study of decision-making
                </h2>
            </div>
        </section>
    );
}