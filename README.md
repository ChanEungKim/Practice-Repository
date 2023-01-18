기술스택 or 경험

1. typescript // pages/typescript
2. Redux-toolkit // pages/state, pages/store
3. 반응형 styled-components // style/global, style/theme
4. 회원가입/주소찾기 - react-daum-postcode // pages/daumAddress
   https://postcode.map.daum.net/guide
5. favicon 변경 - public 파일에 favicon 파일 넣기 (이미지파일 favicon으로 변환해야한다.)

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

9. tip!
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
