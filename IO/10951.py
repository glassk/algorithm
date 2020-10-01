#10951 A+B -4
#check1: 10950번과 달리 테스트 케이스의 수가 주어지지 않는다
#check2: for line in sys.stdin으로 입력받으면 입력횟수 만큼 코드 실행. 단, 입력값은 line.split()이다. (10950번처럼 하면 논리상 맞지 않다.)
import sys

for line in sys.stdin:
    print(sum(map(int, line.split())))

#입력값 범위 고려
for line in sys.stdin:
    A, B = map(int, line.split())
    if 0 < A < 10 and 0 < B < 10:
        print(A+B)
    else: print("Check input condition: 0 < input < 10")
