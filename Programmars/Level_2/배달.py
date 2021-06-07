# Floyd-Warshall Algorithm
def solution(N, road, K):
    answer = 0
    dis = [[2147000000]*N for _ in range(N)]
    road.sort(reverse=True, key=lambda x: x[2])
    for i in range(N):
        dis[i][i] = 0
    for i in range(N):
        for x in road:
            dis[x[0]-1][x[1]-1] = x[2]
            dis[x[1]-1][x[0]-1] = x[2]
    for k in range(N):
        for i in range(N):
            for j in range(N):
                dis[i][j] = min(
                    dis[i][j], dis[i][k]+dis[k][j])
    for i in range(N):
        if dis[0][i] <= K:
            answer += 1
    return answer


print(solution(5, [[1, 2, 1], [2, 3, 3], [
      5, 2, 2], [1, 4, 2], [5, 3, 1], [5, 4, 2]], 3))  # 4
print(solution(6, [[1, 2, 1], [1, 3, 2], [2, 3, 2], [
      3, 4, 3], [3, 5, 2], [3, 5, 3], [5, 6, 1]], 4))  # 4
