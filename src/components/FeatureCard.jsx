import React from "react";

const FeatureCard = ({title, image, description}) => {
    return (
        <div className="feature-card-container">
            <h2>{title}</h2>
            <img src={image} alt={title} />
            <p>{description}</p>
        </div>
    )
};

export default FeatureCard;