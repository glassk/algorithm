# 시간초과(완전탐색)
def solution(numbers):
    answer = []
    for num in numbers:
        bin_num = bin(num)[2:]
        print(bin_num)
        next = num + 1
        while True:
            total = str(int(bin_num)+int(bin(next)[2:]))
            if len(total) - total.count('2') in (1, 2):
                answer.append(next)
                break
            next += 1
    return answer


print(solution([2, 7]))  # [3, 11]


# ref: https://velog.io/@kerri/Python-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4Lv2-2%EA%B0%9C-%EC%9D%B4%ED%95%98%EB%A1%9C-%EB%8B%A4%EB%A5%B8-%EB%B9%84%ED%8A%B8
def solution(numbers):
    answer = []

    for number in numbers:
        bin_number = list('0' + bin(number)[2:])
        idx = ''.join(bin_number).rfind('0')
        bin_number[idx] = '1'

        if number % 2 == 1:
            bin_number[idx+1] = '0'

        answer.append(int(''.join(bin_number), 2))

    return answer
