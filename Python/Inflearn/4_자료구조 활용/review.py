# 자료구조 활용 (스택, 큐, 해시, 힙) review
# 🔥 가장 큰 수(스택)
import heapq as hq
from collections import deque


def solution(n, m):
    num = list(map(int, str(n)))
    stack = []

    for x in num:
        while stack and m > 0 and stack[-1] < x:
            stack.pop()
            m -= 1
        stack.append(x)

    if m != 0:
        stack = stack[:-m]

    return ''.join(map(str, stack))


if __name__ == "__main__":
    n, m = map(int, input().split())
    print(solution(n, m))


# 쇠막대기
def solution(exp):
    answer = 0
    stack = []
    for i in range(len(exp)):
        if exp[i] == '(':
            stack.append(exp[i])
        else:
            stack.pop()
            if exp[i-1] == ")":
                answer += 1
            else:
                answer += len(stack)
    return answer


if __name__ == "__main__":
    exp = input()
    print(solution(exp))


# 🔥 후위표기식 만들기: infix -> postfix (스택)
def solution(exp):
    answer = ''
    stack = []

    for x in exp:
        if x.isdecimal():
            answer += x
        else:
            if x == '(':
                stack.append(x)
            elif x == '*' or x == '/':
                while stack and (stack[-1] == '*' or stack[-1] == '/'):
                    answer += stack.pop()
                stack.append(x)
            elif x == '+' or x == '-':
                while stack and stack[-1] != '(':
                    answer += stack.pop()
                stack.append(x)
            elif x == ')':
                while stack and stack[-1] != '(':
                    answer += stack.pop()
                stack.pop()

    while stack:
        answer += stack.pop()

    return answer


if __name__ == "__main__":
    exp = input()
    print(solution(exp))


# 후위식 연산(스택)
def solution(exp):
    stack = []
    for x in exp:
        if x.isdecimal():
            stack.append(int(x))
        else:
            if x == '+':
                a = stack.pop()
                b = stack.pop()
                stack.append(b+a)
            elif x == '-':
                a = stack.pop()
                b = stack.pop()
                stack.append(b-a)
            elif x == '*':
                a = stack.pop()
                b = stack.pop()
                stack.append(b*a)
            elif x == '/':
                a = stack.pop()
                b = stack.pop()
                stack.append(b/a)
    return stack[0]


if __name__ == "__main__":
    exp = input()
    print(solution(exp))


# 공주 구하기(큐)
def solution(n, k):
    dq = deque(range(1, n+1))
    while len(dq) > 1:
        for _ in range(k-1):
            dq.append(dq.popleft())
        dq.popleft()
    return dq[0]


if __name__ == "__main__":
    n, k = map(int, input().split())
    print(solution(n, k))


# 응급실(큐)
def solution(n, m, danger):
    dq = deque([(idx, val) for idx, val in enumerate(danger)])
    cnt = 0
    while dq:
        temp = dq.popleft()
        if any(temp[1] < x[1] for x in dq):
            dq.append(temp)
        else:
            cnt += 1
            if temp[0] == m:
                return cnt


if __name__ == "__main__":
    n, m = map(int, input().split())
    danger = list(map(int, input().split()))
    print(solution(n, m, danger))


# 교육과정 설계(큐)
def solution(must, n, plan):
    dq = deque(must)
    for x in plan:
        if x in dq:
            if x != dq.popleft():
                return "NO"
    else:
        return "NO" if dq else "YES"


if __name__ == "__main__":
    must = input()
    n = int(input())
    for i in range(n):
        answer = solution(must, n, input())
        print(f'#{i+1} {answer}')


# 단어 찾기(해시)
def solution(n, words, poem):
    check = dict()
    for x in words:
        check[x] = check.get(x, 0) + 1
    for x in poem:
        check[x] -= 1
    # 다른 방법
    # for x in words:
    #   check[x] = 1
    # for x in poem:
    #   check[x] = 0
    for key, val in check.items():
        if val == 1:
            return key


if __name__ == "__main__":
    n = int(input())
    words = [input() for _ in range(n)]
    poem = [input() for _ in range(n-1)]
    print(solution(n, words, poem))


# 아나그램(딕셔너리 해시)
def solution(a, b):
    cnt = dict()
    for x in a:
        cnt[x] = cnt.get(x, 0) + 1
    for x in b:
        cnt[x] = cnt.get(x, 0) - 1
    for key, val in cnt.items():
        if val != 0:
            return "NO"
    else:
        return "YES"


if __name__ == "__main__":
    a = input()
    b = input()
    print(solution(a, b))


# 🔥 아나그램(리스트 해시)
def count(str):
    check = [0]*52
    for x in str:
        if x.isupper():
            check[ord(x)-65] += 1
        else:
            check[ord(x)-71] += 1
    return check


def solution(a, b):
    chA, chB = count(a), count(b)
    for i in range(52):
        if chA[i] != chB[i]:
            return "NO"
    else:
        return "YES"


if __name__ == "__main__":
    a = input()
    b = input()
    print(solution(a, b))


# 최소힙
if __name__ == "__main__":
    a = []
    while True:
        n = int(input())
        if n == -1:
            break
        if n == 0:
            if not a:
                print(-1)
            else:
                print(hq.heappop(a))
        else:
            hq.heappush(a, n)

# 최대힙
if __name__ == "__main__":
    a = []
    while True:
        n = int(input())
        if n == -1:
            break
        if n == 0:
            if not a:
                print(-1)
            else:
                print(-hq.heappop(a))
        else:
            hq.heappush(a, -n)
