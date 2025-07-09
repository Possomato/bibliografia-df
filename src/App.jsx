import { Category } from './components/Category'
import { Book } from './components/Book'

import data from './data/books.json'

function App() {
  const categories = Object.entries(data[0])
  return (
    <main>
      <h1>Bibliografia Nivelamento</h1>
      {categories.map(([categoryName, books]) => (
        <Category key={categoryName} categoryName={categoryName}>
          {books.map((book, idx) => (
            <Book key={idx} title={book.title} author={book.author} id={idx} />
          ))}
        </Category>
      ))}
    </main>
  )
}

export default App
