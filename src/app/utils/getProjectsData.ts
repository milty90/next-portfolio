export async function getProjectsData() {
  const firstUrl = "https://cms.milantyopity.com/api/projects";
  const secondUrl = "https://folio-cms.onrender.com/api/projects";

  try {
    const response = await fetch(firstUrl);

    if (!response.ok) {
      throw new Error(`First API error: ${response.status}`);
    }

    const data = await response.json();

    if (!data || (Array.isArray(data) && data.length === 0)) {
      throw new Error("First API returned empty data.");
    }
    console.log("Data from first API:", data);

    return data;
  } catch (error) {
    try {
      const fallbackResponse = await fetch(secondUrl);

      if (!fallbackResponse.ok) {
        throw new Error(`Second API error: ${fallbackResponse.status}`);
      }

      const fallbackData = await fallbackResponse.json();
      console.log("Data from second API:", fallbackData);
      return fallbackData;
    } catch (fallbackError) {
      console.error(
        "Unfortunately, the second API also failed:",
        fallbackError,
      );
      return null;
    }
  }
}
