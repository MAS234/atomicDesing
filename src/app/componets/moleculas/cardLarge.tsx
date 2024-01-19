import ImageAtomic from "../atomic/image";
import Parrafo from "../atomic/parrafo";
import Titulo from "../atomic/titulo";
import Button from "../atomic/button";

type Props = {
  image: Array<{ src: string; alt: string }>;
  width: number;
  height: number;
  parrafo: Array<{ texto: string }>;
  imageIndex: number;
  parrafoIndex: number;
  valueButton: string;
  routeButton:string
};

export default function CardLarge({
  image,
  width,
  height,
  parrafo,
  imageIndex,
  parrafoIndex,
  valueButton,
  routeButton,
}: Props) {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-evenly items-center p-5 bg-[#FAFBFF] shadow-lg m-5 rounded-md">
        {/* Sección de la imagen */}
        <div className="w-full lg:w-[40%] flex justify-center items-center mb-4 lg:mb-0">
          <ImageAtomic
            image={image[imageIndex]}
            width={width}
            height={height}
          />
        </div>

        {/* Sección del texto */}
        <div className="w-full lg:w-[40%]">
          <Titulo value="Ayuda del atomic design" />
          <Parrafo value={parrafo[parrafoIndex].texto} />
          <div className="flex justify-center items-center">
          <Button
          value={valueButton}
          route={routeButton}
          />
          </div>
        </div>
      </div>
    </>
  );
}
