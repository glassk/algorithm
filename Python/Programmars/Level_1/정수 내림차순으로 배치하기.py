def solution(n):
    answer = ''
    for x in sorted(list(str(n)), reverse=True):
        answer += x
    return int(answer)


print(solution(118372))  # 873211


# ref: join() 활용
def solution(n):
    ls = list(str(n))
    ls.sort(reverse=True)
    return int("".join(ls))
