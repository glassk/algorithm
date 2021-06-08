def convert(num, notation):
    if num == 0:
        return '0'
    result = ''
    letter = 'ABCDEF'
    while num > 0:
        if num % notation < 10:
            result = str(num % notation) + result
        else:
            result = letter[(num % notation)-10] + result
        num = num // notation
    return result


def solution(n, t, m, p):
    answer = ''
    num_string = ''
    num = 0
    while True:
        num_string += convert(num, n)
        if len(num_string) >= m*t:
            for i in range(p-1, t*m, m):
                answer += num_string[i]
            return answer
        num += 1


print(solution(2, 4, 2, 1))  # "0111"
print(solution(16, 16, 2, 1))  # "02468ACE11111111"
print(solution(16, 16, 2, 2))  # "13579BDF01234567"


# ref: n진수 구하는 재귀함수
def convert(n, base):
    T = "0123456789ABCDEF"

    q, r = divmod(n, base)
    if q == 0:
        return T[r]
    else:
        return convert(q, base) + T[r]
