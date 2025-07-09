import React, { useState, useEffect } from 'react'
import { Category } from './components/Category'
import { Book } from './components/Book'
import data from './data/books.json'

function App() {
  const categories = Object.entries(data[0])

  // Estado inicial: tenta carregar do localStorage
  const [checkedBooks, setCheckedBooks] = useState(() => {
    const saved = localStorage.getItem('checkedBooks')
    return saved ? JSON.parse(saved) : {}
  })

  // Sempre que checkedBooks mudar, salva no localStorage
  useEffect(() => {
    localStorage.setItem('checkedBooks', JSON.stringify(checkedBooks))
  }, [checkedBooks])

  // Função para alternar o estado de um livro
  const handleCheck = (category, idx) => {
    const key = `${category}-${idx}`
    setCheckedBooks((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <main>
      <h1>Bibliografia Nivelamento</h1>
      {categories.map(([categoryName, books]) => (
        <Category key={categoryName} categoryName={categoryName}>
          {books.map((book, idx) => {
            const key = `${categoryName}-${idx}`
            return (
              <Book
                key={key}
                title={book.title}
                author={book.author}
                checked={!!checkedBooks[key]}
                onCheck={() => handleCheck(categoryName, idx)}
              />
            )
          })}
        </Category>
      ))}
    </main>
  )
}

export default App
