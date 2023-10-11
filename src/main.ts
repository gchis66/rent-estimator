import { rentPull } from "../api/rentPull"; // Import the rentPull function

const searchForm = document.querySelector("form");

searchForm?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const zipCodeValue = (
    document.getElementById("searchField") as HTMLInputElement
  ).value;
  const propertyTypeValue = (
    document.getElementById("property") as HTMLSelectElement
  ).value;
  const bedroomsValue = (document.getElementById("bedroom") as HTMLInputElement)
    .value;
  const bathroomsValue = (
    document.getElementById("bathroom") as HTMLInputElement
  ).value;

  try {
    // Call rentPull function and pass user input values
    const response = await rentPull(
      zipCodeValue,
      propertyTypeValue,
      bedroomsValue,
      bathroomsValue
    );

    // Update the HTML with the response data
    const showAvgRent = document.getElementById("showAvgRent");

    if (showAvgRent) {
      // Check if the element exists
      showAvgRent.textContent = `Average Rent: $${response.rent}`;
    } else {
      console.error("Element with id 'showAvgRent' not found in the HTML.");
    }
  } catch (error) {
    console.error(error);
    alert("An error occurred while fetching data.");
  }
});
