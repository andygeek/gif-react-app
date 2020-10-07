import React, { useState, useEffect } from "react";

export const GifGrid = ({ category }) => {
  
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs();
  }, []);

  const getGifs = async () => {
    const url =
      "http://api.giphy.com/v1/gifs/search?api_key=s03D5tpS9XhD6qqcgTKJZ08HFNQAHNXI&q=Rick&limit=10";
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gift = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
      };
    });

    console.log(gift);
    setImages(gift);
  };

  return (
    <div>
      <h3>{category}</h3>
      <ol>
        {images.map((img) => (
          <li key={img.id}>{img.title}</li>
        ))}
      </ol>
    </div>
  );
};
