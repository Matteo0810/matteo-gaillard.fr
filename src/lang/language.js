const defaultLang = navigator.language || navigator.userLanguage,
    langs = {
        "fr-FR": require('./languages/fr.json'),
        "en-EN": require('./languages/en.json')
    }

function getUserLang() {
    const lang = langs[getDefaultLang()];
    return lang ? lang : langs["fr-FR"];
}

function getDefaultLang() {
    if(!localStorage['userLang']) {
        let lang = defaultLang

        lang = lang.split('-')
        lang = lang.length < 2 ? 
                `${lang[0]}-${lang[0].toUpperCase()}` : 
                lang.join('-')
        
        localStorage['userLang'] = lang;
    }
    const userLang = localStorage['userLang']
    return userLang !== 'null' ? userLang : 'fr-FR';
}

export { getUserLang, langs, getDefaultLang }