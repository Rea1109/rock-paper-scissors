# 가위 바위 보 게임

## [게임하러가기](https://rea-rock-paper-scissors.herokuapp.com/)

<hr>

## 프로젝트 실행

<hr>

```
npm install
npm start
```

## 프로젝트 개요

<hr>

> React 와 Typescript 기반 프로젝트로  
> emotion.js 를 사용하여 css-in-js 방식으로 스타일링을 했습니다.
> 코드 포멧터는 pretter , eslint 를 사용하였습니다.
>
> React state 관리 , component 간 props 공유, component life cycle 을 이해하고  
> typescript를 활용 코드의 type을 지정 , 활용하는 능력을 숙달 하는 것이 목표 였습니다.
> 전역 state 관리는 상태관리 라이브러리 대신 localstorage를 이용했습니다.
>
> [게임 방법]
>
> -   랜덤하게 가위 바위 보를 제시하는 컴퓨터를 이기는 게임 입니다.
> -   가위 바위 보 하나를 선택하고 START 버튼을 누르면 게임이 시작됩니다.
> -   3초의 카운트다운 후 대결 결과를 확인합니다.
> -   결과에 따라 생명이 차감 되고 해당 결과가 저장됩니다.
> -   3개의 생명이 모두 차감되면 최종적으로 게임이 종료 됩니다.

## 폴더 구조

<hr>

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
