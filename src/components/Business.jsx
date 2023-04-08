import { features } from "../constants" ;
import styles, {layout} from "../style";
import Button from "./Button";

const FeatureCard =({icon, title, content, index})=>{
  return (
    <div className={`flex flex-row p-6 rounded-[20px] ${index!== features.length-1 ? "mb-6": "mb-0"} feature-card`}>
      <div className={` w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain"/>
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px]">
          {title}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
          {content}
        </p>
      </div>
    </div>
  )
  
}

export default function Business() {
  
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the businness, <br className="hidden sm:block"/> we'll handle the money.  
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse asperiores earum doloribus
          facilis vero nobis corporis optio harum sunt repellat deleniti, 
          corrupti iure delectus. Voluptatem aliquid fugit commodi quisquam magnam.
        </p>
        <Button styles="mt-10" text="Get Started"/>
        
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index)=>(
          <FeatureCard key={feature.id} {...feature} index={index}/>
        ))}
      </div>
    </section>
  )
}
