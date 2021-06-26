# 오답
def solution(sticker):
    if len(sticker) % 2 == 0:
        even = odd = 0
        for i in range(len(sticker)):
            if i % 2 == 0:
                even += sticker[i]
            else:
                odd += sticker[i]
        return max(even, odd)
    else:
        even_first = even_last = odd = 0
        for i in range(1, len(sticker)-1, 2):
            if i % 2 != 0:
                odd += sticker[i]
        for i in range(0, len(sticker)-2, 2):
            even_first += sticker[i]
        for i in range(2, len(sticker), 2):
            even_last += sticker[i]
        return max(even_first, even_last, odd)


print(solution([14, 6, 5, 11, 3, 9, 2, 10]))  # 36
print(solution([1, 3, 2, 5, 4]))  # 8


# ref: https://inspirit941.tistory.com/158
def solution(sticker):
    # table[i] = i번째 스티커를 떼는 경우 최댓값
    # 맨 앞 스티커를 떼는지 아닌지 -> 맨 뒤 스티커에 영향을 준다
    if len(sticker) == 1:
        return sticker[0]
    # 1. 맨 앞 스티커를 떼는 경우
    table1 = [0 for _ in range(len(sticker))]
    table1[0] = sticker[0]
    table1[1] = table1[0]
    for i in range(2, len(sticker)-1):
        table1[i] = max(table1[i-1], table1[i-2] + sticker[i])
    value = max(table1)

    # 2. 맨 앞 스티커를 떼지 않는 경우
    table1 = [0 for _ in range(len(sticker))]
    table1[0] = 0
    table1[1] = sticker[1]
    for i in range(2, len(sticker)):
        table1[i] = max(table1[i-1], table1[i-2] + sticker[i])
    return max(value, max(table1))


# 다른 풀이
def collect_sticker(sticker):
    dq = {}
    dq[0] = sticker[0]
    dq[1] = max(sticker[:2])
    for i in range(len(sticker)-2):
        dq[i+2] = max(dq[i+1], dq[i] + sticker[i+2])
    return dq


def solution(sticker):
    if len(sticker) == 1:
        return sticker[0]
    return max(collect_sticker(sticker[:-1])[len(sticker)-2], collect_sticker(sticker[1:])[len(sticker)-2])
