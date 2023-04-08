import { card } from "../assets"
import styles ,{layout} from "../style";
import Button from './Button'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Let's talk about me <br className="sm:block hidden"/> in few easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Eligendi unde mollitia labore at repellendus adipisci 
          corporis voluptatum porro illo odio voluptatem ratione 
          libero, cum sequi? Quaerat cumque itaque dolor porro!
        </p>
        <Button styles="mt-10" text="Let's gooo"/>
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] h-[100%]"/>
      </div>
    </section>
  )
}

export default CardDeal