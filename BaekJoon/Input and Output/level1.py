#2557 Hello World
print("Hello World!")

#10718 We love kriii
print("강한친구 대한육군\n강한친구 대한육군")

#10171 Cats
print("\    /\\\n )  ( ')\n(  /  )\n \\(__)|")

#10172 Dogs
#check1: 특수문자 앞에 \를 붙이면 그대로 출력 가능
#check2: check1의 방법은 간단하지만 입력과 수정이 번거롭다는 단점이 있다
# 대신 print(r'(출력할 문자)') 문자열 앞에 r을 붙여도 같은 효과가 발생한다
# 참고: https://ivon-dev.tistory.com/3
print("|\\_/|\n|q p|   /}\n( 0 )\"\"\"\\\n|\"^\"`    |\n||_/=\\\\__|")

#1000 A+B
#check1: 입력받은 값을 공백을 기준으로 분리하여 각각 저장한 후 정수로 변환하여 계산한다
#check2: A, B 중 0 미만이나 10 초과인 수가 있으면 조건 안내 메시지까지 출력하자
# 참고: https://dojang.io/mod/page/view.php?id=1220
A, B  = input().split()
a = int(A)
b = int(B)
if (0 < a < 10) and (0 < b < 10):
    print(a+b)
else: print("Check input condition: 0 < input < 10")
#simple way (check2 고려X)
# map에 int와 리스트(input().split()의 결과는 리스트)를 넣으면 모든 요소를 int로 변환한다.
# 참고(map): https://dojang.io/mod/page/view.php?id=2286
print(sum(map(int, input().split())))

#1001 A-B
C, D  = input().split()
c = int(C)
d = int(D)
if (0 < c < 10) and (0 < d < 10):
    print(c-d)
else: print("Check input condition: 0 < input < 10")
#simple way
A, B = map(int, input().split())
print(A - B)

#10998 AxB
E, F  = input().split()
e = int(E)
f = int(F)
if (0 < e < 10) and (0 < f < 10):
    print(e*f)
else: print("Check input condition: 0 < input < 10")
#simple way
A, B = map(int, input().split())
print(A * B)

#1008 A/B
G, H  = input().split()
g = int(G)
h = int(H)
if (0 < g < 10) and (0 < h < 10):
    print(g/h)
else: print("Check input condition: 0 < input < 10")
#simple way
A, B = map(int, input().split())
print(A / B)

#10869 사칙연산
I, J  = input().split()
i = int(I)
j = int(J)
if (1 <= i <= 10000) and (1 <= j <= 10000):
    print(i+j)
    print(i-j)
    print(i*j)
    print(i//j)
    print(i%j)
else: print("Check input condition: 1 <= input <= 10000")
#simple way
A, B = map(int, input().split())
print(A+B, A-B, A*B, A//B, A%B, sep='\n')

#10430 나머지
K, L, M = input().split()
k = int(K)
l = int(L)
m = int(M)
if (2 <= k <= 10000) and (2 <= l <= 10000) and (2 <= m <= 10000):
    print((k+l)%m)
    print(((k%m)+(l%m))%m)
    print((k*l)%m)
    print(((k%m)*(l%m))%m)
else: print("Check input condition: 2 <= input <= 10000")
#simple way
A,B,C = map(int,input().split())
print((A+B)%C,(A%C + B%C)%C,(A*B)%C,(A%C * B%C)%C, sep="\n")

#2588 곱셈
#check1: 세 자리 자연수임을 확인하는 조건문 - 다양한 방법 존재
# 1) pythonic way: len(str(숫자))
# 2) log: int(math.log10(숫자)) + 1   (log 사용하려면 import math)
# 3) 입력값 10으로 나눠가며 나머지 버리고 길이 늘리기:
'''
    def digit_length(n):
        ans = 0

        while n:
            n //= 10
            ans += 1

        return ans
'''
# 참고: https://shoark7.github.io/programming/algorithm/3-ways-to-get-length-of-natural-number
import math

N = int(input())
O = int(input())

n = int(math.log10(N))+1
o = int(math.log10(O))+1

if n == 3 and o == 3:
    print(N*(O%10))
    print(N*((O//10)%10))
    print(N*(O//100))
    print(N*O)
else: print("Check input condition: three-digit natural number")
#simple way
a = int(input())
b = list(map(int,list(input())))
for i in range(3):
	print(a*b[2-i])
print(a*(100*b[0] + 10*b[1] + b[2]))