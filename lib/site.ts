export const SITE_NAME = "Jameson Web Studio";
export const SITE_URL = "https://jamesonwebstudio.co.uk";
export const SITE_EMAIL = "jamesonwebstudio@gmail.com";
export const DEMO_URL = "https://demo.jamesonwebstudio.co.uk";
export const SOCIAL_IMAGE_URL = `${SITE_URL}/social-card.png`;

export function absoluteUrl(path = "/") {
  return new URL(path, `${SITE_URL}/`).toString();
}
