## 요구사항 정리 및 접근방법
딥클론 -> 딥카피 -> 원본 배열을 변경해도 복사본은 변경되지 않게하는 법을 만들어라

접근법 #1
JSON.parse(JSON.stringify(obj));
-> 하지만 이건 면접 가면 분명 재귀로 또 구현하라함.
1. 순환 참조 처리 불가
2. Date, undefined, 함수, Map, Set 등 여러 타입 올바르게 복사할수 없음
따라서 면접이나 실전 요구사항에 제약이 걸릴 수도있음.

접근법 #2
재귀
오브젝트가 아니거나 null 이면 원본을 반환하고, 배열인지 확인 후에 그대로 아이템별로 map이용해서 재귀 반환
만약 Object라면 Object.fromEntries나 Object.entries로 value의 k, v를 [k, deepClone(v)] 형태로 반환