import axios from "axios";

const genrateRandomImage = async () => {
  const resp = await axios.get("https://api.unsplash.com/photos/random", {
    headers: {
      Authorization: "Client-ID ozJh5roRZ9oCZ0PJktdVTUGii0T92UN919yS7RM2rBM",
    },
    params: {
      orientation: "squarish",
    },
  });
  return resp.data.urls.small;
};

export default genrateRandomImage;
