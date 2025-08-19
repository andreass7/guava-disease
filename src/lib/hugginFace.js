import environment from "@/config/environment";

export async function queryModel(ImageFile) {
  const formData = new FormData();
  formData.append("file", ImageFile);

  const response = await fetch(environment.API_URL, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Gagal Request ke Hugging Face");
  }
  // console.log("Status:", response.status);
  // console.log("URL:", environment.API_URL);
  return await response.json();
}
