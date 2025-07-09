import styled from 'styled-components'

export const Container = styled.li`
  color: ${({ theme }) => theme.COLORS.BROWN_400};
  display: flex;
  flex-direction: column;
  span {
    color: ${({ theme }) => theme.COLORS.BROWN_300};
  }
`
