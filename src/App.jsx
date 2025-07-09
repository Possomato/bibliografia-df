import { Category } from './components/Category'
import { Book } from './components/Book'

function App() {
  return (
    <main>
      <h1>Bibliografia Nivelamento</h1>
      <Category categoryName="Literatura">
        <Book title="The Hobbit" author="J. R. R. Tolkien" />
        <Book title="Crime and Punishiment" author="Fiodor Dostoievski" />
      </Category>
      <Category categoryName="Literatura">
        <Book title="The Hobbit" author="J. R. R. Tolkien" />
        <Book title="Crime and Punishiment" author="Fiodor Dostoievski" />
      </Category>
    </main>
  )
}

export default App
