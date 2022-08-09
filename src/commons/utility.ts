import { HandPaper, HandRock, HandScissors, Question } from '../assets/images/index';

export const replaceHandImage = (number: number): string => {
    if (number === 1) return HandScissors;
    if (number === 2) return HandRock;
    if (number === 3) return HandPaper;
    return Question;
};

export const replaceHandString = (number: number): string => {
    if (number === 1) return '가위';
    if (number === 2) return '바위';
    if (number === 3) return '보';
    return '생각중...';
};

export const replaceBattleResult = (number: number): string => {
    if (number > 0) return 'Win';
    if (number < 0) return 'Lose';
    return 'Draw';
};

export const replaceResult = (number: number): string => {
    if (number === 1) return 'Scissors';
    if (number === 2) return 'Rock';
    return 'Paper';
};
