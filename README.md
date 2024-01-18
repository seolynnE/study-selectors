**set** 
<br />
- 이 속성이 설정되면 selector는 쓰기 가능한 상태를 반환한다. 첫번째 매개변수로 콜백 객체와 새로 입력 값이 전달된다. 사용자가 selector를 재설정할 경우 새로 입력 값은 T 타입의 값 또는 DefaultValue 타입의 객체일 수 있다. 콜백에는 다음이 포함된다.
<br /><br />
**get 매개변수**
  <br />
- 다른 atom이나 selector로부터 값을 찾는데 사용되는 함수. 이 함수는 selector를 주어진 atom이나 selector를 구독하지 않는다.
<br /><br />
**set 매개변수**
<br />
- 업스트림 Recoil 상태의 값을 설정할 때 사용되는 함수. 첫 번째 매개변수는 Recoil state, 두 번째 매개변수는 새로운 값(newValue)이다. 새로운 값은 업데이트 함수나 재설정 액션을 전파하는 DefalutValue 객체일 수 있다.
<br />
``` javascript
const proxySelector = selector({
key: 'ProxySelector',
get: ({get}) => ({...get(myAtom), extraField: 'hi'}),
set: ({set}, newValue) => set(myAtom, newValue),
});
```
