// Paste your Google Maps Platform API key between the quotes.
// Restrict the key to your site's address (HTTP referrer) in Google Cloud Console.
window.KONBINI_CONFIG = {
  GOOGLE_MAPS_API_KEY: "AIzaSyCAVPo_WJllinRrroXedRwDjE0ASYbt0i4",
  // Optional: your own Map ID from Cloud Console. DEMO_MAP_ID works for testing.
  MAP_ID: "DEMO_MAP_ID",
  // Language for place names and the map ("en" or "ja").
  LANGUAGE: "en",
  // Cost guard. PAUSED: true stops all searches for everyone (shows a Google Maps link instead).
  PAUSED: false,
  // Max searches per phone per day.
  DAILY_LIMIT: 30,
  // Anonymous event counter (Cloudflare Worker). Empty = off.
  // Last-train timer (Cloudflare Worker + Ekispert). Empty = timer hidden.
  // Set to "https://konbininow-stats.yaron-silberberg.workers.dev" once the EKISPERT_KEY secret is in the Worker.
  TRAIN_URL: "",
  STATS_URL: "https://konbininow-stats.yaron-silberberg.workers.dev/e",
};
