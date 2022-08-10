import styled from '@emotion/styled';
import { memo } from 'react';
import { Colors } from 'styles/theme';
import { BattleResultList } from 'types';

type BattleResultInfoProps = {
    info: BattleResultList;
};

const BattleResult = ({ info }: BattleResultInfoProps) => {
    const handleColor = (result: number): string => {
        if (result === 0) return Colors.draw;
        if (result > 0) return Colors.win;
        return Colors.lose;
    };

    const handleResult = (result: number): string => {
        if (result === 0) return 'Draw';
        if (result > 0) return 'YOU Win';
        return 'YOU Lose';
    };

    return <ResultWrapper result={handleColor(info.result)}>{handleResult(info.result)}</ResultWrapper>;
};

export default memo(BattleResult);

const ResultWrapper = styled.h2<{ result: string }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 50px;

    margin-top: 10px;
    border-radius: 10px;
    background-color: ${({ result }) => result};
    text-align: center;
`;
