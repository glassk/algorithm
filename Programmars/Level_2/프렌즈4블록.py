# ref: https://velog.io/@tjdud0123/%ED%94%84%EB%A0%8C%EC%A6%88-4%EB%B8%94%EB%A1%9D-2018-%EC%B9%B4%EC%B9%B4%EC%98%A4-%EA%B3%B5%EC%B1%84-python
def pop_num(b, m, n):
    pop_set = set()
    for i in range(1, n):
        for j in range(1, m):
            if b[i][j] == b[i-1][j-1] == b[i-1][j] == b[i][j-1] != '_':
                pop_set |= set([(i, j), (i-1, j-1), (i-1, j), (i, j-1)])

    for i, j in pop_set:
        b[i][j] = 0
    for i, row in enumerate(b):
        empty = ['_'] * row.count(0)
        b[i] = empty + [block for block in row if block != 0]
    return len(pop_set)


def solution(m, n, board):
    count = 0
    b = list(map(list, zip(*board)))
    while True:
        pop = pop_num(b, m, n)
        if pop == 0:
            return count
        count += pop


print(solution(4, 5, ["CCBDE", "AAADE", "AAABF", "CCBBF"]))  # 14
print(solution(6, 6, ["TTTANT", "RRFACC", "RRRFCC",
                      "TRRRAA", "TTMMMF", "TMMTTJ"]))  # 15
