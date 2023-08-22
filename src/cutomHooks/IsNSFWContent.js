const api_key = process.env.IMAGGA_API_KEY;
const secret_key = process.env.IMAGGA_SECRET_KEY;
const auth = `Basic YWNjX2U5NTNiZWM0YjIwOGFkODo5YzU5MTgyYjE4ZDI3ZGFhMzIzYWY1MDZiYzBkYzc5YQ==${btoa(
  `${api_key}:${secret_key}`
)}`;
const api_url = "https://api.imagga.com/v2/categories/personal_photos";

function isNatureLandscape(results) {
  const goodRequestNames = [
    "nature landscape",
    "beaches seaside",
    "paintings art",
    "sunrises sunsets",
    "macro flowers",
    "streetview architecture",
  ];

  for (const result of results) {
    if (goodRequestNames.includes(result.name.en)) {
      return "safe";
    }
  }
  return "not safe";
}
async function IsNSFWContent(image) {
  let result = "";
  try {
    if (typeof image === "string") {
      const url = `${api_url}?image_url=${encodeURIComponent(image)}`;
      const response = await fetch(url, {
        headers: {
          Authorization: auth,
        },
      });
      const data = await response.json();
      result = isNatureLandscape(data.result.categories);
      return result;
    } else if (typeof image === "object") {
      const formData = new FormData();
      formData.append("image_base64", image.base64);
      const response = await fetch(api_url, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
          Authorization: auth,
        },
      });
      const responseData = await response.json();
      result = isNatureLandscape(responseData.result.categories);
      return result;
    } else {
      throw new Error("Invalid format");
    }
  } catch (error) {
    console.error("Error analyzing image:", error);
  }
}

export default IsNSFWContent;
