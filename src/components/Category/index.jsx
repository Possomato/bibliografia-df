import { Container } from "./styles"

export function Category({ children, categoryName }) {
  return (
    <Container>
      <h2>{categoryName}</h2>
      <ol>{children}</ol>
    </Container>
  )
}
