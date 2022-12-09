// import { useEffect, useState } from "react";
// import { getGift } from "../helpers/getGift";
import { useFetchGif, GifItem } from "../components";
// import { GifItem } from "./GifItem";


export const GifGrid = ({ category }) => {

  const { images, isLoading} = useFetchGif(category)


  return (
    <>
      <h3 >{category}</h3>

      <div className="card-grid">
        {images.map((image) => (
          <GifItem 
            key={image.id}
            { ...image}
          />
        ))}
      </div>
    </>
  );
};
