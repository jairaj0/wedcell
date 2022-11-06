import styles from './Card.module.scss';

export default function Card({img}) {
    return(
        <div className={`${styles.card} flex-center column`}>
        <div style={{ backgroundImage: `url(${img.src})` }} className={`${styles.imagebox} flex-end`}>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, delectus.</h1>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error blanditiis sequi labore soluta illum atque at sunt, rem eligendi obcaecati maiores voluptate a vel earum culpa nisi similique. Veniam, fuga.</p>
        </div>
    )
}