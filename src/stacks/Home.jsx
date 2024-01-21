import { Feed, HomePage } from "../pages";
import { AddModal } from "../components";

export default function Home(){
    return (
      <div className="snap-y snap-mandatory">
        <div className="absolute">
          <AddModal/>
        </div>
        <HomePage />
        <Feed />
      </div>
    );
}