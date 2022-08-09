import styled from '@emotion/styled';
import { HandScissors, HandRock, HandPaper } from 'assets/images';

const BattleChoice = () => {
    return (
        <ChoiceList>
            <ChoiceItem isChoice={false}>
                <img src={HandScissors} alt="가위 손 이미지" />
            </ChoiceItem>
            <ChoiceItem isChoice={true}>
                <img src={HandRock} alt="주먹 손 이미지" />
            </ChoiceItem>
            <ChoiceItem isChoice={false}>
                <img src={HandPaper} alt="보자기 손 이미지" />
            </ChoiceItem>
        </ChoiceList>
    );
};

export default BattleChoice;

const ChoiceList = styled.ul`
    display: flex;
    justify-content: space-around;
    width: 100%;
`;

const ChoiceItem = styled.li<{ isChoice?: boolean }>`
    display: inline-block;
    cursor: pointer;

    img {
        width: 50px;
        height: 50px;

        opacity: ${({ isChoice }) => (isChoice ? '1' : '0.5')};
    }

    :hover {
        img {
            opacity: 1;
        }
    }
`;
