def solution(A, B):
    answer = 0
    A.sort()
    B.sort()
    if all(a < b for a, b in zip(A, B)):
        return len(A)
    for a in A:
        for i in range(len(B)):
            if B[i] > a:
                answer += 1
                B.pop(i)
                break
        else:
            B.pop(0)
    return answer


print(solution([5, 1, 3, 7], [2, 2, 6, 8]))  # 3
print(solution([2, 2, 2, 2], [1, 1, 1, 1]))  # 0


# ref: 리스트 조작 없이 인덱스로만 접근(훨씬 효율적!)
def solution(A, B):
    answer = 0
    A.sort()
    B.sort()
    j = 0
    for i in range(len(A)):
        if A[j] < B[i]:
            answer = answer + 1
            j = j+1
    return answer
