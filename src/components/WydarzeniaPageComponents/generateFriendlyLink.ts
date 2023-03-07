// Function that generates a friendly link from a text string
export const generateFriendlyLink = (text: string) => {
  if (typeof text === "string") {
    // Normalize the text to a form composed of letters and diacritical marks
    const friendlyLink = text
      .normalize("NFD")
      // Remove diacritical marks from the text
      .replace(/[\u0300-\u036f]/g, "")
      // Convert the text to lowercase
      .toLowerCase()
      // Replace spaces with hyphens
      .replace(/\s+/g, "-");
    return friendlyLink;
  }
};
