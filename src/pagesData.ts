export default {
  "/": {
    "navHome": "Home",
    "title": "Fugu Demo",
    "description": "A simple web app showcasing the capabilities of the web!"
  },
  "/async-clipboard-api/": {
    "title": "Async Clipboard API",
    "description": "The Async Clipboard API allows web application to read and write into the system's clipboard."
  },
  "/web-share-api/": {
    "title": "Web Share API",
    "description": "The Web Share API uses platform-specific sharing of a device to send data such as text, a URL, and more from a web application to any application."
  }
} as { [key: string]: { navHome?: string, title: string, description: string } }