import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"; // Assuming you're using Font Awesome icons for stars

interface RatingProps {
  rating: number; // Rating value, e.g., 3.5, 4.2, etc.
}

const DisplayRating: React.FC<RatingProps> = ({ rating }) => {
  const stars = [];
  const fullStars = Math.floor(rating); // Full star count
  const hasHalfStar = rating - fullStars >= 0.5; // Check for half star

  // Add full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={i} color="#ffc107" />);
  }

  // Add half star if applicable
  if (hasHalfStar) {
    stars.push(<FaStarHalfAlt key={stars.length} color="#ffc107" />);
  }

  // Add remaining empty stars
  const remainingStars = 5 - stars.length;
  for (let i = 0; i < remainingStars; i++) {
    stars.push(<FaRegStar key={stars.length + i} color="#ffc107" />);
  }

  return <span className="flex items-center gap-1">{stars}</span>;
};

export default DisplayRating;
