let initialized = false;

export const initializeGoogleAuth = async () => {
  return new Promise((resolve) => {
    if (initialized) {
      return;
    }

    window.addEventListener('load', () => {
      /* global google */
      google.accounts.id.initialize({
        client_id:
          '970010418035-stkvov1kdl229kqs1uvvmoqtpj9t1635.apps.googleusercontent.com',
        callback: (response) => {
          console.log(response);
        },
      });
      resolve();
      initialized = true;
    });
  });
};
