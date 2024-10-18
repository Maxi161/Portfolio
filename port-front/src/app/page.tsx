import Carta from "@/ui/cartaDePresentacion/Carta";
import Info from "@/ui/informacion/Info";

export default function Home() {
  return (
    <div className="flex flex-col mt-16">
      <Carta />
      <Info />
    </div>
  );
}
