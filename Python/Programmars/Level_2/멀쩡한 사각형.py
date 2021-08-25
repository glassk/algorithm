from math import ceil


def solution(w, h):
    if w > h:
        w, h = h, w
    return w*h - w*ceil(h/w)


print(solution(8, 12))  # 80


# ref: math.ceil() 사용, 삼각형의 각 열별 정사각형 개수의 합
def solution(w, h):
    answer = 0
    if w == h:
        return w*h - w
    elif w == 1 or h == 1:
        return 0
    for x in range(1, w):
        n = ceil((h/w)*x)
        answer += h - n
    return answer * 2
