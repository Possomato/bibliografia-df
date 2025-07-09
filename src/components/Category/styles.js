import styled from 'styled-components'

export const Container = styled.div`
  width: 90%;
  max-width: 600px;

  display: flex;
  flex-direction: column;

  padding-bottom: 20px;

  ol {
    margin-left: 16px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  h2 {
    color: ${({ theme }) => theme.COLORS.BROWN_300};
    font-size: 32px;
    font-family: 'Lora', serif;
    font-weight: 600;
  }
`
