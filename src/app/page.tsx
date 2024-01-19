import Cards from "./componets/organismos/cards";
import Head from "./componets/organismos/head";
import CardLarge from "./componets/moleculas/cardLarge";

import {
  parrafosUsar,
  titulos,
  buttons,
  routes,
  imagenData,
} from "./data/info";

export default function Home() {
  return (
    <div>
      <Head
        titulo={titulos}
        imagen={imagenData}
        parrafo={parrafosUsar}
        tituloIndex={0}
        tituloIndexDos={3}
        imagenIndex={1}
        parrafoIndex={2}
      />

      <Cards
        value={titulos[1].titulo}
        textButton={buttons[0].button}
        textButtonTwo={buttons[1].button}
        textParrafo={parrafosUsar[0].texto}
        valueTwo={titulos[2].titulo}
        textParrafoTwo={parrafosUsar[1].texto}
        imagen={imagenData}
        route={routes}
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

    </div>
  );
}
