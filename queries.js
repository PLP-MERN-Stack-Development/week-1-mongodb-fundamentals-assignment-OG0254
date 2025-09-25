// 1. Find all books in a specific genre

db.books.find({ genre: 'SQL' });

// 2. Find books published after a certain year

db.books.find({ published_year: { $gt: 2015 } });

// 3. Find books by a specific author

db.books.find({ author: 'Martin Kleppmann' });

// 4. Update the price of a specific book

db.books.updateOne({ title: 'MongoDB: The Definitive Guide' }, { $set: { price: 60.0 } });

// 5. Delete a book by its title

db.books.deleteOne({ title: 'NoSQL Distilled' });
