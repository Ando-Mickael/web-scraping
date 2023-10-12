import cheerio from "cheerio";
import axios from "axios";

const url = "http://127.0.0.1:5500/index.html";

axios(url)
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);

        let socials = [];

        $(".social li a").map((_, element) => {
            let row = {
                name: $(element).text(),
                link: $(element).attr("href")
            };
            socials.push(row);
        })

        console.log(socials);
    })