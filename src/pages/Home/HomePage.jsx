import Friendship from "./Friendship";
import Introduction from "./Introduction";
import Investment from "./Investment";
import Mission from "./Mission";
import Vision from "./Vision";
import "./Home.css";

export default function HomePage() {
  return (
    <>
      <Introduction />
      <Friendship />
      <Vision />
      <Mission />
      <Investment />
    </>
  );
}
