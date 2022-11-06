import styles from "./Articles.module.scss";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import Card from "../Card/Card";

import one  from '../../Assets/1.png'
import two  from '../../Assets/2.png'
import three  from '../../Assets/3.png'
import four  from '../../Assets/4.png'
import five  from '../../Assets/5.png'
import six  from '../../Assets/6.png'

const imgs = [ one , two , three , four , five , six ]

export default function Articles() {
  return (
    <section className={styles.articles}>
      <div className={`flex`}>
        <div className={`${styles.search_bar} flex`}>
         <span className="flex-center"> <CiSearch /></span>
          <input type="search" name="search" id="search" placeholder="Search Wedding Articles" />
        </div>
        <Link className={[styles.link , styles.active].join(" ")} href="/">Recent</Link>
        <Link className={styles.link} href="/">Trending</Link>
      </div>

      <div className={styles.cards}>
      {
        imgs.map((img , i) => <Card key={i} img={img} />)
      }
      </div>
    </section>
  );
}
