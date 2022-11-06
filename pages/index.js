import Articles from '../Components/Articles/Articles'
import Lookingfor from '../Components/Lookingfor/Lookingfor'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <section className="container">
      <Lookingfor />
      <Articles />
    </section>
  )
}
