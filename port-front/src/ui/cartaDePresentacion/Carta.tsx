
// import Image from "next/image"
// import styles from "./pres.module.css"

export default function Carta (){
  return (
    <section className={`border-red-600 border-2 p-2 lg:w-1/3 w-screen h-auto`}>
      <div className={`flex`}>
        <img src={`https://i.pinimg.com/564x/5a/f7/c3/5af7c31caf9cfde7d6e0fd803d09be44.jpg`}
          // width={500}
          // height={500}
          className="rounded-full w-auto h-auto"
          alt="Foto de Ruby Rose"
          // priority
       />
      </div>
      <p className="flex text-wrap text-center text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, suscipit architecto. Ad, vero! Incidunt expedita, eaque recusandae molestias dignissimos porro temporibus, tenetur ex distinctio necessitatibus corporis ab ipsa est accusantium?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis laboriosam magnam, ducimus fuga ut illum voluptates molestiae sit at quis corporis distinctio hic earum laborum officia ad asperiores unde quod.
      </p>
    </section>
  )
}