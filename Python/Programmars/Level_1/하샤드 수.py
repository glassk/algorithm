def solution(x):
    return x % sum(list(map(int, list(str(x))))) == 0


print(solution(10))  # true
print(solution(12))  # true
print(solution(11))  # false
print(solution(13))  # false
