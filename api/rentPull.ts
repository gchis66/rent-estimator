import axios from "axios";
import { config } from "dotenv";

// Load environment variables from .env file
config();
const url = "https://realtymole-rental-estimate-v1.p.rapidapi.com/rentalPrice";
const apiKey = "3b3912e780msh41ff7b33b453ba0p1477edjsn3a2d1357e6a2";

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
