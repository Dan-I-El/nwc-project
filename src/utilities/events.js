export const navigationEvent = (page) =>  (new CustomEvent('navigate', { detail: {direction: page }, bubbles: true }));
