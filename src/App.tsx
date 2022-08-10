import * as Style from './App.style';
import BattleGround from 'components/battleGround/BattleGround';
import { useEffect, useState } from 'react';
import BattleResult from 'components/battleResult/BattleResult';
import { BattleResultList } from 'types';
import { replaceBattleResult } from './commons/utility';

function App() {
    const [round, setRound] = useState<number>(() => JSON.parse(localStorage.getItem('info') || '[]').length);
    const [count, setCount] = useState(4);
    const [isGameOver, setIsGameOver] = useState(false);

    const [userChoice, setUserChoice] = useState(0);
    const [comChoice, setComChoice] = useState(0);

    const [battleResult, setBattleResult] = useState('READY');
    const [battleResultInfo, setBattleResultInfo] = useState<BattleResultList[]>(() =>
        JSON.parse(localStorage.getItem('info') || '[]')
    );

    const [userLife, setUserLife] = useState<number>(() => JSON.parse(localStorage.getItem('user-life') || '3'));
    const [comLife, setComLife] = useState<number>(() => JSON.parse(localStorage.getItem('com-life') || '3'));

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

    const makeRandomNumber = (): number => {
        const number = Math.floor(Math.random() * 3 + 1);
        return number;
    };

    const onBattle = (user: number, com: number): number => {
        let result = user - com;
        if (user === 1 && com === 3) result *= -1;
        if (user === 3 && com === 1) result *= -1;
        return result;
    };

    const saveBattleInfo = (info: BattleResultList) => {
        let preInfo: BattleResultList[] = JSON.parse(localStorage.getItem('info') || '[]');

        if (preInfo.length !== 0) {
            const newBattleInfo = [...preInfo, info];
            localStorage.setItem('info', JSON.stringify(newBattleInfo));
        } else {
            localStorage.setItem('info', JSON.stringify([info]));
        }
        preInfo = JSON.parse(localStorage.getItem('info') || '[]');

        setRound(preInfo.length);
        setBattleResultInfo(preInfo);
    };

    const countLife = (result: number) => {
        let user: number = JSON.parse(localStorage.getItem('user-life') || '3');
        let com: number = JSON.parse(localStorage.getItem('com-life') || '3');

        if (result > 0) {
            com -= 1;
            localStorage.setItem('com-life', JSON.stringify(com));
            setComLife(com);
        }

        if (result < 0) {
            user -= 1;
            localStorage.setItem('user-life', JSON.stringify(user));
            setUserLife(user);
        }
    };

    const isValidationCheck = (): boolean => {
        if (comChoice !== 0) {
            setComChoice(0);
            setBattleResult('READY');
            return false;
        }
        if (userChoice === 0) {
            alert("가위/바위/보' 중 하나를 선택해주세요!");
            return false;
        }

        return true;
    };

    const onClickBattle = () => {
        if (isValidationCheck()) {
            countDown();

            const computer: number = makeRandomNumber();
            const result = onBattle(userChoice, computer);

            setTimeout(() => {
                countLife(result);
                setCount(4);
                setComChoice(computer);
                setBattleResult(replaceBattleResult(result));
                saveBattleInfo({ user: userChoice, computer, result });
            }, 4000);
        }
    };

    const onClickNewBattle = () => {
        localStorage.clear();
        setIsGameOver(false);
        setRound(0);
        setUserChoice(0);
        setComChoice(0);
        setBattleResult('READY');
        setBattleResultInfo([]);
        setUserLife(3);
        setComLife(3);
    };

    const checkLife = () => {
        if (comChoice !== 0) {
            userLife > comLife ? alert('당신이 승리하였습니다.') : alert('컴퓨터가 승리하였습니다.');
            setIsGameOver(true);
        }
    };

    useEffect(() => {
        if (userLife === 0 || comLife === 0) checkLife();
    }, [userLife, comLife]);

    return (
        <Style.Main>
            <Style.RoundTitle>Round : {round}</Style.RoundTitle>
            {isGameOver ? (
                <Style.BattleButton onClick={onClickNewBattle} isGameOver={true}>
                    RESET
                </Style.BattleButton>
            ) : (
                <Style.BattleButton onClick={onClickBattle}>{comChoice === 0 ? 'START' : 'RESTART'}</Style.BattleButton>
            )}

            <Style.BattleWrapper>
                <BattleGround activeLife={userLife} choice={userChoice} setChoice={setUserChoice}></BattleGround>
                <Style.RoundInfo>{count === 4 ? battleResult : count}</Style.RoundInfo>
                <BattleGround isComputer={true} activeLife={comLife} choice={comChoice}></BattleGround>
            </Style.BattleWrapper>
            {battleResultInfo.map((info: BattleResultList, index: number) => (
                <BattleResult key={index} info={info} />
            ))}
        </Style.Main>
    );
}

export default App;
