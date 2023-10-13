import axios from "axios";

// Load environment variables from .env file

const url = "https://realtymole-rental-estimate-v1.p.rapidapi.com/rentalPrice";
const apiKey = import.meta.env.VITE_RENT_API_KEY;

// Export an async function to make the API call
export async function rentPull(
  zipCodeValue: string,
  propertyTypeValue: string,
  bedroomsValue: string,
  bathroomsValue: string
) {
  try {
    const response = await axios.get(url, {
      params: {
        address: zipCodeValue,
        propertyType: propertyTypeValue,
        bedrooms: bedroomsValue,
        bathrooms: bathroomsValue,
      },
      headers: {
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": "realtymole-rental-estimate-v1.p.rapidapi.com",
      },
    });

    // Return the response data
    return response.data;
  } catch (error) {
    throw error;
  }
}
