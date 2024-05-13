const newsHelper = require('../helpers/newsHelper');

async function getPreferences(req, res) {
    try {
        const preferences = req.user.preferences;
        res.status(200).json(preferences);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function updatePreferences(req, res) {
    try {
        const newPreferences = req.body.preferences;
        req.user.preferences = newPreferences;
        res.status(200).json({ message: 'Preferences updated successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function getNews(req, res) {
    try {
        const userPreferences = req.user.preferences;
        const news = await newsHelper.fetchNews(userPreferences);
        res.status(200).json(news);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getPreferences,
    updatePreferences,
    getNews,
};
