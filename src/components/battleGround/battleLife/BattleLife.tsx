import styled from '@emotion/styled';
import { Heart, EmptyHeart } from 'assets/images';

type BattleLifeProps = {
    activeLife: number;
};

const BattleLife = ({ activeLife }: BattleLifeProps) => {
    return (
        <LifeWrapper>
            <LifeCount>
                {Array(3)
                    .fill(1)
                    .map((_, index) => (
                        <LifeHeart src={EmptyHeart} key={index} />
                    ))}
            </LifeCount>
            <LifeCount>
                {Array(activeLife)
                    .fill(1)
                    .map((_, index) => (
                        <LifeHeart src={Heart} key={index} />
                    ))}
            </LifeCount>
        </LifeWrapper>
    );
};

export default BattleLife;

const LifeWrapper = styled.div`
    position: relative;
    width: 150px;
    height: 50px;
`;

const LifeCount = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
`;

const LifeHeart = styled.img`
    width: 50px;
    height: 50px;
`;
