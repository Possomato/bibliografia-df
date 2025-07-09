import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0; 
    box-sizing: border-box; 
  }

  body{
    width: 100vw;
    height: 100vh;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  main{
    height: 95vh;
    width: 95vw;
    max-width: 800px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: baseline;

    border: 1px solid ${({ theme }) => theme.COLORS.BROWN_VIBRANT};
    border-radius: 5px;
  }

  h1{
    color: ${({ theme }) => theme.COLORS.BROWN_400};
    padding: 24px 0;
    font-family: 'Lora', serif;
    font-weight: 500;
  }

`
