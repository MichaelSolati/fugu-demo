export default {
  "/": {
    "navHome": "Home",
    "title": "Fugu Demo",
    "description": "A simple web app showcasing the capabilities of the web!"
  },
  "/async-clipboard-api/": {
    "title": "Async Clipboard API",
    "description": "The Async Clipboard API allows web application to read and write into the system's clipboard."
  }
} as { [key: string]: { navHome?: string, title: string, description: string } }