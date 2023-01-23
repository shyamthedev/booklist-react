import BookList from "./components/BookList";
import { books } from "./bookList";

function App() {
  return <BookList books={books} />;
}

export default App;
