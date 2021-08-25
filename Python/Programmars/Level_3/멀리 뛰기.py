def solution(n):
    dy = [0]*(n+1)
    if n in (1, 2):
        return n
    dy[1] = 1
    dy[2] = 2
    for i in range(3, n+1):
        dy[i] = (dy[i-1] + dy[i-2]) % 1234567
    return dy[n]


print(solution(4))  # 5
print(solution(3))  # 3
