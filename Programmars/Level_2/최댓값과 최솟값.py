def solution(s):
    s = list(map(int, s.split()))
    return f'{min(s)} {max(s)}'


print(solution("1 2 3 4"))  # "1 4"
print(solution("-1 -2 -3 -4"))  # "-4 -1"
print(solution("-1 -1"))  # "-1 -1"
