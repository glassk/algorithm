#2577 숫자의 개수
#크기가 10인 리스트 0으로 초기화하기: (리스트명) = [0 for _ in range(10)]
def countNumberByDigit(product, digit):
    count = [0 for _ in range(10)]
    for i in range(digit):
        for j in range(10):
            if product % 10 == j:
                count[j] += 1
        product //= 10
    return count

A = int(input())
B = int(input())
C = int(input())

if 100 <= A < 1000 and 100 <= B < 1000 and 100 <= C < 1000:
    product = A * B * C
    digit = len(str(product))
    count = countNumberByDigit(product, digit)
    for i in range(len(count)):
        print(count[i])
else: 
    print("Check input condition: 100 <= input < 1000")
#simple way
#리스트에 찾고자 하는 항목이 몇 개 들어 있는지 확인: (리스트명).count('(찾고자 하는 항목)')
#level1.py 의 1000번 문제 simple way 참고
# 참고: https://vision-ai.tistory.com/entry/%ED%8C%8C%EC%9D%B4%EC%8D%AC-%EB%A6%AC%EC%8A%A4%ED%8A%B8-count-%EC%99%80-len
a = int(input())
b = int(input())
c = int(input())

d = list(map(int, (str(a * b * c))))

for i in range(10):
    print(d.count(i))