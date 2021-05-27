def solution(n):
    answer = 0
    ch = [0]*(n+1)
    for i in range(2, n+1):
        if ch[i] == 0:
            answer += 1
            for j in range(i, n+1, i):
                ch[j] = 1
    return answer


print(solution(10))  # 4
print(solution(5))  # 3


# ref: 에라토스테네스의 체 set과 range로 구현
def solution(n):
    num = set(range(2, n+1))

    for i in range(2, n+1):
        if i in num:
            num -= set(range(2*i, n+1, i))
    return len(num)
