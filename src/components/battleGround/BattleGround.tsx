import { replaceHandImage, replaceHandString } from 'commons/utility';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import BattleChoice from './battleChoice/BattleChoice';
import * as Style from './BattleGround.style';
import BattleLife from './battleLife/BattleLife';

type BattleGroundProps = {
    isComputer?: boolean;
    activeLife: number;
    choice: number;
    setChoice?: Dispatch<SetStateAction<number>>;
};

const BattleGround = ({ isComputer = false, activeLife, choice, setChoice }: BattleGroundProps) => {
    const [computerResult, setComputerResult] = useState('생각중...');

    useEffect(() => {
        setComputerResult(replaceHandString(choice));
    }, [choice]);
    return (
        <Style.Wrapper>
            <Style.PlayerName>{isComputer ? 'Computer' : 'YOU'}</Style.PlayerName>
            <Style.HandImage src={replaceHandImage(choice)}></Style.HandImage>

            {isComputer ? computerResult : <BattleChoice choice={choice} setChoice={setChoice} />}
            <BattleLife activeLife={activeLife} />
        </Style.Wrapper>
    );
};

export default BattleGround;
