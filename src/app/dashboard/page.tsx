import TituloDashboard from "./components/atomic/tituloDashboard";
import DashFirstPart from "./components/organismos/dashFirstPart";
import { titulos, imagenData, textoCardsDash } from "../data/info";
import GoBack from "./components/atomic/goBack";

export default function page() {
  return (
    <>
      <div className=" m-auto w-full h-[100vh] shadow-lg rounded-lg p-2">
        <div className="fondoDash rounded-md ">
          <div className="flex justify-center items-center"></div>
          <div className="flex items-start m-5">
            <GoBack />
          </div>
          <TituloDashboard value={titulos[5].titulo} />
          <DashFirstPart
            image={imagenData}
            indices={[4, 5, 6]}
            parrafo={textoCardsDash[0].texto}
            titulo={titulos[0].titulo}
          />
          <div className="w-full h-24 transparent justify-center flex items-center">
            <h1  className="text-center text-4xl uppercase text-white ">the end</h1>
          </div>
        </div>
      </div>
    </>
  );
}
