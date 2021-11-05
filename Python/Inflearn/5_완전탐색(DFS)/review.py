# 완전탐색(백트래킹, 상태트리와 CUT EDGE) - DFS 기초
# 재귀함수를 이용한 이진수 출력
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


# 부분집합 구하기
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
