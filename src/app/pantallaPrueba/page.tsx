import Button from "../componets/atomic/button";
import Head from "../componets/organismos/head";
import CardLarge from "../componets/moleculas/cardLarge";

import {
  titulos,
  parrafosUsar,
  imagenData,
  routes,
  buttons,
} from "../data/info";

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

      <CardLarge
        image={imagenData}
        imageIndex={3}
        parrafoIndex={4}
        parrafo={parrafosUsar}
        width={400}
        height={400}
        valueButton={buttons[2].button}
        routeButton={routes[1].path}
      />

      <div className="flex justify-center items-center m-5">
        <Button value={"Volver"} route={"/"} />
      </div>
    </div>
  );
}
