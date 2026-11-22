export default function StarRating({ value = 0, size = "1rem" }) {
  const rating = Math.round(Number(value) || 0);

  return (
    <span className="star-rating" aria-label={`${rating} sur 5`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={star <= rating ? "star filled" : "star"}
          style={{ fontSize: size }}
        >
          ★
        </span>
      ))}
    </span>
  );
}
