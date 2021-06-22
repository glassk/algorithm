# 틀린 코드
def solution(N, number):
    answer = 0
    if N == number:
        return 1
    result = N
    while len(str(result)) < len(str(number)):
        result = result*10 + N
        answer += 1

    def DFS(count, n):
        nonlocal answer
        if count == 8:
            return
        if n == number:
            if count < answer:
                answer = count
        else:
            DFS(count+1, n+N)
            DFS(count+1, n-N)
            DFS(count+1, n*N)
            DFS(count+1, n//N)

    DFS(answer, result)
    if answer > 8:
        return -1
    return answer


print(solution(5, 12))  # 4
print(solution(2, 11))  # 3
print(solution(5, 31168))  # -1


# ref: https://velog.io/@j_user0719/N%EC%9C%BC%EB%A1%9C-%ED%91%9C%ED%98%84-PYTHON
def solution(N, number):
    answer = -1
    dp = []

    for i in range(1, 9):
        # i = N의 개수
        all_case = set()
        check_number = int(str(N) * i)
        all_case.add(check_number)

        for j in range(0, i-1):
            for op1 in dp[j]:
                for op2 in dp[-j-1]:
                    all_case.add(op1 - op2)
                    all_case.add(op1 + op2)
                    all_case.add(op1 * op2)
                    if op2 != 0:
                        all_case.add(op1 // op2)

        if number in all_case:
            answer = i
            break

        dp.append(all_case)

    return answer
