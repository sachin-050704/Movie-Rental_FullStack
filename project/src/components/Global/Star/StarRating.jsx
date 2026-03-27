import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

const StarRating = ({ rating }) => {
  const safeRating = Number(rating) || 0;

  const normalized = Math.max(0, Math.min(10, safeRating));

  const stars = normalized / 2;

  const fullStars = Math.floor(stars);
  const halfStar = stars % 1 >= 0.5;
  const emptyStars = Math.max(0, 5 - fullStars - (halfStar ? 1 : 0));

  return (
    <div style={{ display: "flex", gap: "4px" }}>
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={`f-${i}`} color="#FFD700" />
      ))}

      {halfStar && <FaStarHalfAlt color="#FFD700" />}

      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar key={`e-${i}`} color="#ccc" />
      ))}
    </div>
  );
};

export default StarRating;