def solution(n):
    check = n+1
    n = bin(n)[2:].count('1')
    while True:
        if n == bin(check)[2:].count('1'):
            return check
        check += 1


print(solution(78))  # 83
print(solution(15))  # 23
