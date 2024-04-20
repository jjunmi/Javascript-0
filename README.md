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
