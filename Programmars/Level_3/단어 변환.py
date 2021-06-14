def isOneDiff(w1, w2):
    count = 0
    for a, b in zip(w1, w2):
        if a != b:
            count += 1
    if count == 1:
        return True
    return False


def DFS(level, current):
    global answer
    if current == end:
        if level < answer:
            answer = level
    else:
        for i in range(len(w)):
            if check[i] == 0:
                if isOneDiff(w[i], current):
                    check[i] = 1
                    DFS(level+1, w[i])
                    DFS(level, current)
                    check[i] = 0


def solution(begin, target, words):
    if not target in words:
        return 0
    global answer, end, w, check
    answer = len(words)
    end = target
    w = words
    check = [0]*len(words)
    DFS(0, begin)
    return answer


print(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]))  # 4
print(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log"]))  # 0
