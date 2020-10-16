#10952 A+B -5
#while문도 가능: while True - break
import sys

for line in sys.stdin:
    A, B = map(int, line.split())
    if 0 < A < 10 and 0 < B < 10:
        print(A+B)
    else: 
        print("Check input condition: 0 < input < 10")
    
    if A == 0 or B == 0:
        break