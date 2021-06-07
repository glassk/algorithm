# 순열(완전탐색) -> 시간 초과
def solution(numbers):
    answer = ''
    numbers = list(map(str, numbers))
    numbers.sort(key=lambda x: x[0:], reverse=True)
    print(numbers)
    first = -1
    temp = []
    for num in numbers:
        print(first)
        if first == num[0]:
            temp.append(num)
        else:
            if temp:
                temp.sort(key=lambda x: x[1:])
                print(temp)
                answer += ''.join(temp)
                temp = []
            else:
                temp.append(num)
            first = num[0]
    if temp:
        temp.sort(key=lambda x: x[1:])
        print(temp)
        answer += ''.join(temp)
    return answer


print(solution([6, 10, 2]))  # "6210"
print(solution([3, 30, 34, 5, 9]))  # "9534330"

print(solution([505, 50, 5]))  # 550550
print(solution([0, 0, 0, 0]))  # 0


# ref: lambda 함수로 문자열 변환
def solution(numbers):
    numbers = list(map(str, numbers))
    numbers.sort(key=lambda x: x*3, reverse=True)
    return str(int(''.join(numbers)))
