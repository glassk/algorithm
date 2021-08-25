def solution(n):
    f = [0]*(n+1)
    f[0] = 0
    f[1] = 1
    for i in range(2, n+1):
        f[i] = f[i-2] + f[i-1]
    return f[n] % 1234567


print(solution(3))  # 2
print(solution(5))  # 5
