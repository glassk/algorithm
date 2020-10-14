#10818 최소, 최대
#check1: 입력 조건을 항상 고려해야 하는가?
#check2: N에 상관없이 최솟값과 최댓값을 구하는 프로그램을 작성해도 된다 - 실효성?(N을 입력하는 것에 대한)
#check3: python naming convention을 지키자(java와 다름)
#참고1: https://claude-u.tistory.com/103
#참고2: https://hwiyong.tistory.com/217
#참고3: https://spoqa.github.io/2012/08/03/about-python-coding-convention.html
numbers = int(input())
number_list = list(map(int, input().split()))

max_num = number_list[0]
min_num = number_list[0]
for num in number_list:
    if num > max_num:
        max_num = num
    if num < min_num:
        min_num = num
print(min_num, max_num)

#shorter way
case = int(input())
num_list = list(map(int, input().split()))
print(f'{min(num_list)} {max(num_list)}')

#https://www.acmicpc.net/problem/status/10818/28/1을 참고해서 가변 인자로 받는 것을 해보자!