const axios = require('axios');

async function fetchNews(userPreferences) {
    try {
        // Construct query parameters based on user preferences
        const queryParams = {
            q: userPreferences.keywords, // Assuming keywords are stored in user preferences
            apiKey: '464acfc424b64ccd9299690f06145db9', // Replace with your actual News API key
        };

        // Make a request to the News API
        const response = await axios.get('https://newsapi.org/v2/everything', { params: queryParams });

        // Return the filtered news articles
        return response.data.articles;
    } catch (error) {
        // Handle errors
        console.error('Error fetching news:', error);
        throw new Error('Failed to fetch news');
    }
}

module.exports = {
    fetchNews,
};
