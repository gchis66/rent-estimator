import axios from "axios";

// Load environment variables from .env file

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
    if (response.data !== undefined || null) {
      return response.data;
    } else {
      return "Unable to find rent data!";
    }
  } catch (error) {
    throw error;
  }
}
