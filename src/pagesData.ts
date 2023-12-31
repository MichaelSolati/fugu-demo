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
  "/add-to-home-screen/": {
    title: "Add to Home Screen",
    description: "The ability to add an application to the home screen is a crucial feature of PWAs."
  },
  "/media-session-api/": {
    title: "Media Session API",
    description: "The Media Session API allows developers to create custom media notifications for audio or video content on the web."
  },
  "/device-memory-api/": {
    title: "Device Memory API",
    description: "The Device Memory API provides insight into the memory available by providing the read-only property deviceMemory."
  },
  "/service-worker-api/": {
    title: "Service Worker API",
    description: "Service workers act as a client-side proxy that puts developers in control of the system's cache and how to respond to resource requests."
  },
  "/gamepad-api/": {
    title: "Gamepad API",
    description: "The Gamepad API is how web applications respond to input from gamepads and other game controllers."
  },
  "/push-api/": {
    title: "Push API",
    description: "The Push API allows web applications to receive messages from a server regardless of whether the application was in the foreground."
  }
} as { [key: string]: { navHome?: string, title: string, description: string } }