import * as Style from './App.style';
import { Playground } from 'assets/images';
import BattleGround from 'components/battleGround/BattleGround';
import { useState } from 'react';

function App() {
    const [count, setCount] = useState(4);

    const countDown = () => {
        let time = 4;
        const interval = setInterval(() => {
            if (time > 0) {
                time--;
                setCount(pre => pre - 1);
                return;
            }
            clearInterval(interval);
        }, 1000);
    };

    const onClickBattle = () => {
        countDown();
    };

    return (
        <Style.Main>
            <Style.BackGroundImage src={Playground} alt="놀이터 배경이미지" />
            <Style.RoundTitle>Round : 1</Style.RoundTitle>
            <Style.BattleButton onClick={onClickBattle}>START</Style.BattleButton>
            <Style.BattleWrapper>
                <BattleGround></BattleGround>
                <Style.RoundInfo>{count}</Style.RoundInfo>
                <BattleGround></BattleGround>
            </Style.BattleWrapper>
        </Style.Main>
    );
}

export default App;
