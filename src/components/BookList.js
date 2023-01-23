import Book from "./Book";
const BookList = ({ books }) => {
  return (
    <>
      <h1>amazon best sellers</h1>
      <section className="booklist">
        {books.map((book) => (
          <Book {...book} key={book.id}></Book>
        ))}
      </section>
    </>
  );
};

export default BookList;
