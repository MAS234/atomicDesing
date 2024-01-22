import TituloComun from "../atomic/titutoComun"
import ParrafoDashboard from "../atomic/parrafoDashboard"
import IconoDashboard from "../atomic/iconoDashboard"

type Props={
    titulo:string;
    parrafo:string;
    image:Array<{src:string, alt:string}>
    indexImage:number
}

export default function CardDashboard({titulo, parrafo,image, indexImage}: Props) {
    return (
        <div className="transparent w-full md:w-80 rounded-lg md:h-auto p-3 m-5 shadow-lg">
            <TituloComun
            value={titulo}
            />
            <div className="flex flex-col md:flex-row justify-center items-center gap-5">
            <ParrafoDashboard
            value={parrafo}
            />
    
            <IconoDashboard
            image={image[indexImage]}
            />
            </div>
        </div>
    )
  }