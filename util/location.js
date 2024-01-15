const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const getCoordsForAddress = async (address) => {
  const apiUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
    address
  )}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.length > 0) {
      const coordinates = {
        lat: parseFloat(data[0].lat),
        lng: parseFloat(data[0].lon),
      };

      console.log("Coordinates:", coordinates);
      return coordinates;
    } else {
      console.error("No results found for the address");
      return null;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

module.exports = getCoordsForAddress;
