const { Scraper } = require("@the-convocation/twitter-scraper");
require("dotenv").config();

const scraper = new Scraper({
    transform: {
        request(input, init) {
            // The arguments here are the same as the parameters to fetch(), and
            // are kept as-is for flexibility of both the library and applications.
            if (input instanceof URL) {
                const proxy = "https://corsproxy.org/?" + encodeURIComponent(input.toString());
                return [proxy, init];
            } else if (typeof input === "string") {
                const proxy = "https://corsproxy.org/?" + encodeURIComponent(input);
                return [proxy, init];
            } else {
                // Omitting handling for example
                throw new Error("Unexpected request input type");
            }
        },
    },
});

async function login() {
    await scraper.login(process.env.TWITTER_USERNAME, process.env.TWITTER_PASSWORD);
    console.log("logged in: " + await scraper.isLoggedIn());
}

module.exports = { scraper, login };
