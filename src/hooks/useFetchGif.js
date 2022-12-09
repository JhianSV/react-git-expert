import { useEffect, useState } from "react";
import { getGift } from "../helpers/getGift";

export const useFetchGif = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGift(category);
    setImages(newImages);
    setisLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  return {
    images,
    isLoading,
  };
};
