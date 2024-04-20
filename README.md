# Javascript
- html문서를 조작, 제어하기 위해 만들어진 언어
```plaintext
어떻게 조작 제어?
브라우저엔 웹문서를 해석할 수 있는 렌더링 엔진이 있음,
크롬(블링크), 파이어폭스(게코), 사파리(웹킷)
브라우저로 HTML파일을 열게되면 렌더링 엔진이
HTML을 한줄씩 해석해 객체화하여 자바스크립트로 접근할 수 있도록함
그래서 문서를 객체화 했다고 해서 DOM이라고 한다
```
## DOM이란?
- Document Object Model
- 문서 객체 모델로 브라우저에서 Javascript로 html요소를 제어할 수 있도록 웹 문서를 객체화해서 제공하는 API(브라우저에서 제공하는 기능 같은것)
- DOM -> Tree구조 (html구조)(DOM Tree) -> 각각의 요소를 node라고 함

## BOM
- Browser Object Model
- 브라우저를 객체화 함으로서 자바스크립트로 제어하기 위한 인터페이스
- 마우스(하드웨어 인터페이스)
- document.getRootNode() -> 최상위 node 반환
- document.childNodes() -> 하위 node들 반환

## API란?
### Application Programming Interface
- 응용 프로그램에서 사용할 수 있도록, 운영 체제나 프로그래밍 언어가 제공하는 기능을 제어 할 수 있게 만든 인터페이스, 응용 프로그램에서 소통하기위한 접점
- Interface -> 상호간의 소통을 위해 만들어진 접점
- User Interface -> 사용자가 소통을 위해 만들어진 접점
- HTTP API(프로토콜) : 공공데이터 API, youtube API, Instagram API, facebook API, naver API, kakao API
- MQTT, coAP API
- Class, Funtion

*** ***
- Template Engine기반개발(웹 개발자) : JSP, ASP, PHP
- 모바일 개발자 = 클라이언트 개발자
- Android 앱 개발 -> java, kotlin
- ios 앱 개발 -> Object-C, Swift
*** ***

<추가 정보는 mdn 참고>
### window
- 모든 객체가 소속된 객체이며, 브라우저 창을 의미한다
### document
- 현재문서에 대한 정보를 갖고 있는 객체이다
### history
- 현재 브라우저가 접근했던 URL history를 제어할 수 있다
- history.back()
- history.foward()
### location
- 문서의 주소와 관련된 객체로 window 객체의 프로퍼티(window.location)인 동시에 document의 프로퍼티(document.location)이다, 이 객체를 이용하여 윈도우의 문서 URL을 변경할 수 있고, 문서의 위치와 관련해서 다양한 정보를 얻을 수 있다
- location.host ->현재 홈페이지 주소
- location.href = 'https://naver.com' ->웹문서 주소URL 변경
### screen
-  사용자의 디스플레이 화면에 대한 다양한 정보를 갖고 있는 객체이다
- console.dir(screen) -> 객체를 출력
### navigator 
- 실행중인 애플리케이션(브라우저)에대한 정보를 알 수 있다. 크로스브라우징 이슈를 해결할 때 사용할 수 있다
- chrome -> addEventListener
- IE  -> attachEvent
- navigator.geolocation.getCurrentPosition() -> 현재 애플리케이션에 대한 위치정보
- navigator.appName -> 앱(브라우저) 이름을 반환한다
- navigator.appVersion -> 앱(브라우저)에 대한 버전 정보를 반환한다
- navigator.userAgent -> 서버에 요정할 때 앱(브라우저)에 대한 정보이다

## script 선언
### 브라우저는 HTML파일을 위에서 아래로 순차적으로 코드를 파싱한다
0. <script></script> head에 그냥 작성시 작동 원리 :
   html parsing -> html parsing 중단 -> script fetch(스크립트 가져옴) -> script execution(스크립트 실행) -> html parsing 이어서진행
    
1. body 태그 최하단에 <script></script> 선언
2. window.onload
   - HTML파싱 DOM생성 그리고 외부 콘텐츠(images, script, css, etc)가 로드된 후 발생하는 이벤트이다
   ```javascript
         window.onload = function() {
            //실행코드
         }
   ```
3. DOMContentLoaded
    ```javascript
          document.addEventListener('DOMContentLoaded', function(){
            //실행코드
          }
   ```
    html parsing 완료 후 -> script fetch(스크립트 가져옴) -> script execution(스크립트 실행)(2, 3, 4)
4. defer
   - HTML 파싱과 함께, 비동기로 Javascript 파일을 불러온다
   - HTML 파싱 완료후, javascript 코드 실행
   ```html
         <script src="script.js" defer></script>
   ```
   html parsing -> html  parsing 동시에 script fetch(스크립트 가져옴) -> html parsing/script fetch(스크립트 가져옴) 끝 ->script execution(스크립트 실행)
5. async
   - HTML 파싱과 함께, 비동기로 Javascript 파일을 불러온다
   - HTML 파싱이 완료되지 않았더라도, 먼저 로딩되는 javascript 파일 부터 실행이 시작 된다
   ```html
     <script src="script.js" async></script>
   ```
   html parsing -> html  parsing 동시에 script fetch(스크립트 가져옴) -> html parsing 중지 -> script execution(스크립트 실행) -> html parsing 이어서 완료

*** ***
***동기 blocking - 답변 결과 기다림***<br />
***비동기 Non-bloking - 답변 결과 안 기다림***

ES5 bind -> this 설정
```javascript
      //this = window
      let person1  = {
        name: '홍길동',
        age: 20,
        sayHello: function() {
          setTimeout(
            function() {
              console.log(this);
              console.log('Hello');
              console.log(this.name);
          }, 1000);
        }
      }
      person1.sayHello();
```
```javascript
      //this -> person1
      let person1  = {
        name: '홍길동',
        age: 20,
        sayHello: function() {
          setTimeout(
            function() {
              console.log(this);
              console.log('Hello');
              console.log(this.name);
          }.bind(this), 1000);
        }
      }
      person1.sayHello();
```
```javascript
      //this -> person1
      let person1  = {
        name: '홍길동',
        age: 20,
        sayHello: function() {
          function printHello() {
            console.log(this),
            console.log(this.name),
            console.log(this.age)
         }
         setTimeout(printHello.bind((this),1000);
      }
      person1.sayHello();
```
***화살표 함수는 자신을 포함하고 있는 외부 Scope에서 this를 계승 받는다***
```javascript
      //this = person1
      let person1  = {
        name: '홍길동',
        age: 20,
        sayHello: function() {
          setTimeout(() => {
              console.log(this);
          }, 1000);
        }
      }
      person1.sayHello();
```
***화살표 함수 나오기전 예시***
```javascript
      //this = person1
      let person1  = {
        name: '홍길동',
        age: 20,
        sayHello: function() {
          let that = this;
          setTimeout(function() {
               console.log(this);
               console.log(that.name);
               console.log(that.age);
          }, 1000);
        }
      }
      person1.sayHello();
```
***strict Mode에서 호출한 놈이 없을 경우 기본값을 window로 하지 않고 undefined로 한다***
```javascript
      'use strict'
      function printThis() {
         console.log(this);
      }
      printThis();
```
***화살표함수는 객체 메서드를 선언할때 사용한된다, function(){}권장***
***화살표함수는 외부스코프인 window를 불러옴***
```javascript
      let person = {
         name: '홍길동',
         printThis: () => {
            console.log(this) //window 객체 출력
         }
      }
```
 
*** ***

## Event Phase
- Capturing = 부모 -> 자식
- Bubbling = 자식 -> 부모
- event.eventPhase(이벤트 흐름의 단계를 나타냄) -> capturing부모 요소들[1] -> 클릭요소 본인 [2] -> 다시 부모로 올라갈때 부모요소 bubbling[3]
```javascript
   const $div = document.querySelector('div');
   //true -> Capturing, false -> bubblig (기본값)
   $div.addEventListener('click', function (event) {
      console.log('['+ event.eventPahse +']capturing div 태크')
   }, true)
   $div.addEventListener('click', function (event) {
      console.log('['+ event.eventPhase +']bubbling div 태그')
   }, false)
```
## 이벤트를 막는 메소드들
### e.stopPropagation
- bubbling, capturing 전파를 막는 메소드
```javascript
   //html div -> p 있다 가정
   const $div = document.querySelector('div');
   const $p = document.querySelector('p');

   $p.addEventListener('click', function (event) {
      event.stopPropagation();  
   })
```
### Event.preventDefault()
-  해당 HTML 요소의 대한 기본 동작을 실행하지 않도록 지정함
```javascript
   const $a = document.querySelector('a');
   $a.addEventListener('click', function(event){
      event.preventDefault();
      //문서 이동 안됨
      //submit, a 기능 막을때 사용
   })
```

*** ***

## Array API
- map()
- some ()
- every()
- filter()
- reduce()
  
### map()
-  배열 내의 모든 요소 대해서 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환함
```javascript
   const numbers = [1, 2, 3, 4, 5, 6, 7];
   //1.  function
   const result = numbers.map(function(number){
      return number * 2;  //[2, 4, 6, 8, 10, 12, 14]
   });
   console.log(result);
```
```javascript
   //2. 화살표함수
   const result = numbers.map((number) => number *2);
   console.log(result); //[2, 4, 6, 8, 10, 12, 14]
```
```javascript
   class Student{
      constructor(name, koreanLanguage, english, mathmatics) {
         this.name = name;
         this.koreanLanguage = koreanLanguage;
         this.english = english;
         this.mathmatics = mathmatics;
      }
   }
   const student1 = new Student('홍길동', 95, 87, 75);
   const student2 = new Student('김길동', 67, 80, 100);
   const student3 = new Student('이길동', 89, 75, 80);
   const student4 = new Student('최길동', 48, 52, 98);

   const students = [student1, student2, student3, student4];

   //map API 로 영어점수만 반환
   students.map((student) => student.english);
   console.log('영어 점수', students.map((student) => student.english)); //[87, 80, 75, 52]
   console.log('학생 이름', students.map((student) => student.name)); //['홍길동', '김길동', '이길동', '최길동']
```
### some() -> true/false
- 배열 안에 어떤 요소라도 주어진 판별 함수를 통과하는지 테스트 한다
```javascript
      const fruits = ["사과", "딸기", "배", "참외", "딸기", "수박"];
      const result = fruits.some((fruit) => fruit === "수박");
      console.log(result); //true
```
```javascript
      const fruits = ["사과", "딸기", "배", "참외", "딸기", "수박"];
      console.log(
         "과일중에 배가 있나요?",
         fruits.some((fruit, index) => {
            console.log("index:",index, "fruit", fruit);
            return fruit === "배";
         })
      )
      //index: 0 fruit: 사과
      //index: 1 fruit: 딸기
      //index: 2 fruit: 배
```
### every()
- 배열 안의 모든 요소에 주어진 판별함수가 모두 참일 경우에만 true를 반환함
```javascript
      const fruits = ["수박", "수박", "수박", "수박", "딸기", "수박"];
      const result = fruits.every((fruit) -> fruit === "수박");
      console.log(reault); //false
```
### filter
- 배열의 각 요소들을 함수에 해당하는 요소들만 필터링해 새 배열로 반환
```javascript
   //짝수만 필터링
   const numbers = [1, 2, 3, 4, 5, 6, 7];
   const result = numbers.filter((number) => number % 2 === 0);
   console.log('짝수만 출력', result) //[2, 4, 6]

   const result = numbers.filter((number) => number % 2 === 1);
   console.log('홀수만 출력', result) //[1, 3, 5, 7]
```

### reduce
- 배열의 각 요소에 대해 주어진 리듀서(reducer)함수를 실행하고, 하나의 결과값을 반환함
#### reducer 함수
- 누적 값 (acc)
- 현재 값 (cur)
- 현재 인덱스 (idx)
- 원본 배열 (src)
```javascript
      //누적합 구하기
      const number = [1, 2, 3, 4, 5, 6, 7];
      const result = numbers.reduce((acc, cur, idx, src) => {
         console.log("acc", acc, "cur", cur, "idx", idx);
         return acc; // 0이 return 되서 다시 매개변수 acc로 들어감
      }, 0);
      console.log("result:", result);
      //acc = 0
      //curr = 배열안에 있는요소 1, 2, 3, 4, 5, 6, 7
      //idx = 0, 1, 2, 3, 4, 5, 6

      //acc: 0 cur:1 idx: 0
      //acc: 0 cur:2 idx: 1
      //acc: 0 cur:3 idx: 2
      //acc: 0 cur:4 idx: 3
      //acc: 0 cur:5 idx: 4
      //acc: 0 cur:6 idx: 5
      //acc: 0 cur:7 idx: 6
      //result : 0
```
```javascript
      //누적합 구하기
      const number = [1, 2, 3, 4, 5, 6, 7];
      const result = numbers.reduce((acc, cur, idx, src) => {
         console.log("acc", acc, "cur", cur, "idx", idx);
         return acc + cur; // 0이 cur로 불러와진 배열요소랑 더하기한 값이 return 되서 매개변수 acc로 들어감
      }, 0);
      console.log("result:", result);
      //acc = 0
      //curr = 배열안에 있는요소 1, 2, 3, 4, 5, 6, 7
      //idx = 0, 1, 2, 3, 4, 5, 6

      //acc: 0 cur:1 idx: 0
      //acc: 1 cur:2 idx: 1
      //acc: 3 cur:3 idx: 2
      //acc: 6 cur:4 idx: 3
      //acc: 10 cur:5 idx: 4
      //acc: 15 cur:6 idx: 5
      //acc: 21 cur:7 idx: 6
      //result: 28 
```
***reduce를 활용해 중복된 값 제거***
```javascript
      const fruits = ["사과", "딸기", "배", "참외", "딸기", "수박"];
      const result = fruits.reduce((acc, cur) => {
         if(arr.includes(cur) === false){
            acc.push(cur);
         }
         return acc;
      }, [])
      //빈배열로 시작

      console.log(result);
      //(5) ["사과", "딸기", "배", "참외", "수박"];
```
*** ***

## 모듈 시스템










