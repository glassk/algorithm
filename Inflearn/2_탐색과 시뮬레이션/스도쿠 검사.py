import sys
board = [list(map(int, sys.stdin.readline().split())) for _ in range(9)]
dx = [0, 1, 2, 0, 1, 2, 0, 1, 2]
dy = [0, 0, 0, 1, 1, 1, 2, 2, 2]


def check(board):
    for i in range(9):
        if (len(set(board[i])) != len(board[i])):
            return "NO"
        temp = []
        for j in range(9):
            temp.append(board[j][i])
        if (len(set(temp)) != len(temp)):
            return "NO"
    for i in range(0, 7, 3):
        for j in range(0, 7, 3):
            temp = []
            for k in range(9):
                temp.append(board[i + dx[k]][j + dy[k]])
            if (len(set(temp)) != len(temp)):
                return "NO"
    return "YES"


print(check(board))

#ref
sys.stdin = open("input.txt", "r")


def check(a):
    for i in range(9):
        ch1 = [0]*10
        ch2 = [0]*10
        for j in range(9):
            ch1[a[i][j]] = 1
            ch2[a[j][i]] = 1
        if sum(ch1) != 9 or sum(ch2) != 9:
            return False
    for i in range(3):
        for j in range(3):
            ch3 = [0]*10
            for k in range(3):
                for s in range(3):
                    ch3[a[i*3+k][j*3+s]] = 1
            if sum(ch3) != 9:
                return False
    return True


a = [list(map(int, input().split())) for _ in range(9)]
if check(a):
    print("YES")
else:
    print("NO")
