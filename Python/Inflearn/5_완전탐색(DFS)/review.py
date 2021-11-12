# 완전탐색(백트래킹, 상태트리와 CUT EDGE) - DFS 기초
# 재귀함수를 이용한 이진수 출력
import itertools
import sys


def dfs(x):
    if x == 0:
        return
    else:
        dfs(x//2)
        print(x % 2, end='')


if __name__ == "__main__":
    dfs(int(input()))


# 이진트리 순회
def preorder(v):
    if v > 7:
        return
    else:
        print(v, end=' ')
        preorder(v*2)
        preorder(v*2+1)


def inorder(v):
    if v > 7:
        return
    else:
        inorder(v*2)
        print(v, end=' ')
        inorder(v*2+1)


def postorder(v):
    if v > 7:
        return
    else:
        postorder(v*2)
        postorder(v*2+1)
        print(v, end=' ')


if __name__ == "__main__":
    preorder(1)
    inorder(1)
    postorder(1)


# 🔥 부분집합 구하기
def dfs(v):
    if v == n+1:
        for i in range(1, n+1):
            if check[i] == 1:
                print(i, end=' ')
        print()
    else:
        check[v] = 1
        dfs(v+1)
        check[v] = 0
        dfs(v+1)


if __name__ == "__main__":
    n = int(input())
    check = [0]*(n+1)
    dfs(1)


# 합이 같은 부분집합
def dfs(l, total):
    if total > sumA//2:
        return

    if l == n:
        if total == (sumA-total):
            print("YES")
            sys.exit(0)
    else:
        dfs(l+1, total+a[l])
        dfs(l+1, total)


if __name__ == "__main__":
    n = int(input())
    a = list(map(int, input().split()))
    sumA = sum(a)
    dfs(0, 0)
    print("NO")


# 바둑이 승차(Tech X)
def dfs(l, total):
    global answer
    if total > c:
        return

    if l == n:
        if total > answer:
            answer = total
    else:
        dfs(l+1, total+a[l])
        dfs(l+1, total)


if __name__ == "__main__":
    c, n = map(int, input().split())
    a = [int(input()) for _ in range(n)]
    answer = 0
    dfs(0, 0)
    print(answer)


# 🔥 바둑이 승차(Cut Edge Tech)
def dfs(l, total, tsum):
    global answer
    # cut edge tech: 가능한 최대 합이 answer보다 작으면 진행 의미 X
    if total + (sumA-tsum) < answer:
        return

    if total > c:
        return

    if l == n:
        if total > answer:
            answer = total
    else:
        dfs(l+1, total+a[l], tsum+a[l])
        dfs(l+1, total, tsum+a[l])


if __name__ == "__main__":
    c, n = map(int, input().split())
    a = [int(input()) for _ in range(n)]
    answer = 0
    sumA = sum(a)
    dfs(0, 0, 0)
    print(answer)


# 중복순열 구하기
def dfs(l):
    global count
    if l == m:
        for i in range(m):
            print(check[i], end=' ')
        print()
        count += 1
    else:
        for i in range(1, n+1):
            check[l] = i
            dfs(l+1)


if __name__ == "__main__":
    n, m = map(int, input().split())
    check = [0]*n
    count = 0
    dfs(0)
    print(count)


# 🔥 동전교환(Cut Edge Tech)
def dfs(l, total):
    global answer
    # cut edge tech: 현재 l보다 answer가 작으면 더 진행할 필요 X
    if l >= answer:
        return

    if total > m:
        return

    if total == m:
        if answer > l:
            answer = l
    else:
        for x in coins:
            dfs(l+1, total+x)


if __name__ == "__main__":
    n = int(input())
    coins = list(map(int, input().split()))
    m = int(input())
    answer = 2147000000
    # 큰 값부터 적용하는 게 더 효율적
    coins.sort(reverse=True)
    dfs(0, 0)
    print(answer)


# 순열 구하기
def dfs(l):
    global count
    if l == m:
        for i in range(m):
            print(result[i], end=' ')
        print()
    else:
        for i in range(1, n+1):
            if check[i] == 0:
                check[i] = 1
                result[l] = i
                dfs(l+1)
                check[i] = 0


if __name__ == "__main__":
    n, m = map(int, input().split())
    count = 0
    result = [0]*n
    check = [0]*(n+1)
    dfs(0)
    print(count)


# 🔥 수열 추측하기
def dfs(l, total):
    if l == n and total == f:
        for x in p:
            print(x, end=' ')
        sys.exit(0)
    else:
        for i in range(1, n+1):
            if check[i] == 0:
                check[i] = 1
                p[l] = i
                dfs(l+1, total+(p[l]*b[l]))
                check[i] = 0


if __name__ == "__main__":
    n, f = map(int, input().split())
    b = [1]*n
    p = [0]*n
    check = [0]*(n+1)
    for i in range(1, n):
        b[i] = b[i-1]*(n-i)//i
    dfs(0, 0)


# 수열 추측하기(itertools 이용)
def solution(n, f):
    b = [1]*n
    for i in range(1, n):
        b[i] = b[i-1]*(n-i)/i
    a = list(range(1, n+1))

    for temp in itertools.permutations(a):
        total = 0
        for l, x in enumerate(temp):
            total += (x*b[l])
        if total == f:
            for x in temp:
                print(x, end=' ')
            break


if __name__ == "__main__":
    n, f = map(int, input().split())
    solution(n, f)


# 조합 구하기
def dfs(l, s):
    global count
    if l == m:
        for i in range(m):
            print(result[i], end=' ')
        print()
        count += 1
    else:
        for i in range(s, n+1):
            result[l] = i
            dfs(l+1, i+1)


if __name__ == "__main__":
    n, m = map(int, input().split())
    result = [0]*(n+1)
    count = 0
    dfs(0, 1)
    print(count)


# 🔥 수들의 조합
def dfs(l, s, total):
    global answer
    if l == k:
        if total % m == 0:
            answer += 1
    else:
        for i in range(s, n):
            dfs(l+1, i+1, total+a[i])


if __name__ == "__main__":
    n, k = map(int, input().split())
    a = list(map(int, input().split()))
    m = int(input())
    answer = 0
    dfs(0, 0, 0)
    print(answer)


# 수들의 조합(itertools 이용)
if __name__ == "__main__":
    n, k = map(int, input().split())
    a = list(map(int, input().split()))
    m = int(input())
    answer = 0

    for x in itertools.combinations(a, k):
        if sum(x) % m == 0:
            answer += 1

    print(answer)


# 인접행렬(가중치 방향그래프)
if __name__ == "__main__":
    n, m = map(int, input().split())
    graph = [[0]*n for _ in range(n)]
    for _ in range(m):
        start, end, weight = map(int, input().split())
        graph[start-1][end-1] = weight

    for i in range(n):
        for j in range(n):
            print(graph[i][j], end=' ')
        print()


# 인접행렬(무방향 그래프)
if __name__ == "__main__":
    n, m = map(int, input().split())
    graph = [[0]*(n+1) for _ in range(n+1)]
    for _ in range(m):
        a, b = map(int, input().split())
        graph[a][b] = 1
        graph[b][a] = 1

    for i in range(1, n+1):
        for j in range(1, n+1):
            print(graph[i][j], end=' ')
        print()


# 경로 탐색(그래프)
def dfs(v):
    global count
    if v == n:
        count += 1
        for x in path:
            print(x, end=' ')
        print()
    else:
        for i in range(1, n+1):
            if graph[v][i] == 1 and check[i] == 0:
                check[i] = 1
                path.append(i)
                dfs(i)
                path.pop()
                check[i] = 0


if __name__ == "__main__":
    n, m = map(int, input().split())
    graph = [[0]*(n+1) for _ in range(n+1)]
    check = [0]*(n+1)
    for _ in range(m):
        a, b = map(int, input().split())
        graph[a][b] = 1
        graph[b][a]
    count = 0
    check[1] = 1
    path = [1]
    dfs(1)
    print(count)
