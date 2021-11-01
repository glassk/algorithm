# 코드 구현능력 기르기 review
# K번째 약수
import math


def solution(n, k):
    count = 0
    for x in range(1, n+1):
        if n % x == 0:
            count += 1
        if count == k:
            return x
    else:
        return -1


if __name__ == "__main__":
    n, k = map(int, input().split())
    print(solution(n, k))


# K번째 수
def solution(n, s, e, k, nums):
    return sorted(nums[s-1:e])[k-1]


if __name__ == "__main__":
    t = int(input())
    for i in range(t):
        n, s, e, k = map(int, input().split())
        nums = list(map(int, input().split()))
        print(f'#{i+1} {solution(n, s, e, k, nums)}')


# K번째 큰 수
def solution(n, k, cards):
    totals = set()
    for i in range(n):
        for j in range(i+1, n):
            for k in range(j+1, n):
                totals.add(cards[i]+cards[j]+cards[k])
    return sorted(totals, reverse=True)[k-1]


if __name__ == "__main__":
    n, k = map(int, input().split())
    cards = list(map(int, input().split()))
    print(solution(n, k, cards))


# 대표값
def solution(n, scores):
    diffs = [abs(x-avg) for x in scores]
    answer = 0
    max_score = 0
    for idx, val in enumerate(diffs):
        if val == min(diffs):
            if scores[idx] > max_score:
                max_score = scores[idx]
                answer = idx
    return answer + 1


if __name__ == "__main__":
    n = int(input())
    scores = list(map(int, input().split()))
    avg = math.ceil(sum(scores)/n)
    print(f'{avg} {solution(n, scores)}')


# 정다면체
def solution(n, m):
    count = [0]*(n+m+1)
    answer = set()
    for i in range(1, n+1):
        for j in range(1, m+1):
            count[i+j] += 1
    for key, val in enumerate(count):
        if val == max(count):
            answer.add(key)
    return answer


if __name__ == "__main__":
    n, m = map(int, input().split())
    for x in solution(n, m):
        print(x, end=' ')


# 자릿수의 합
# 방법 1
def digit_sum(x):
    total = 0
    for x in str(x):
        total += int(x)
    return total

# 방법 2
# def digit_sum(x):
#     total = 0
#     while x > 0:
#         total += x%10
#         x = x//10
#     return total


def solution(n, nums):
    answer = 0
    max_total = 0
    for x in nums:
        total = digit_sum(x)
        if total > max_total:
            max_total = total
            answer = x
    return answer


if __name__ == "__main__":
    n = int(input())
    nums = map(int, input().split())
    print(solution(n, nums))


# 소수의 개수(에라토스테네스 체)
def solution(n):
    nums = set(range(2, n+1))
    for i in range(2, n+1):
        if i in nums:
            nums -= set(range(i*2, n+1, i))
    return len(nums)


if __name__ == "__main__":
    n = int(input())
    print(solution(n))


# 뒤집은 소수
def reverse(x):
    result = 0
    while x > 0:
        result = result*10 + x % 10
        x //= 10
    return result


def isPrime(x):
    if x == 1:
        return False
    for i in range(2, x):
        if x % i == 0:
            return False
    else:
        return True


def solution(n, nums):
    answer = []
    for x in nums:
        if isPrime(reverse(x)):
            answer.append(reverse(x))
    return answer


if __name__ == "__main__":
    n = int(input())
    nums = list(map(int, input().split()))
    for x in solution(n, nums):
        print(x, end=' ')


# 주사위 게임
def calculate(dices):
    count = [0]*7
    for x in dices:
        count[x] += 1
    if max(count) == 3:
        return 10000+count.index(3)*1000
    elif max(count) == 2:
        return 1000+count.index(2)*100
    else:
        return max(dices)*100


def solution(n, players):
    answer = 0
    for dices in players:
        score = calculate(dices)
        if score > answer:
            answer = score
    return answer


if __name__ == "__main__":
    n = int(input())
    players = [list(map(int, input().split())) for _ in range(n)]
    print(solution(n, players))


# 점수계산
def solution(n, scores):
    count = 0
    answer = 0
    for x in scores:
        if x == 1:
            count += 1
            answer += count
        else:
            count = 0

    return answer


if __name__ == "__main__":
    n = int(input())
    scores = list(map(int, input().split()))
    print(solution(n, scores))
