def solution(n):
    if n in (1, 2):
        return n
    dy = [0]*(n+1)
    dy[1] = 1
    dy[2] = 2
    for i in range(3, n+1):
        dy[i] = (dy[i-2] + dy[i-1]) % 1000000007
    return dy[n]


print(solution(4))  # 5


# ref: 값 교환
def solution(n):
    a, b = 1, 1
    for i in range(1, n):
        a, b = b, (a + b) % 1000000007
    return b
