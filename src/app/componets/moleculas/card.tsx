import Titulo from "../atomic/titulo"
import Button from "../atomic/button"
import Parrafo from "../atomic/parrafo"
import ImageAtomic from "../atomic/image"

type Props = {
  value: string,
  textButton: string
  textButtonTwo: string
  textParrafo: string
  imagen: Array<{ src: string; alt: string }>;
  route: Array<{ path: string }>;
}

export default function Card({ value, textButton, textButtonTwo, textParrafo, imagen, route }: Props) {
  return (
    <div className="w-auto h-auto bg-[#F9F9F9] rounded-md shadow-md ">
      <Titulo
        value={value}
      >
      </Titulo>

{/* //IMAGEN  */}
      <div className="flex justify-center items-center">
      <ImageAtomic image={imagen[0]} height={500} width={500}/>
      </div>

      <div>
        <Parrafo
          value={textParrafo}
        >
        </Parrafo>
      </div>

      <div className="flex flex-col md:flex-row justify-center lg:justify-evenly w-full max-w-screen-xl mx-auto items-center p-5 gap-2">
        <Button
        route={route[0].path}
          value={textButton}
        ></Button>

        <Button
          route={route[0].path}
          value={textButtonTwo}
        ></Button>
      </div>
    </div>
  )
}