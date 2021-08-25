import sys


def DFS(x):
    if x >= 1:
        DFS(x//2)
        answer.append(x % 2)


if __name__ == "__main__":
    n = int(sys.stdin.readline())
    answer = []
    DFS(n)
    for x in answer:
        print(x, end='')

#ref
sys.stdin = open("input.txt", "r")


def DFS(x):
    if x == 0:
        return
    else:
        DFS(x//2)
        print(x % 2, end='')


if __name__ == "__main__":
    n = int(input())
    DFS(n)
