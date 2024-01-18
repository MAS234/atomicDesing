import Titulo from "../atomic/titulo";
import ImageAtomic from "../atomic/image";
import Parrafo from "../atomic/parrafo";

type Props = {
  titulo: Array<{ titulo: string }>;
  imagen: Array<{ src: string; alt: string }>;
  parrafo: Array<{ texto: string }>;
  tituloIndex: number;
  imagenIndex: number;
  parrafoIndex: number;
  tituloIndexDos: number;
};

export default function Head({
  titulo,
  imagen,
  parrafo,
  tituloIndex,
  tituloIndexDos,
  imagenIndex,
  parrafoIndex,
}: Props) {
  return (
    <div>
      <Titulo value={titulo[tituloIndex].titulo} />

      <div className="flex flex-col p-5 lg:flex-row lg:items-center lg:justify-evenly">
        <div className="lg:w-[50%] p-5 flex justify-center items-center">
          <ImageAtomic image={imagen[imagenIndex]} width={700} height={800} />
        </div>
        <div className="mt-4 lg:mt-0 lg:w-[50%] ">
          <Titulo value={titulo[tituloIndexDos].titulo} />
          <Parrafo value={parrafo[parrafoIndex].texto} />
        </div>
      </div>
    </div>
  );
}
