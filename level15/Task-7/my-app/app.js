const axios = require('axios');
const mongoose = require('mongoose');
const xml2js = require('xml2js');
const readlineSync = require('readline-sync');
require('dotenv').config();

// MongoDB setup
const mongoURI = process.env.MONGODB_URI;
if (!mongoURI) {
    console.error('MongoDB URI not found!');
    process.exit(1);
}

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch(err => {
        console.error('Error connecting to MongoDB:', err);
        process.exit(1);
    });

// Article schema
const articleSchema = new mongoose.Schema({
    title: String,
    link: String,
    description: String,
    pubDate: Date,
    source: String,
    read: Boolean
});

const Article = mongoose.model('Article', articleSchema);

// Parse RSS Feed
function parseRSS(data) {
    return new Promise((resolve, reject) => {
        xml2js.parseString(data, { mergeAttrs: true }, (err, result) => {
            if (err) return reject('Error parsing RSS feed');
            resolve(result.rss.channel[0].item);
        });
    });
}

// Store Articles in DB
async function storeArticles(feedItems) {
    try {
        const articles = feedItems.map(item => ({
            title: item.title[0],
            link: item.link[0],
            description: item.description[0],
            pubDate: new Date(item.pubDate[0]),
            source: item.source ? item.source[0]._ : 'Unknown',
            read: false
        }));
        await Article.insertMany(articles);
    } catch (error) {
        console.error('Error storing articles:', error.message);
    }
}

// Fetch and Store Feeds
async function fetchAndStoreFeeds(feedUrls) {
    try {
        const promises = feedUrls.map(async (url) => {
            const response = await axios.get(url.trim());
            const parsedData = await parseRSS(response.data);
            await storeArticles(parsedData);
        });

        await Promise.all(promises);
        console.log('✅ Feeds successfully fetched and stored!');
    } catch (error) {
        console.error('❌ Error fetching and storing RSS feeds:', error.message);
    }
}

async function queryArticles() {
    const searchTerm = readlineSync.question('Enter a keyword to search articles (or leave empty to show all): ').toLowerCase();

    const query = searchTerm
        ? {
              $or: [
                  { title: { $regex: searchTerm, $options: 'i' } },
                  { description: { $regex: searchTerm, $options: 'i' } }
              ]
          }
        : {};

    const articles = await Article.find(query);


    console.log('\n📚 Found articles:\n');
    articles.forEach((article, index) => {
        console.log(`${index + 1}. ${article.title} - ${article.link}`);
    });

    return articles;
}

// Mark as read/unread
async function markAsRead(articleId, isRead) {
    await Article.updateOne({ _id: articleId }, { $set: { read: isRead } });
    console.log(`✅ Article marked as ${isRead ? 'read' : 'unread'}`);
}

// Main Function
async function main() {
    const feedUrls = readlineSync.question('Enter comma-separated RSS feed URLs: ').split(',');
    await fetchAndStoreFeeds(feedUrls);

    const articles = await queryArticles();
    const articleIndex = readlineSync.questionInt('\nEnter the article number to mark as read/unread: ') - 1;

    if (articles[articleIndex]) {
        const markRead = readlineSync.keyInYNStrict('Do you want to mark this article as read?');
        await markAsRead(articles[articleIndex]._id, markRead);
    } else {
        console.log('❌ Invalid article number!');
    }

    mongoose.disconnect();
}

main();
