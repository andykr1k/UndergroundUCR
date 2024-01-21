import { ParticlesBG } from "../components";

export default function HomePage() {
  return (
    <div className="">
      <ParticlesBG />
      <div className="grid place-items-center h-screen">
        <img className="w-80 opacity-70" src="./light_logo.png"/>
      </div>
    </div>
  );
}
