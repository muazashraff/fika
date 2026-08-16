export async function loadGoogleFont(text: string, weight = 600) {
  const url = `https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@${weight}&text=${encodeURIComponent(
    text
  )}`;
  const css = await (await fetch(url)).text();
  const resource = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/);

  if (resource) {
    const response = await fetch(resource[1]);
    if (response.status === 200) {
      return response.arrayBuffer();
    }
  }

  throw new Error("Failed to load Cormorant Garamond font data");
}
