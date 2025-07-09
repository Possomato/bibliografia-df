import { Container, Content, Check } from './styles'

export function Book({ title, author, id, checked, onCheck }) {
  return (
    <Container>
      <Check
        type="checkbox"
        id={id}
        name={id}
        checked={checked}
        onChange={onCheck}
      />
      <Content>
        {title}
        <span>{author}</span>
      </Content>
    </Container>
  )
}
