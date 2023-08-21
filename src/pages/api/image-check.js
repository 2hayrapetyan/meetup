import fetch from "node-fetch";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const api_key = process.env.IMAGGA_API_KEY;
      const secret_key = process.env.IMAGGA_SECRET_KEY;
      const auth = `Basic YWNjX2U5NTNiZWM0YjIwOGFkODo5YzU5MTgyYjE4ZDI3ZGFhMzIzYWY1MDZiYzBkYzc5YQ==${btoa(
        `${api_key}:${secret_key}`
      )}`;
      const api_url = "https://api.imagga.com/v2/categories/nsfw_beta";

      const { image, format } = req.body;

      function checkNsfw(results) {
        for (const result of results) {
          if (result.name.en === "nsfw" && result.confidence > 20) {
            return "not safe";
          }
        }
        return "safe";
      }

      let result = "";
      if (format === "url") {
        const url = `${api_url}?image_url=${encodeURIComponent(image)}`;
        const response = await fetch(url, {
          headers: {
            Authorization: auth,
          },
        });
        const data = await response.json();
        result = checkNsfw(data.result.categories);
      } else if (format === "file") {
        const formData = new FormData();
        formData.append("image_base64", image);
        const response = await fetch(api_url, {
          method: "POST",
          body: formData,
          headers: {
            Authorization: auth,
          },
        });
        const data = await response.json();
        result = checkNsfw(data.result.categories);
      } else {
        throw new Error("Invalid format");
      }

      res.status(200).json({ result });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message});
    }
  } else {
    res.status(405).end();
  }
}