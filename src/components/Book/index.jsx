import { Container, Content, Check } from './styles'

export function Book({ title, author, id }) {
  return (
    <Container>
      <Check type="checkbox" id={id} name={id} />
      <Content>
        {title}
        <span>{author}</span>
      </Content>
    </Container>
  )
}
