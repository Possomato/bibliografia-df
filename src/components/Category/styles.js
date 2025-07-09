import styled from 'styled-components'

export const Container = styled.div`
  width: 90%;
  max-width: 600px;

  display: flex;
  flex-direction: column;

  ol {
    margin-left: 16px;
  }

  h2 {
    color: ${({ theme }) => theme.COLORS.BROWN_300};
  }
`
