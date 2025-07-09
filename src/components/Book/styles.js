import styled from 'styled-components'

export const Container = styled.li`
  position: relative;
  padding-left: 24px;
  color: ${({ theme }) => theme.COLORS.BROWN_400};
  font-size: clamp(1.2rem, 4vw, 1.7rem);


  font-family: 'Lora', serif;
  font-weight: 500;

  display: block;
`

export const Check = styled.input`
  position: absolute;
  left: 0;
  top: 0.8em;

  accent-color: ${({ theme }) => theme.COLORS.BROWN_300};
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  span {
    color: ${({ theme }) => theme.COLORS.BROWN_300};

    font-size: 12px;
    font-family: 'Merriweather Sans', sans-serif;
    font-weight: 400;
  }
`
