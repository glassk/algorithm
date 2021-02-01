#11718 그대로 출력하기
#check1: .strip()을 하지 않으면 \n까지 포함해서 함께 출력한다
#check2: 여러 줄을 입력받으므로(입력하는 대로 출력하므로) sys.stdin.readline() 대신 sys.stdin
import sys

for line in sys.stdin:  
    print(line.strip())
#further way - 11719번 참고