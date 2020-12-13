simple_cra_boilerplate
1. 소개
(1) 본 프로젝트는 CRA(creat-react-app)를 업데이트하였으며,  react 초보자를 위한 프로젝트입니다.
(2) 누구나 쉽게 개발하기 적합한 환경을 구축하고, 빠르게 프로젝트를 만들어가기 기본적인 컴포넌트들을 제공합니다.
(3) 누구든 가져다 쓰고 자유롭게 수정해서 사용해도 무방합니다.

2. 방향성 및 커스텀 내용
(0) class 컴포넌트 사용
> React는 프레임워크라기보다는 라이브러리라고 생각하는 개인적인 생각에 의하자면, hooks의 use function들은 react를 마치 프레임워크처럼 만들어 버리는것 같습니다.
왜냐하면, 기존 pure javascript 사용자가 코드를 봤을때 쉽게 추가/수정 할수있다면 이거는 javascript 라이브러리가 맞지만, 아니라면 프레임워크에 가깝다고 보기 때문입니다.
따라서, 개인적인 이 생각에 기반해 본 프로젝트는 class 컴포넌트 사용을 지향합니다.
(1) craco. 
> CRA를 eject하지않고, craco를 이용해 절대경로를 사용가능하게 합니다.
(2) react-hot-loader. 
> react-hot-loader를 적용, 새로고침하지않고도 화면을 새로 렌더링해줘 개발 편의성이 증가하였습니다.
(3) styled-component, scss
> 기본적으로 styled-component의 사용을 지향합니다. styled-component가 사용성이 유연하고, 유지관리의 편의성이 좋다고 판단하였습니다.
