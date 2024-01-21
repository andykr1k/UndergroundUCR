import { Feed, HomePage } from "../pages";

export default function Home(){
    return (
      <div className="snap-y snap-mandatory">
        <HomePage />
        <Feed />
      </div>
    );
}