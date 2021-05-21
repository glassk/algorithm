# ref
from collections import deque
n, m = map(int, input().split())
graph = [[0]*(n+1) for _ in range(n+1)]
degree = [0]*(n+1)
dQ = deque()
for i in range(m):
    a, b = map(int, input().split())
    graph[a][b] = 1
    degree[b] += 1
for i in range(1, n+1):
    if degree[i] == 0:
        dQ.append(i)
while dQ:
    x = dQ.popleft()
    print(x, end=' ')
    for i in range(1, n+1):
        if graph[x][i] == 1:
            degree[i] -= 1
            if degree[i] == 0:
                dQ.append(i)
