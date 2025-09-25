// insert_books.js - Script to populate MongoDB with sample book data

// Import MongoDB client
const { MongoClient } = require('mongodb');

// Connection URI (replace with your MongoDB connection string if using Atlas)
const uri = 'mongodb://localhost:27017';

// Database and collection names
const dbName = 'plp_bookstore';
const collectionName = 'books';

// Sample book data
const books = [
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Fiction',
    published_year: 1960,
    price: 12.99,
    in_stock: true,
    pages: 336,
    publisher: 'J. B. Lippincott & Co.',
  },
  {
    title: '1984',
    author: 'George Orwell',
    genre: 'Dystopian',
    published_year: 1949,
    price: 10.99,
    in_stock: true,
    pages: 328,
    publisher: 'Secker & Warburg',
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Fiction',
    published_year: 1925,
    price: 9.99,
    in_stock: true,
    pages: 180,
    publisher: "Charles Scribner's Sons",
  },
  {
    title: 'Brave New World',
    author: 'Aldous Huxley',
    genre: 'Dystopian',
    published_year: 1932,
    price: 11.5,
    in_stock: false,
    pages: 311,
    publisher: 'Chatto & Windus',
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
    published_year: 1937,
    price: 14.99,
    in_stock: true,
    pages: 310,
    publisher: 'George Allen & Unwin',
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    genre: 'Fiction',
    published_year: 1951,
    price: 8.99,
    in_stock: true,
    pages: 224,
    publisher: 'Little, Brown and Company',
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    genre: 'Romance',
    published_year: 1813,
    price: 7.99,
    in_stock: true,
    pages: 432,
    publisher: 'T. Egerton, Whitehall',
  },
  {
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
    published_year: 1954,
    price: 19.99,
    in_stock: true,
    pages: 1178,
    publisher: 'Allen & Unwin',
  },
  {
    title: 'Animal Farm',
    author: 'George Orwell',
    genre: 'Political Satire',
    published_year: 1945,
    price: 8.5,
    in_stock: false,
    pages: 112,
    publisher: 'Secker & Warburg',
  },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    genre: 'Fiction',
    published_year: 1988,
    price: 10.99,
    in_stock: true,
    pages: 197,
    publisher: 'HarperOne',
  },
  {
    title: 'Moby Dick',
    author: 'Herman Melville',
    genre: 'Adventure',
    published_year: 1851,
    price: 12.5,
    in_stock: false,
    pages: 635,
    publisher: 'Harper & Brothers',
  },
  {
    title: 'Wuthering Heights',
    author: 'Emily Brontë',
    genre: 'Gothic Fiction',
    published_year: 1847,
    price: 9.99,
    in_stock: true,
    pages: 342,
    publisher: 'Thomas Cautley Newby',
  },
  {
    title: 'Database System Concepts',
    author: 'Abraham Silberschatz',
    genre: 'Database',
    published_year: 2019,
    price: 65.0,
    in_stock: true,
    pages: 1376,
    publisher: 'McGraw-Hill',
  },
  {
    title: 'MongoDB: The Definitive Guide',
    author: 'Kristina Chodorow',
    genre: 'Database',
    published_year: 2019,
    price: 55.0,
    in_stock: true,
    pages: 600,
    publisher: "O'Reilly Media",
  },
  {
    title: 'Designing Data-Intensive Applications',
    author: 'Martin Kleppmann',
    genre: 'Data Engineering',
    published_year: 2017,
    price: 70.0,
    in_stock: true,
    pages: 616,
    publisher: "O'Reilly Media",
  },
  {
    title: 'Fundamentals of Database Systems',
    author: 'Ramez Elmasri',
    genre: 'Database',
    published_year: 2016,
    price: 60.0,
    in_stock: false,
    pages: 1272,
    publisher: 'Pearson',
  },
  {
    title: 'NoSQL Distilled',
    author: 'Pramod J. Sadalage',
    genre: 'NoSQL',
    published_year: 2012,
    price: 48.0,
    in_stock: true,
    pages: 192,
    publisher: 'Addison-Wesley',
  },
  {
    title: 'Learning SQL',
    author: 'Alan Beaulieu',
    genre: 'SQL',
    published_year: 2020,
    price: 40.0,
    in_stock: true,
    pages: 408,
    publisher: "O'Reilly Media",
  },
  {
    title: 'Database Internals',
    author: 'Alex Petrov',
    genre: 'Database Systems',
    published_year: 2019,
    price: 65.0,
    in_stock: true,
    pages: 372,
    publisher: "O'Reilly Media",
  },
  {
    title: 'Streaming Systems',
    author: 'Tyler Akidau',
    genre: 'Data Streaming',
    published_year: 2018,
    price: 58.0,
    in_stock: false,
    pages: 400,
    publisher: "O'Reilly Media",
  },
  {
    title: 'Big Data: Principles and Paradigms',
    author: 'Rajkumar Buyya',
    genre: 'Big Data',
    published_year: 2016,
    price: 75.0,
    in_stock: true,
    pages: 648,
    publisher: 'Elsevier',
  },
  {
    title: 'SQL Performance Explained',
    author: 'Markus Winand',
    genre: 'SQL',
    published_year: 2012,
    price: 45.0,
    in_stock: true,
    pages: 192,
    publisher: 'Markus Winand Publishing',
  },
];

// Function to insert books into MongoDB
async function insertBooks() {
  const client = new MongoClient(uri);

  try {
    // Connect to the MongoDB server
    await client.connect();
    console.log('Connected to MongoDB server');

    // Get database and collection
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Check if collection already has documents
    const count = await collection.countDocuments();
    if (count > 0) {
      console.log(`Collection already contains ${count} documents. Dropping collection...`);
      await collection.drop();
      console.log('Collection dropped successfully');
    }

    // Insert the books
    const result = await collection.insertMany(books);
    console.log(`${result.insertedCount} books were successfully inserted into the database`);

    // Display the inserted books
    console.log('\nInserted books:');
    const insertedBooks = await collection.find({}).toArray();
    insertedBooks.forEach((book, index) => {
      console.log(`${index + 1}. "${book.title}" by ${book.author} (${book.published_year})`);
    });
  } catch (err) {
    console.error('Error occurred:', err);
  } finally {
    // Close the connection
    await client.close();
    console.log('Connection closed');
  }
}

// Run the function
insertBooks().catch(console.error);

/*
 * Example MongoDB queries you can try after running this script:
 *
 * 1. Find all books:
 *    db.books.find()
 *
 * 2. Find books by a specific author:
 *    db.books.find({ author: "George Orwell" })
 *
 * 3. Find books published after 1950:
 *    db.books.find({ published_year: { $gt: 1950 } })
 *
 * 4. Find books in a specific genre:
 *    db.books.find({ genre: "Fiction" })
 *
 * 5. Find in-stock books:
 *    db.books.find({ in_stock: true })
 */
