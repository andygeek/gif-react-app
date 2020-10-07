export const getGifs = async (category) => {
  const url = `http://api.giphy.com/v1/gifs/search?api_key=s03D5tpS9XhD6qqcgTKJZ08HFNQAHNXI&q=${encodeURI(
    category
  )}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gift = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });

  return gift;
};
