import { useEffect, useState } from "react";
import "./cardItems.css";
import star from "../svg/Star.svg";
import starFill from "../svg/Star_fill.svg";

// CardsRender Component
export default function CardsRender() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

   if (isLoading) {
    return <div>Loading...</div>; // Show loading message
  }

  if (error) {
    return <div>Error loading data</div>; // Error message
  }

  return (
    <div className="cards-container">
      {data.map((card, index) => (
        <Card key={index} card={card} />
      ))}
    </div>
  );
}

// Card Component
function Card({ card }) {
  return (
    <div className="card-wrapper">
      <div className="card" key={card.id}>
        <div className="image-popular-wrapper">
          <img className="card-img" src={card.image} alt={card.name} />
          {card.popular && <div className="popular-label">Popular</div>}
        </div>
        <div className="card-content">
          <div className="name-price-wrapper">
            <h2>{card.name}</h2>
            <h3>{card.price}</h3>
          </div>
          <div className="card-footer">
            <div className="card-footer-left">
              {card.rating !== null ? (
                <>
                  <img src={starFill} alt="Star" />
                  <p>{card.rating}</p>
                </>
              ) : (
                <>
                  <img src={star} alt="Empty Star" />
                  <p>No Ratings</p>
                </>
              )}
              <span style={{ color: "#6f757c" }}>({card.votes} votes)</span>
              {!card.available && <div className="sold-out">Sold Out</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
