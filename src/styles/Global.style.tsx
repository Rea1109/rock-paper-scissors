import { Global, css } from '@emotion/react';

const style = css`
    * {
        box-sizing: border-box;

        margin: 0;
        padding: 0;

        list-style: none;
    }

    button {
        cursor: pointer;
    }
`;

const GlobalStyle = () => {
    return <Global styles={style} />;
};

export default GlobalStyle;
