import "./home.css";
import CardsRender from "../components/card";

export default function home() {
  return (
    <div className="container">
      <div className="img"></div>
      <div className="content-wrapper">
        <div className="intro">
          <h1>Our Collection</h1>
          <p>
            Introducing our Coffee Collection, a selection of unique coffees
            <br/>from different roast types and origins, expertly roasted in small
            <br/>batches and shipped fresh weekly.
          </p>
        </div>
        <CardsRender />
      </div>
    </div>
  );
}
