# 완전탐색(백트래킹, 상태트리와 CUT EDGE) - DFS 기초
# 재귀함수를 이용한 이진수 출력
def dfs(x):
    if x == 0:
        return
    else:
        dfs(x//2)
        print(x % 2, end='')


def solution(n):
    dfs(n)


if __name__ == "__main__":
    n = int(input())
    solution(n)
