
export const OPENAPIHOST = 'http://192.168.1.104:3000';
export const HASCONSOLE = typeof console !== undefined;
export const ISBROWSER = typeof window !== 'undefined' && typeof window === 'object';
export const UA = ISBROWSER && window.navigator.userAgent.toLowerCase();