import { Container } from "./styles"

export function Book({ title, author }) {
  return (
    <Container>
      {title}
      <span>{author}</span>
    </Container>
  )
}
