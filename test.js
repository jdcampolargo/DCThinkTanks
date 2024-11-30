const axios = require('axios');
const cheerio = require('cheerio');

exports.handler = async (event) => {
    const url = 'https://www.brookings.edu/events/';
    
    try {
        // Fetch the webpage content
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);

        // Extract event details
        let events = [];
        $('article.article.event.article-one-fourth').each((i, element) => {
            const title = $(element).find('span.article-title').text().trim();
            const date = $(element).find('div.event-date').text().trim();
            const location = $(element).find('p.location').text().trim();
            const link = $(element).find('a.overlay-link').attr('href');

            events.push({ title, date, location, link });
        });

        return {
            statusCode: 200,
            body: JSON.stringify(events),
        };

    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
};


