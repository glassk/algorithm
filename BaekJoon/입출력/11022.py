#11022 A+B -8
#Python 3.6 이상 지원: f-string (Literal String Interpolation)
#접두사 f'{표현식}'
# 장점1: %-formatting이나 str.format()보다 훨씬 직관적이다.
# 장점2: 문자열에 표현하고자 하는 대상 변수의 type에 대한 자유도가 더 높다.
#   tuple형, 정수끼리의 산술 연산 지원. f-string 선언 후 변수를 나중에 선언하는 형식도 가능
#참고1: https://bluese05.tistory.com/70
#참고2: https://brownbears.tistory.com/421

import sys

T = int(input())

for i in range(T):
    A, B = map(int, sys.stdin.readline().split())
    if 0 < A < 10 and 0 < B < 10:
        print("Case #{}: {} + {} = {}".format(i+1, A, B, A+B))
    else:
        print("Check input condition: 0 < input < 10")