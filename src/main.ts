import { rentPull } from "../api/rentPull"; // Import the rentPull function

const searchForm = document.querySelector("form");

searchForm?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const zipCodeValue = (
    document.getElementById("searchField") as HTMLInputElement
  ).value.toString();
  const propertyTypeValue = (
    document.getElementById("property") as HTMLSelectElement
  ).value;
  const bedroomsValue = (
    document.getElementById("bedroom") as HTMLInputElement
  ).value.toString();
  const bathroomsValue = (
    document.getElementById("bathroom") as HTMLInputElement
  ).value.toString();

  try {
    // Call rentPull function and pass user input values
    const response = await rentPull(
      zipCodeValue,
      propertyTypeValue,
      bedroomsValue,
      bathroomsValue
    );

    // Update the HTML with the response data
    const showAvgRent = document.getElementById(
      "showAvgRent"
    ) as HTMLDivElement;
    // Check if the element exists
    if (showAvgRent) {
      // Check if response is not undefined
      if (response && response.rent !== undefined) {
        showAvgRent.innerHTML = `<h2>Average Rent: $${response.rent}</h2>`;
      } else {
        showAvgRent.innerHTML = "<h2>Could not find rent data!</h2>";
      }
    } else {
      console.error("Element with id 'showAvgRent' not found in the HTML.");
    }
  } catch (error) {
    console.error(error);
    alert("An error occurred while fetching data.");
  }
});
