import styles from './Lookingfor.module.scss'

export default function Lookingfor() {
  return (
    <section className={styles.lookingfor}>
      <div className={`${styles.cards} flex`}>
      <div className={`${[styles.card , styles.card1].join(" ")} flex-end`}><h1>Award winning Photography at Wedding</h1></div>
      <div className={`${[styles.card , styles.card2].join(" ")} flex-end`}><h1>Award winning Photography at Wedding</h1></div>
      <div className={`${[styles.card , styles.card3].join(" ")} flex-end`}><h1>Award winning Photography at Wedding</h1></div>
      </div>

      <div className={`${styles.searchBox} flex-center column`}>
      <h1>I am Looking For</h1>
      <select name="wedding_vendor" id="wedding_vendor">
        <option value="wedding_vendor">wedding vendor</option>
        <option value="wedding_vendor1">wedding vendor one</option>
        <option value="wedding_vendor2">wedding vendor Two</option>
      </select>
      <select name="city" id="city">
        <option value="city">City</option>
        <option value="city1">Delhi</option>
        <option value="city2">Kolkata</option>
      </select>
      <button className="btn">Search</button>
      </div>

    </section>
  )
}