#1463 1로 만들기
#check1: 아래의 단순한 방식으로 하면 최적의 연산 횟수로 1을 만들 수 있다고 보장할 수 없다.
#DP(Dynamic Programming) 요구
#새로운 방식에 대해서는 내일 정리해 보자
N = int(input())

min = 0
while N >= 1:
    if N == 1:
        break;

    if N%3 == 0:
        N = N//3
        min += 1
    else:
        N = N-1
        min += 1

    if N%2 == 0:
        N = N//2
        min += 1
print(min)

