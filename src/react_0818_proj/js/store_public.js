//오브젝트 방식으로 작성된 자바스크립트 변수: 타입obj

export const store_public = {
    //카운트상수와 메소드(증가,감소,초기화) 설정
    count : 0,
    increment() {
        this.count += 1
    },
    decrement() {
this.count -= 1
    },
    reset() {
        this.count = 0
    }

}