---
title: 'JS에서 텍스트 어떻게 쓰세요?'
date: '2023-02-27'
tags: ['DOM', 'JavaScript']
summary: 'js에서의 올바른 텍스트 조작 방법을 알아보자.'
published: true
---

js에서 dom을 조작할 때 텍스트를 이용하는 방법은 여러가지가 있다.
문득 어떤 방법을 사용하는게 맞는지 고민이 들어서 알아보고 정리해보았다!

## textContent

- `Node`의 속성으로 해당 Element의 텍스트 값을 읽어온다.
- raw text로 다른 요소들에 비해 파싱이 빠르다.
- script나 style에 상관없이 해당 노드가 가진 텍스트 값을 모두 읽어옴.

<br />

## innerText

- `Element`의 속성으로 해당 Element의 텍스트 값을 읽어온다.
- 실제 눈에 보이는 결과값, 사람이 읽을 수 있는 요소만 가져옴. -> `textContent` 와의 차이점
- script나 style에 의해 숨겨진 요소는 반환하지 않음!
- IE(8이하) 에 활용.

<br />

## textContent와 innerText의 차이 보기

```html
<body>
  <div>aaa</div>
  <div style="display: none;">bbb</div>
</body>
```

인 html이 있을 때

```javascript
const body = document.querySelector('body');

const textContent = body.textContent;
const innerText = body.innerText;

console.log(textContent); // 'aaabbb'
console.log(innerText); // 'aaa'
```

textContent는 style에 관계없이 aaabbb를 반환하지만,
innerText는 눈에 보이는 aaa만 반환한다.

<br />

## innerHTML

- `Element`의 속성으로 해당 Element의 HTML을 읽어온다.
- ❗️ XSS 공격 위험 - 보안 문제 있음
  - XSS(Cross-Site Scripting)은 관리자가 아닌 이가 웹 페이지에 악성 스크립트를 삽입할 수 있는 취약점이라고 한다.
  - 게시판에 악성 스크립트가 담긴 글을 올리는 등 방식으로 악용된다고 함.

<br />

## 결론

- `textContent` 가 성능과 보안상으로 권장됨.
- `innerText` 는 필요한 경우에 사용하면 된다. (렌더링 텍스트가 필요하거나 IE8이하)
- html의 파싱이 필요한 것이 아니면 가급적 `innerHtml` 은 사용을 지양하자.

<br />

## 참고자료

https://developer.mozilla.org/ko/docs/Web/API/Node/textContent
https://developer.mozilla.org/ko/docs/Web/API/HTMLElement/innerText
https://developer.mozilla.org/ko/docs/Web/API/Element/innerHTML
https://developer.mozilla.org/ko/docs/Web/API/Document/createTextNode
https://velog.io/@raram2/%EB%8B%B9%EC%8B%A0%EC%9D%B4-innerHTML%EC%9D%84-%EC%93%B0%EB%A9%B4-%EC%95%88%EB%90%98%EB%8A%94-%EC%9D%B4%EC%9C%A0
