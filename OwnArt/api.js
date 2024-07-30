import OpenAI from "openai";

const openai = new OpenAI();

// This is the Buffer object that contains your image data
const buffer = [your image data];

// Set a `name` that ends with .png so that the API knows it's a PNG image
buffer.name = "image.png";

async function main() {
  const image = await openai.images.createVariation({ model: "dall-e-2", image: buffer, n: 1, size: "1024x1024" });
  console.log(image.data);
}
main();