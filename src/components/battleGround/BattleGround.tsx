import { HandRock } from 'assets/images';
import BattleChoice from './battleChoice/BattleChoice';
import * as Style from './BattleGround.style';
import BattleLife from './battleLife/BattleLife';

const BattleGround = () => {
    return (
        <Style.Wrapper>
            <Style.PlayerName>Computer</Style.PlayerName>
            <Style.HandImage src={HandRock}></Style.HandImage>
            <BattleChoice />
            <BattleLife activeLife={2} />
        </Style.Wrapper>
    );
};

export default BattleGround;
