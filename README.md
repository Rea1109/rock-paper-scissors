# 가위 바위 보 게임

## [게임하러가기](https://rea-rock-paper-scissors.herokuapp.com/)


## 프로젝트 실행


```
npm install
npm start
```

## 프로젝트 개요


> React 와 Typescript 숙달을 목표로 함    
> emotion.js 를 사용하여 css-in-js 방식으로 스타일링 진행.   
> 코드 포멧터는 pretter , eslint 를 사용.   
>
> 전역 state 관리는 상태관리 라이브러리 대신 localstorage를 이용.
>
> [게임 방법]
>
> -   랜덤하게 가위 바위 보를 제시하는 컴퓨터를 이기는 게임 입니다.
> -   가위 바위 보 하나를 선택하고 START 버튼을 누르면 게임이 시작됩니다.
> -   3초의 카운트다운 후 대결 결과를 확인합니다.
> -   결과에 따라 생명이 차감 되고 해당 결과가 저장됩니다.
> -   3개의 생명이 모두 차감되면 최종적으로 게임이 종료 됩니다.

## 폴더 구조

```
    - src
        - assets
        - commons
        - components
            - battleGround
                - battleChoice
                - battleLife
            - battleResult
        - styles
        - types
```
