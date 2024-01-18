import Cards from "./componets/organismos/cards";
import Head from "./componets/organismos/head";

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
    </div>
  );
}
