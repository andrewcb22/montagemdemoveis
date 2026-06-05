import { mkdir, readFile, writeFile, copyFile } from "node:fs/promises";

const googleTagId = process.env.VITE_GOOGLE_TAG_ID || "";
const whatsappConversionSendTo = process.env.VITE_GOOGLE_ADS_WHATSAPP_SEND_TO || "";

await mkdir("dist", { recursive: true });

let html = await readFile("src/index.html", "utf8");
let headTag = "";

if (googleTagId) {
  headTag = `<!-- Google tag -->\n<script async src="https://www.googletagmanager.com/gtag/js?id=${googleTagId}"></script>\n<script>\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n  gtag('config', '${googleTagId}');\n  window.GOOGLE_ADS_WHATSAPP_SEND_TO = '${whatsappConversionSendTo}';\n</script>`;
}

html = html.replace("<!-- GOOGLE_TAG_PLACEHOLDER -->", headTag);

await writeFile("dist/index.html", html);
await copyFile("src/styles.css", "dist/styles.css");
await copyFile("src/script.js", "dist/script.js");
