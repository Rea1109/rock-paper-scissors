import styled from '@emotion/styled';
import { Colors } from 'styles/theme';

export const Main = styled.main`
    position: relative;

    display: flex;
    flex-direction: column;

    align-items: center;
    width: 1440px;

    padding: 50px 0px;
    margin: auto;
`;

export const RoundTitle = styled.h1`
    font-size: 50px;
    text-align: center;
`;

export const RoundInfo = styled.h1`
    width: 320px;
    height: 400px;
    font-size: 100px;
    text-align: center;
    line-height: 400px;
`;

export const BattleWrapper = styled.section`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    width: 100%;
`;

export const BattleButton = styled.button<{ isGameOver?: boolean }>`
    position: absolute;
    top: 170px;
    width: 300px;
    height: 50px;

    border: none;
    border-radius: 6px;

    background-color: ${({ isGameOver }) => (isGameOver ? Colors.red : Colors.blue)};

    font-size: 28px;
    color: white;
`;
