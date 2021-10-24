const defaultLang = navigator.language || navigator.userLanguage,
    langs = {
        "fr-FR": require('./languages/fr.json'),
        "en-EN": require('./languages/en.json')
    }

function getUserLang() {
    const lang = langs[getDefaultLang()];
    return lang ? lang : lang["fr-FR"];
}

function getDefaultLang() {
    if(!localStorage['userLang'])
        localStorage['userLang'] = defaultLang;
    return localStorage['userLang'];
}

export { getUserLang, langs }