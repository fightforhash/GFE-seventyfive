## 요구사항 정리 및 접근방법
주어진 value가 Array 인지, function인지, Object인지, PlainObject인지 판별해내는 함수들.
Array와 function은 구현하기 쉬웠지만 isObject는 null 판별 먼저(typeof null === "object"), 또한 typeof 만으로는 배열까지 "object"로 잡히기 때문에 배열을 제외하는 조건이 핵심이었음.

isPlainObject는 일반 객체를 판별하는 것으로, 프로토타입을 기준으로 접근함.
Plain Object는 Plain Old Javascript Object -> Object.getPrototypeOf(value) 로 가려내야함
Plain Object는 Null도 될수있고, Prototype 그 자체도 될수있음. 따라서 기존 타입과 null(Object.create(null)로 생성), 아니면 Object.prototype이 일치하는지 봐야함. 그 외의 것들은 전부 plain object에서 제외시켜도 됨.