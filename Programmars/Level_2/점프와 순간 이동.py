# ref: https://inspirit941.tistory.com/232
def solution(n):
    answer = 0
    while n > 0:
        q, r = divmod(n, 2)
        n = q
        if r != 0:
            answer += 1
    return answer


print(solution(5))  # 2
print(solution(6))  # 2


# ref: 이진법
def solution(n):
    return bin(n).count('1')
