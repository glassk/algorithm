def solution(strings, n):
    return sorted(strings, key=lambda x: (x[n], x[:n], x[n+1:]))


print(solution(["sun", "bed", "car"], 1))  # ["car", "bed", "sun"]
print(solution(["abce", "abcd", "cdx"], 2))  # ["abcd", "abce", "cdx"]
