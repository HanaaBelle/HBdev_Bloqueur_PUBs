const blockedDomains = [
    "*://*.googleads.g.doubleclick.com/*",
    "*://*.aax.amazon-adsystem.com/*",
    // Ajoutez d'autres domaines à bloquer ici
];

chrome.webRequest.onBeforeRequest.addListener(
    (details) => {
        return { cancel: true };
    },
    { urls: blockedDomains },
    ["blocking"]
);
