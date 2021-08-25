def DFS(level, start):
    if level == 2:
        answer.append(sum(result))
    else:
        for i in range(start, len(n)):
            result[level] = n[i]
            DFS(level+1, i+1)


def solution(numbers):
    global n, answer, result
    n = numbers
    answer = []
    result = [0]*3
    DFS(0, 0)  # 조합(DFS)을 구하지 않고 이중 for문으로 구해도 된다
    answer = list(sorted(set(answer)))
    return answer


print(solution([2, 1, 3, 4, 1]))  # [2,3,4,5,6,7]
print(solution([5, 0, 2, 7]))  # [2,5,7,9,12]
