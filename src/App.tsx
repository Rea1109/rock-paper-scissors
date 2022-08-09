import * as Style from './App.style';
import { Playground } from 'assets/images';
import BattleGround from 'components/battleGround/BattleGround';

function App() {
    return (
        <Style.Main>
            <Style.BackGroundImage src={Playground} alt="놀이터 배경이미지" />
            <Style.RoundTitle>Round : 1</Style.RoundTitle>
            <Style.BattleWrapper>
                <BattleGround></BattleGround>
                <Style.RoundInfo>READY</Style.RoundInfo>
                <BattleGround></BattleGround>
            </Style.BattleWrapper>
            <Style.BattleButton>START</Style.BattleButton>
        </Style.Main>
    );
}

export default App;
