import Titulo from "@/app/componets/atomic/titulo";
import Button from "../componets/atomic/button";
import Head from "../componets/organismos/head";

import { titulos, parrafosUsar, imagenData } from "../data/info";

export default function page() {
  return (
    <div>

      <Head
      titulo={titulos}
      parrafo={parrafosUsar}
      imagen={imagenData}
      tituloIndex={0}
      tituloIndexDos={4}
      imagenIndex={2}
      parrafoIndex={3}
      />

      <div className="flex justify-center items-center">
        <Button value={"Volver"} route={"/"} />
      </div>
    </div>
  );
}
