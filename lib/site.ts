export const SITE_NAME = "Jameson Web Studio";
export const SITE_URL = "https://jamesonwebstudio.co.uk";
export const SITE_EMAIL = "jamesonwebstudio@gmail.com";
export const PROJECT_URL = "https://www.perranvalepublishing.com/";
export const SOCIAL_IMAGE_URL = `${SITE_URL}/brand/social/open-graph.png`;
export const REVIEW_MAILTO = `mailto:${SITE_EMAIL}?subject=${encodeURIComponent(
  "Free website review request",
)}&body=${encodeURIComponent(
  "Hi Jameson,\n\nI'd like a free review of my current website.\n\nBusiness name:\nCurrent website (if applicable):\nWhat I would like help with:\n\nThanks,",
)}`;
export function absoluteUrl(path = "/") {
  return new URL(path, `${SITE_URL}/`).toString();
}
