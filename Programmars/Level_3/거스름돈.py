# result에 count append하는 게 잘 되지 않음..
def solution(n, money):
    result = []
    count = [0]*len(money)

    def DFS(level, total):
        if total > n:
            return

        if total == n:
            result.append(count)
            return
        else:
            for i in range(len(money)):
                count[i] += 1
                DFS(level+1, total+money[i])
                count[i] -= 1

    DFS(0, 0)
    print(result)
    return len(set(result)) % 1000000007


print(solution(5, [1, 2, 5]))  # 4


# ref: https://bladejun.tistory.com/64
def solution(n, money):
    # dp생성
    dp = [[0]*(n+1) for _ in range(len(money))]

    # 0원은 지불 가능하니까 1로 시작
    dp[0][0] = 1

    # 첫번째 금액으로 n원을 구성 가능하면 1로 변경
    for i in range(money[0], n+1, money[0]):
        dp[0][i] = 1

    # y: 지불가능한 동전
    for y in range(1, len(money)):
        # x: 거슬러줘야하는 금액
        for x in range(n+1):
            # 거슬러줘야하는 금액을 지불가능한 동전보다 클 경우
            if x >= money[y]:
                dp[y][x] = (dp[y-1][x] + dp[y][x - money[y]]) % 1000000007
            # 반대의 경우
            else:
                dp[y][x] = dp[y-1][x]

    # 마지막 값 출력
    return dp[-1][-1]
