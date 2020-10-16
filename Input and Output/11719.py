#11719 그대로 출력하기 2
#check1: 11718번과 달리 빈 줄이나 각 줄의 앞뒤 공백을 무시하면 안된다
# -> .strip() 대신 end=""로 줄을 구분한다.
import sys

for line in sys.stdin:  
    print(line, end="")

#further way: sys.stdin 대신 input()을 이용할 경우
#try-catch 예외처리 구문 + EOFError(End Of File Error, Ctrl+D/Z로 입력 종료) 발생 시 프로그램 종료
#참고: https://xeros.dev/101
while True:
    try:
        print(input())
    except EOFError:
        break
