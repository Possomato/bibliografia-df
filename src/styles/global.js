import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0; 
    box-sizing: border-box; 
  }

  body {
    min-height: 100vh;
    background: linear-gradient(120deg, ${({ theme }) => theme.COLORS.BACKGROUND} 80%, #ece7e2 100%);
    font-family: 'Merriweather Sans', 'Segoe UI', Arial, sans-serif;
    color: ${({ theme }) => theme.COLORS.BROWN_400};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    transition: background 0.3s;
  }

  main {
    width: 95vw;
    max-width: 800px;
    margin: 32px 0 24px 0;
    padding: 32px 24px 24px 24px;
    background: #fff;
    border: 1.5px solid ${({ theme }) => theme.COLORS.BROWN_VIBRANT};
    border-radius: 16px;
    box-shadow: 0 8px 32px rgba(106, 81, 66, 0.08), 0 1.5px 4px rgba(106, 81, 66, 0.04);
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: box-shadow 0.3s, border-color 0.3s;
  }

  h1 {
    color: ${({ theme }) => theme.COLORS.BROWN_400};
    padding: 32px 0 16px 0;
    font-family: 'Lora', serif;
    font-weight: 600;
    font-size: 2.1rem;
    text-align: center;
    width: 100%;
    letter-spacing: 1px;
    text-shadow: 0 2px 8px rgba(106, 81, 66, 0.08);
    transition: color 0.3s;
  }

  ul {
    width: 100%;
    list-style: none;
    margin-top: 12px;
  }

  /* Scrollbar suave */
  ::-webkit-scrollbar {
    width: 8px;
    background: ${({ theme }) => theme.COLORS.BROWN_100};
    border-radius: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.BROWN_300};
    border-radius: 8px;
  }
`
