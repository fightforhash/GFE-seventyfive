## 요구사항 정리 및 접근방법
주어진 데이터 합치기
먼저 세션을 저장할 Map을 하나 생성, 각 세션별로 forEach를 돌음.
맵에 현재 유저가 있다면 그 유저의 세션 객체를 꺼내서 duration을 누적해 올려주고. equipment 도 Set 에 계속 추가하면서 갱신해줌(중복 방지)
유저가 없다면 ... 스프레드로 새 cloudSession 생성, equipment는 이후 중복 처리를 위해 Set으로 변환하여 Map 에 저장. 동시에 결과 배열에도 classSession을 넣어줌. 
마지막에 리턴할때는 equipment를 Array.from()을 통해 배열로 바꾼 뒤 sort()로 알파벳 정렬하여 최종 결과를 반환함.