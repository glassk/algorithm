#10950 A+B -3
T = int(input())

for i in range(T):
    A, B = map(int, input().split())
    if 0 < A < 10 and 0 < B < 10:
        print(A+B)
    else: print("Check input condition: 0 < input < 10")

#simple way
for i in range(T):
    print(sum(map(int, input().split())))

#further way
#입력 값을 많이 받을 경우 시간 초과 방지를 위해 input 대신 sys 모듈의 sys.stdin을 사용하는 경우도 존재
#입출력 속도: (빠름) sys.stdin.readline() < raw_input() < input() (느림)
#sys.stdin.readline()은 입력한 한 라인을 interable한 컨테이너에 저장하며 띄어쓰기와 \n을 포함하므로 split()을 이용하는 것이 좋다
#만약 여러 줄을 입력받을 경우 sys.stdin을 이용한다. 종료를 원하면 ^Z을 입력하면 된다.
#참고1: https://www.acmicpc.net/board/view/855
#참고2: https://bnzn2426.tistory.com/105
import sys

for _ in range(int(sys.stdin.readline())):
    print(sum(map(int, sys.stdin.readline().rstrip().split())))