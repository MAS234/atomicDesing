import TituloDashboard from "./components/atomic/tituloDashboard"
import DashFirstPart from "./components/organismos/dashFirstPart"
import { titulos, imagenData, textoCardsDash } from "../data/info"

export default function page() {
    return (

        <>
        <TituloDashboard
        value={titulos[5].titulo}
        />

        <div className="w-[90%] m-auto h-auto transparencia shadow-lg rounded-lg p-5">
            <DashFirstPart
            image={imagenData}
            indexImage={4}
            indexImageTwo={5}
            indexImageThree={6}
            parrafo={textoCardsDash[0].texto}
            width={100}
            heigth={300}
            titulo={titulos[0].titulo}
            />
        </div>
        </>
    )}