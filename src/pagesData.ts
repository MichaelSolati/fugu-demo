export default {
  "/": {
    navHome: "Home",
    title: "Fugu Demo",
    description: "A simple web app showcasing the capabilities of the web!"
  },
  "/async-clipboard-api/": {
    title: "Async Clipboard API",
    description: "The Async Clipboard API allows web application to read and write into the system's clipboard."
  },
  "/web-share-api/": {
    title: "Web Share API",
    description: "The Web Share API uses platform-specific sharing of a device to send data such as text, a URL, and more from a web application to any application."
  },
  "/media-session-api/": {
    title: "Media Session API",
    description: "The Media Session API allows developers to create custom media notifications for audio or video content on the web."
  },
  "/device-memory-api/": {
    title: "Device Memory API",
    description: "The Device Memory API provides insight into the memory available by providing the read-only property deviceMemory."
  },
  "/gamepad-api/": {
    title: "Gamepad API",
    description: "The Gamepad API is how web applications respond to input from gamepads and other game controllers."
  }
} as { [key: string]: { navHome?: string, title: string, description: string } }