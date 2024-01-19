import TituloComun from "../atomic/titutoComun"
import ParrafoDashboard from "../atomic/parrafoDashboard"
import IconoDashboard from "../atomic/iconoDashboard"

type Props={
    titulo:string;
    parrafo:string;
    width:number;
    heigth:number;
    image:Array<{src:string, alt:string}>
    indexImage:number
}

export default function CardDashboard({titulo, parrafo,image, indexImage}: Props) {
    return (
        <div className="bg-blue-400 w-96 rounded-lg h-72 p-5 shadow-lg">
            <TituloComun
            value={titulo}
            />
            <div className="flex justify-center items-center gap-5">
            <ParrafoDashboard
            value={parrafo}
            />
    
            <IconoDashboard
            width={300}
            height={300}
            image={image[indexImage]}
            />
            </div>
        </div>
    )
  }