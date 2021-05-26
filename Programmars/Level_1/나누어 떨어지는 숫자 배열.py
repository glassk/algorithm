def solution(arr, divisor):
    answer = []
    for x in arr:
        if x % divisor == 0:
            answer.append(x)
    if not answer:
        answer.append(-1)
    return sorted(answer)


print(solution([5, 9, 7, 10], 5))  # [5, 10]
print(solution([2, 36, 1, 3], 1))  # [1, 2, 3, 36]
print(solution([3, 2, 6], 10))  # [-1]


# ref
def solution(arr, divisor): return sorted(
    [n for n in arr if n % divisor == 0]) or [-1]
