#1924 2007년
#check1: 입력한 날짜까지 전체 며칠인지 센다.
#check2: 1월 1일이 월요일이므로 전체 일 수를 7로 나눈 것을 기준으로 요일을 구분한다
#check3: 리스트에 특정 원소가 포함되어 있는지 확인하려면 in 키워드를 사용한다.
#                       (포함되지 않은 것을 확인하려면 not in 키워드)
#check4: sumOfDay 변수를 따로 놓지 않고 y에 x에 따른 일수를 바로 더하는 게 더 효율적이다
#참고: https://j-remind.tistory.com/24
import sys

x, y = map(int, sys.stdin.readline().split())

if 1 <= x <= 12 and 1 <= y <= 31:
    for i in range(x):
        if i in [1, 3, 5, 7, 8, 10, 12]:
            y += 31
        elif i in [4, 6, 9, 11]:
            y += 30
        else:
            y += 28
    dayOfWeek = y % 7

    if dayOfWeek == 0:
        print('SUN')
    elif dayOfWeek == 1: 
        print('MON')
    elif dayOfWeek == 2: 
        print('TUE')
    elif dayOfWeek == 3: 
        print('WED')
    elif dayOfWeek == 4: 
        print('THU')
    elif dayOfWeek == 5: 
        print('FRI')
    elif dayOfWeek == 6: 
        print('SAT')
else:
    print("Check input condition: 1 <= x <= 12 and 1 <= y <= 31")