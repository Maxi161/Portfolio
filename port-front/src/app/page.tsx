import Carta from "@/ui/cartaDePresentacion/Carta";
import Info from "@/ui/informacion/Info";
import Mural from "@/ui/mural/Mural";
import Tecs from "@/ui/tecnologias/tecnologias";

export default function Home() {
  return (
    <div className="flex md:flex-row flex-col flex-wrap mt-16 items-center justify-center">
      <Carta />
      <Info />
      <Tecs />
      <Mural />
    </div>
  );
}
