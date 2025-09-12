import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";
import dogImg from '../../../public/hero-dog.webp'
import Image from "next/image";


export function Hero() {
  return (
    <section className="bg-[#e84c3d] text-white relative overflow-hidden">
      <div className="container mx-auto py-16 px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
          <div className="space-y-6">
            <h1 className="3x1 md:text-4xl lg-:text-5xl font-bold leading-10">
              Seu pet merece cuidado, carinho e atenção especial.
            </h1>
            <p className="lg:text-lg">
              Oferecemos os melhores serviços para garantir o bem estar e a
              felicidade do seu amigo de quatro patas.
            </p>
          </div>

          <a
            href="#"
            className="bg-green-500 px-2 rounded-md font-semibold flex items-center justify-center w-fit"
          >
            <WhatsappLogoIcon className="" />
            Entrar em contato
          </a>

          <div className="mt-8">
            <p className="text-sm mb-2">
              <b className="bg-black text-white px-2 py-5 rounded-md">5%</b>de
              desconto na primeira compra.
            </p>
          </div>

          <div className="space-y-6">
            <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
              <div className="space-y-6"></div>
              <div className="hidden md:block h-full">
                <Image
                src={dogImg}
                alt='Foto do dog'
                className="object-contain"/>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
