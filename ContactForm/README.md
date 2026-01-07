## 요구사항 정리 및 접근방법
목표: name, email, message 입력 필드를 가진 폼 구현.
각 입력값을 실시간으로 추적하기 위해 controlled component 사용

입력 필드의 name속성을 기준으로 상태를 관리하고, handleChange 함수를 이용해 onChange 이벤트에 반응시킨
이 방식으로 각 필드별 핸들러를 만들지 않고도 확장 가능한 구조 유지 가능

폼 제출은 기본 동작 제어 위해 onSubmit 이벤트 사용했으며, action 과 method 역할을 명확히 구분해 로직과 폼 동작을 혼동하지 않도록 했다.