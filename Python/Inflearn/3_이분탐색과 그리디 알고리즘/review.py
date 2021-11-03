# 이분탐색과 그리디 알고리즘 review
# 이분검색
from collections import deque


def solution(n, m, nums):
    nums.sort()
    lt, rt = 0, n-1
    while lt <= rt:
        mid = (lt+rt)//2
        if nums[mid] == m:
            return mid+1
        elif nums[mid] > m:
            rt = mid-1
        else:
            lt = mid+1


if __name__ == "__main__":
    n, m = map(int, input().split())
    nums = list(map(int, input().split()))
    print(solution(n, m, nums))


# 랜선자르기(결정알고리즘)
def count(len):
    cnt = 0
    for x in lines:
        cnt += x//len
    return cnt


def solution(k, n, lines):
    lt, rt = 1, max(lines)
    answer = 0
    while lt <= rt:
        mid = (lt+rt)//2
        if count(mid) >= n:
            answer = mid
            lt = mid + 1
        else:
            rt = mid - 1
    return answer


if __name__ == "__main__":
    k, n = map(int, input().split())
    lines = [int(input()) for _ in range(k)]
    print(solution(k, n, lines))


# 🔥 뮤직비디오(결정알고리즘)
def count(capacity):
    cnt = 1
    total = 0
    for x in songs:
        if total+x > capacity:
            cnt += 1
            total = x
        else:
            total += x
    return cnt


def solution(n, m, songs):
    longest = max(songs)
    lt, rt = 1, sum(songs)
    answer = 0
    while lt <= rt:
        mid = (lt+rt)//2
        if mid >= longest and count(mid) <= m:
            answer = mid
            rt = mid-1
        else:
            lt = mid+1
    return answer


if __name__ == "__main__":
    n, m = map(int, input().split())
    songs = list(map(int, input().split()))
    print(solution(n, m, songs))


# 🔥 마굿간 정하기(결정알고리즘)
def count(n, len, pos):
    cnt = 1
    end = pos[0]
    for i in range(1, n):
        if pos[i]-end >= len:
            cnt += 1
            end = pos[i]
    return cnt


def solution(n, c, pos):
    answer = 0
    pos.sort()
    lt, rt = 0, pos[n-1]
    while lt <= rt:
        mid = (lt+rt)//2
        if count(n, mid, pos) >= c:
            answer = mid
            lt = mid + 1
        else:
            rt = mid - 1
    return answer


if __name__ == "__main__":
    n, c = map(int, input().split())
    pos = [int(input()) for _ in range(n)]
    print(solution(n, c, pos))


# 회의실 배정(그리디)
def solution(n, meetings):
    answer = 0
    meetings.sort(key=lambda x: (x[1], x[0]))
    end = 0
    for s, e in meetings:
        if s >= end:
            answer += 1
            end = e
    return answer


if __name__ == "__main__":
    n = int(input())
    meetings = [list(map(int, input().split())) for _ in range(n)]
    print(solution(n, meetings))


# 씨름 선수(그리디)
def solution(n, info):
    answer = 0
    info.sort(reverse=True)
    end = 0
    for h, w in info:
        if w >= end:
            answer += 1
            end = w
    return answer


if __name__ == "__main__":
    n = int(input())
    info = [list(map(int, input().split())) for _ in range(n)]
    print(solution(n, info))


# 창고 정리(그리디)
def solution(l, box, m):
    box.sort()
    for _ in range(m):
        box[-1] -= 1
        box[0] += 1
        box.sort()
    return box[-1] - box[0]


if __name__ == "__main__":
    l = int(input())
    box = list(map(int, input().split()))
    m = int(input())
    print(solution(l, box, m))


# 침몰하는 타이타닉(그리디)


def solution(n, m, weight):
    answer = 0
    weight.sort()
    q = deque(weight)
    while q:
        if len(q) == 1:
            answer += 1
            break
        if q[0] + q[-1] <= m:
            answer += 1
            q.pop()
            q.popleft()
        else:
            answer += 1
            q.pop()
    return answer


if __name__ == "__main__":
    n, m = map(int, input().split())
    weight = list(map(int, input().split()))
    print(solution(n, m, weight))


# 🔥 증가수열 만들기(그리디)
def solution(n, a):
    answer = ''
    last = 0
    lt, rt = 0, n-1
    temp = []
    while lt <= rt:
        if a[lt] > last:
            temp.append((a[lt], 'L'))
        if a[rt] > last:
            temp.append((a[rt], 'R'))

        temp.sort()

        if len(temp) == 0:
            break
        else:
            answer += temp[0][1]
            last += temp[0][0]
            if temp[0][1] == 'L':
                lt += 1
            else:
                rt -= 1

        temp.clear()

    return answer


if __name__ == "__main__":
    n = int(input())
    a = list(map(int, input().split()))
    answer = solution(n, a)
    print(len(answer))
    print(answer)


# 🔥 역수열(그리디)
def solution(n, a):
    seq = [0]*n
    for i in range(n):
        for j in range(n):
            if (a[i] == 0 and seq[j] == 0):
                seq[j] = i+1
                break
            elif seq[j] == 0:
                a[i] -= 1
    return seq


if __name__ == "__main__":
    n = int(input())
    a = list(map(int, input().split()))
    for x in solution(n, a):
        print(x, end=' ')
