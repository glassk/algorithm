#11021 A+B -7
#Check1: python3 formatting "출력형식".format(데이터)
#Check2: 기존의 방식 "출력형식"%(데이터)
#참고: https://wikidocs.net/20403
import sys

T = int(input())

for i in range(T):
    A, B = map(int, sys.stdin.readline().split())
    if 0 < A < 10 and 0 < B < 10:
        print("Case #{0}: {1}".format(i+1, A+B))
    else:
        print("Check input condition: 0 < input < 10")