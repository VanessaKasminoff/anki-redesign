import React from "react";

const FeatureCard = ({title, image, description}) => {
    return (
        <div className="feature-card-container">
            <img className="feature-img" src={image} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
};

export default FeatureCard;