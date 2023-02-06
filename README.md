기술스택 or React 경험

1. typescript // pages/typescript
2. Redux-toolkit // pages/state, pages/store
3. 반응형 styled-components // style/global, style/theme
4. 회원가입/주소찾기 - react-daum-postcode // pages/daumAddress
   https://postcode.map.daum.net/guide
5. favicon 변경 - public 파일에 favicon 파일 넣기 (이미지파일 favicon으로 변환해야한다.)
6. modal 구현 - 삼항연산자X , wrapper와 container를 나누고 props로 구현하기 + transition , transform
7. useEffect 안에서 API를 받아올 때는 따로 함수를 설정한 후 async와 await를 준다.
8. 삼항연산자 : Loading ? () : ();
9. map: data.map((e)=> ());
10. const date = new Date().toLocaleString(); //현재날짜
11. react-router ( BrowserRouter , Routes , Route / path , element )
12. ScrollToTop : 버튼을 누르면 맨위로 이동
13. Local Storage (setItem, getItem, removeItem)

CSS

1. overflow-x : x축, 즉 왼쪽과 오른쪽의 내용이 넘칠 때
   overflow-y : y축, 즉 위쪽과 아래쪽의 내용이 넘칠 때
   { hidden : 범위를 뚫고 나오는 내용 숨기기,
   scroll : 스크롤바 생성,
   visible : 범위를 뚫고 나오는 내용 보이기}

2. disply: grid = 두 방향(가로,세로) 레이아웃 시스템  
    <=> flex = 한 방향 레이아웃 시스템

   justify-content :grid 전체에서의 변화
   justify-items : 하나의 grid에서의 변화
   //https://happygunja.tistory.com/107

3. SVG 파일받은 후 따로 컴포넌트화해서 fill속성 이용하기
   // import { ReactComponent as CancelIcon } from "./assets/icons/cancleIcon.svg";

4. label 태그에 htmlFor 속성 -> input 태그에 id 속성적용 = label누르면 input포커스

5. aria-label: reader에만 읽힌다.
   title : reader에 읽히고 브라우저 상에서 해당 태그에 마우스 올려놓으면 텍스트형식이 뜬다.

6. input: 높이를 높히면 가운데정렬 되어있고 오른쪽으로 텍스트가 쭉 이어지면서 화면밖으로 나간다.
   textarea: 높이를 높히면 오른쪽 위에서부터 글이 시작하고 area공간에서만 텍스트가 작성된다.

7. z-index : 더 큰 z-index 값을 가진 요소가 작은 값의 요소 위를 덮는다.

8. transform 내 사용 (translate , scale, rotate)-x축,y축
   transition: property duration timing-function

9. 동일 페이지에서 클릭시 정해진 위치로 이동하기
   클릭태그: <a태그 href="#top>
   이동하려는태그: <div태그 id="top">

10. alert
    if문, window.confirm 활용

11. input type
    text : 텍스트 입력
    password : 문자가 별표나 동그라미로 표시
    submit : form-handler에게 폼을 제출하는 버튼을 정의
    radio : 동그라미버튼
    checkbox: 체크박스버튼
    button : 버튼
    number : 숫자만 써진다.
    data : 사용자가 날짜를 포함해야 하는 입력필드 표시
    range : 슬라이드 컨트롤
    month : 월과 연도를 선택
    week : 주와 연도를 선택
    time : 시간을 선택
    http://jun.hansung.ac.kr/CWP/htmls/HTML%20Input%20Types.html

12. order : 형제요소 중에서 태그 순서바꾸기 (브라우저에서 출력순서만 바꾸기) \*display 줘야한다.
    ex) order: 1, order:2 // 숫자가 낮을수록 더 먼저 랜더링된다.

13. tip!
    flex-grow : 일정한 비율로 나누기
    width: % 를 사용하고 height는 padding이나 margin을 사용하기

---

1. 무료이미지 사이트
   https://unsplash.com/
   https://www.behance.net/
   https://www.pexels.com/ko-kr/
   https://morguefile.com/
   https://pixabay.com/

2. 무료아이콘 사이트
   https://fontawesome.com/
   https://icons8.com/
   https://simpleicons.org/
   https://iconmonstr.com/shopping-cart-thin-svg/
   https://www.iconfinder.com/search?q=user
