import express from "express";
import axios from "axios";
import fs from "fs";
import path from "path";

const app = express();
const port = 3000;

const dataPath = path.join(process.cwd(), "data.json");
const rawData = fs.readFileSync(dataPath);
const data = JSON.parse(rawData);

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/search", async (req, res) => {
    try {
        const { genre, author, type } = req.query;
        
        console.log('Search parameters:', { genre, author, type });

        let apiUrl = 'https://openlibrary.org/search.json?';
        const params = new URLSearchParams();

        if (genre) {
            params.append('subject', genre);
        }
        if (author) {
            params.append('author', author);
        }
        if (type) {
            params.append('subject', type);
        }

        params.append('limit', '20');
        params.append('fields', 'key,title,author_name,first_publish_year,cover_i,isbn,publisher,number_of_pages_median,publish_date,edition_count,description');
        apiUrl += params.toString();

        console.log('Making API request to:', apiUrl);
        const response = await axios.get(apiUrl);
        console.log('Response received. Number of results:', response.data.numFound);

        let books = [];
        if (response.data.docs && response.data.docs.length > 0) {
            books = await Promise.all(response.data.docs.map(async (book) => {
                const coverId = book.cover_i;
                const coverType = coverId ? 'id' : 'isbn';
                const coverIdentifier = coverId || book.isbn?.[0];

                let description = 'No description available';
                if (book.key) {
                    try {
                        const workApiUrl = `https://openlibrary.org${book.key}.json`;
                        const workResponse = await axios.get(workApiUrl);
                        if (workResponse.data.description) {
                            description = typeof workResponse.data.description === 'string' 
                                ? workResponse.data.description 
                                : workResponse.data.description.value || 'No description available';
                        }
                    } catch (error) {
                        console.error('Error fetching work info:', error);
                    }
                }

                if (description.length > 500) {
                    description = description.substring(0, 500) + '...';
                }

                return {
                    _id: book.key,
                    title: book.title || 'No title available',
                    author_name: book.author_name || ['Unknown Author'],
                    first_publish_year: book.first_publish_year || 'Not available',
                    description: description,
                    cover_id: coverIdentifier || '',
                    cover_type: coverType,
                    publisher: Array.isArray(book.publisher) ? book.publisher[0] : book.publisher || 'Not available',
                    pages: book.number_of_pages_median || 'Not available',
                    isbn: Array.isArray(book.isbn) ? book.isbn[0] : book.isbn || 'Not available',
                    publish_date: Array.isArray(book.publish_date) ? book.publish_date[0] : book.publish_date || 'Not available',
                    edition_count: book.edition_count || 'Not available'
                };
            }));
        }

        res.render('results', { 
            books,
            genre,
            author,
            type,
            error: books.length === 0 ? 'No books found. Please try different search terms.' : null
        });
    } catch (error) {
        console.error('Error fetching books:', error);
        res.render('results', { 
            books: [],
            genre: req.query.genre || '',
            author: req.query.author || '',
            type: req.query.type || '',
            error: 'An error occurred while searching for books. Please try again.'
        });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});