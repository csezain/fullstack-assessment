import React from "react";

const ProductCard = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}) => {
  return (
    <div className="border p-2 flex flex-col gap-2 rounded-md">
      <img
        src={image}
        alt={title}
        className="w-full aspect-square object-contain"
      />
      <main className="flex flex-col flex-grow gap-2">
        <span className="bg-foreground w-max text-background text-xs px-2 py-1 rounded-xl">
          {category}
        </span>
        <h2 className="text-sm font-medium text-foreground/80 line-clamp-2">
          {title}
        </h2>
        <p className="text-xs line-clamp-3 text-foreground/60">{description}</p>
      </main>
      
      <footer>
        <span className="text-xs  font-bold text-foreground/60">
          {rating.rate} / {rating.count}
        </span>
      </footer>
    </div>
  );
};

export default ProductCard;
