#2741 N 찍기
N = int(input())

if N <= 100000:
    for i in range(N):
        print(i+1)
else:
    print("Check input condition: input < 100000")

#further way
#check1: 1부터 N까지 연속된 정수를 만든다  range()
#check2: range() 함수 결과를 문자열로 형변환해서 배열화한다  map()
#check3: 그 결과를 특정 구분자인 개행(\n)을 기준으로 리스트화한다  '\n'.join()
#참고1: https://withcoding.com/79
#참고2: https://ourcstory.tistory.com/46
print("\n".join(map(str, range(1, int(input()) + 1))))