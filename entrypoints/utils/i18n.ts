import browser from 'webextension-polyfill';

export const i18n = {
  getMessage: (key: string, substitutions?: any) => {
    return browser.i18n.getMessage(key, substitutions);
  },
};
