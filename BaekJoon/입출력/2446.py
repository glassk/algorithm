#2446 별 찍기 - 9
N = int(input())

if 1 <= N <= 100:
    for i in range(N, 0, -1):
        print(" "*(N-i) + "*"*(2*i-1))
    for i in range(2, N+1):
        print(" "*(N-i) + "*"*(2*i-1))
else:
    print("Check input condition: 1 <= N <= 100")

#further way
#abs(x): 절댓값을 구하는 함수(built-in function). 값 자체를 변화시키지는 않는다.
#매개변수로 정수와 실수 모두 넣을 수 있으며 정수/실수 그대로 리턴한다.
#참고: https://blockdmask.tistory.com/380
#반복문 하나로도 충분히 표현할 수 있다.
for n in range(-N+1, N):
    print(" "*(N-abs(n)-1) + "*"*(2*abs(n)+1))