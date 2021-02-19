## 회문 문자열 검사

```python
import sys
n = int(sys.stdin.readline())


def isPalindrome(word):
    word = word.upper()
    count = 0
    for i in range(0, (len(word)-1)//2):
        if (word[i] == word[len(word)-2-i]):
            count += 1
    if count == (len(word)-1)//2:
        return True
    else:
        return False


for i in range(n):
    word = sys.stdin.readline()
    print(f'#{i+1} YES') if isPalindrome(word) else print(f'#{i+1} NO')
```

- 대소문자 구분하지 않으므로 우선 문자열 모두 대문자로 변환한다
- 각 줄마다 문자열 입력: 문자열 끝마다 개행 문자(`\n`)가 포함되어 있어서 만약 문자열이 level일 경우 문자열 길이는 5가 아니라 6이다.

```python
#ref
import sys
sys.stdin=open("input.txt", "r")
n = int(input())
for i in range(1, n+1):
    str = input()
    str = str.upper()
    for j in range(len(str)//2):
        if str[j] != str[-1-j]:
            print("#%d NO" % i)
            break
    else:
        print("#%d YES" % i)


# 다른코드
sys.stdin = open("input.txt", "r")
n = int(input())
for i in range(n):
    str = input()
    str = str.upper()
    if str == str[::-1]:
        print("#%d YES" % i)
    else:
        print("#%d NO" % i)
```

- `str[j] != str[-1-j]` : 인덱스를 **음수**로 지정하면 **맨 뒤의 원소부터** 접근할 수 있다. 맨 뒤 원소는 -1, 뒤에서 두 번째 원소는 -2, ...
- `str == str[::-1]` : str[::-1]은 **거꾸로** str을 정렬해서 리턴한다
  - ex) `str` = moon이면 `str[::-1]`은 noom



## 숫자만 추출

```python
import sys
string = sys.stdin.readline()
letter = ""
count = 0

for i in string:
    if i.isdigit():
        letter += i
num = int(letter)
for i in range(1, num+1):
    if num % i == 0:
        count += 1
print(num)
print(count)
```

- `isdigit()`: 문자열이 숫자인지 확인하는 메서드(2^2도 숫자로 인식)
- `isdecimal()`: 문자열이 0~9 중 하나인지 확인

```python
#ref
import sys
sys.stdin = open("input.txt", "r")
s = input()
res = 0
for x in s:
    if x.isdecimal():
        res = res*10+int(x)
print(res)
cnt = 0
for i in range(1, res+1):
    if res % i == 0:
        cnt += 1
print(cnt)
```

- 숫자 추출해서 문자열에 담지 않고 연산을 통해 답 구함



## 카드 역배치

```python
import sys
card = [i for i in range(1, 21)]

for i in range(10):
    m, n = map(int, sys.stdin.readline().split())
    temp = card[m-1:n]
    temp.reverse()
    count = 0
    for j in range(m-1, n):
        card[j] = temp[count]
        count += 1
for i in card:
    print(i, end=' ')
```

```python
#ref
import sys
sys.stdin = open("input.txt", "r")
a = list(range(21))
for _ in range(10):
    s, e = map(int, input().split())
    for i in range((e-s+1)//2):
        a[s+i], a[e-i] = a[e-i], a[s+i]
a.pop(0)
for x in a:
    print(x, end=' ')
```

- 빈 리스트를 생성할 때 range로 일정하게 증가하거나 감소하는 값들로 초기화하려면  `list(range(범위))` 

- `a, b = b, a`: 변수 a와 b의 값이 서로 교환된다(swap)

  ```python
  for i in range((e-s+1)//2):
          a[s+i], a[e-i] = a[e-i], a[s+i]
  ```

- 0번 인덱스 값(0)을 제외하기 위해 `a.pop(0)`



## 두 리스트 합치기

```python
import sys
n = int(sys.stdin.readline())
n_list = list(map(int, sys.stdin.readline().split()))
m = int(sys.stdin.readline())
m_list = list(map(int, sys.stdin.readline().split()))

nm_list = n_list + m_list
nm_list.sort()
for nm in nm_list:
  print(nm, end=' ')
```

- `sort()`로 정렬하면 시간복잡도는 **nlogn**이다 (퀵 정렬)
- 하지만 이미 두 리스트 모두 오름차순으로 정렬되어 있다는 점을 잘 활용하면 시간복잡도 **n**만으로도 끝낼 수 있다!! 아래의 코드를 보자

```python
#ref
import sys
sys.stdin = open("input.txt", "r")
n = int(input())
a = list(map(int, input().split()))
m = int(input())
b = list(map(int, input().split()))
p1 = p2 = 0
c = []
while p1 < n and p2 < m:
    if a[p1] < b[p2]:
        c.append(a[p1])
        p1 += 1
    else:
        c.append(b[p2])
        p2 += 1
if p1 < n:
    c = c+a[p1:]
if p2 < m:
    c = c+b[p2:]
for x in c:
    print(x, end=' ')
```

- `p1`과  `p2`는 포인터 변수 (처음엔 0으로 초기화)
- 포인터 변수를 기준으로 a와 b에 있는 값들을 하나씩 순서대로 비교하면서 작은 값을 c에 추가한다
- 만약 둘 중 한 리스트의 값을 모두 c에 넣었을 경우 남은 다른 리스트의 값은 c에 한꺼번에 넣는다 



## 수들의 합

```python
import sys
n, m = map(int, sys.stdin.readline().split())
a = list(map(int, sys.stdin.readline().split()))
count = 0
sum = 0
for i in range(n):
    sum = 0
    for j in range(i, n):
        sum += a[j]
        if a[j] == m:
            count += 1
            continue
        if sum == m:
            count += 1
        elif sum > m:
            break
print(count)
```

- 도움 받음
- 이중 for문을 쓰지 않고 작성했는데 고려하지 않은 부분도 있어서 모든 경우를 출력하진 못했다

```python
#ref
import sys
sys.stdin = open("input.txt", 'r')
n, m = map(int, input().split())
a = list(map(int, input().split()))
lt = 0
rt = 1
tot = a[0]
cnt = 0
while True:
    if tot < m:
        if rt < n:
            tot += a[rt]
            rt += 1
        else:
            break
    elif tot == m:
        cnt += 1
        tot -= a[lt]
        lt += 1
    else:
        tot -= a[lt]
        lt += 1
print(cnt)
```

- 연속 부분합 구하기 문제
- 인덱스 번호를 가리키는 변수
  - `lt`: 왼쪽(0부터 시작)
  - `rt`: 오른쪽 (1부터 시작)

- `tot`: lt부터 rt가 가리키는 바로 앞의 값까지의 연속 부분합 (a[0]으로 시작)
  - `m`과 `tot` 비교
    - `m`이 큰 경우: `a[rt]`을 더하고 `rt`는 1 증가. `rt`가 `n`이 되면 반복문 종료
    - 같은 경우: `a[lt]`을 빼고 `lt`는 1 증가. `cnt`(답) 증가
    - `tot`이 큰 경우: a[lt]를 빼고 lt는 1 증가



## 격자판 최대합

```python
import sys

n = int(sys.stdin.readline())
board = [0 for _ in range(n)]
for i in range(n):
    board[i] = list(map(int, sys.stdin.readline().split()))
answer = 0

for i in range(n):
    answer = max(answer, sum(board[i]))

for i in range(n):
    total = 0
    for j in range(n):
        total += board[j][i]
    answer = max(answer, total)

total = 0
for i in range(n):
    total += board[i][i]
answer = max(answer, total)

total = 0
for i in range(n):
    total += board[i][n-1-i]
answer = max(answer, total)

print(answer)
```

- 처음에는 가로줄 중의 최대, 세로줄 중의 최대를 구한 후 두 최댓값과 대각선 합을 리스트에 넣은 다음 리스트 아이템의 최댓값을 구했었는데 문제를 다시 읽어보니 그럴 필요가 없었다

  => 문제 읽고 나서 성급하게 코드 적지 말기! 충분히 이해하고 나서 하기

```python
#ref
import sys
sys.stdin = open("input.txt", 'r')
n = int(input())
a = [list(map(int, input().split())) for _ in range(n)]
largest = -2147000000
for i in range(n):
    sum1 = sum2 = 0
    for j in range(n):
        sum1 += a[i][j]
        sum2 += a[j][i]
    if sum1 > largest:
        largest = sum1
    if sum2 > largest:
        largest = sum2
sum1 = sum2 = 0
for i in range(n):
    sum1 += a[i][i]
    sum2 += a[i][n-i-1]
if sum1 > largest:
    largest = sum1
if sum2 > largest:
    largest = sum2
print(largest)
```

- `[list(map(int, input().split())) for _ in range(n)]` : 한 줄에 2차원 리스트 선언 및 할당(입력)을 동시에 할 수 있다! 

- 최댓값은 int가 취할 수 있는 값 중 최솟값으로 초기화
- 각 행의 합과 열의 합을 각각 sum1과 sum2에 for문 한 개로 동시에 계산할 수 있다

- 위 코드에서는 행의 최대 합과 열의 최대 합을 구한 후 largest에 업데이트하고, 두 대각선의 최대 합을 구한 후 largest에 업데이트하는 순으로 진행했다



## 사과나무(다이아몬드)

```python
import sys
n = int(sys.stdin.readline())
apple = [list(map(int, sys.stdin.readline().split())) for _ in range(n)]
answer = 0

for i in range(n):
    if i < n//2:
        answer += sum(apple[i][n//2-i:n//2+i+1])
    elif i == n//2:
        answer += sum(apple[i])
    elif n//2 < i < n-1:
        answer += sum(apple[i][i-n//2:i+1])
    else:
        answer += apple[n-1][n//2]
print(answer)
```

- 일부 테스트 케이스 입력 시 오답
- 리스트의 합 구할 때 sum 내장함수와 슬라이스 사용

```python
#ref
import sys
sys.stdin = open("input.txt", 'r')
n = int(input())
a = [list(map(int, input().split())) for _ in range(n)]
res = 0
s = e = n//2
for i in range(n):
    for j in range(s, e+1):
        res += a[i][j]
    if i < n//2:
        s -= 1
        e += 1
    else:
        s += 1
        e -= 1
print(res)
```

- 다음부턴 접근할 때 인덱스 변수 사용을 적극 고려하자
- `s`는 각 행에서 왼쪽 인덱스(시작점), `e`는 각 행에서 오른쪽 인덱스(끝)
  - 왼쪽 인덱스부터 오른쪽 인덱스까지의 합을 `res`에 더한다
- 0행부터 n//2행 전까지: `s`는 1씩 감소하고 `e`는 1씩 증가한다
- n//2행부터 마지막 행까지: `s`는 1씩 증가하고 `e`는 1씩 감소한다



## 곶감(모래시계)

```python
import sys
n = int(sys.stdin.readline())
gotgam = [list(map(int, sys.stdin.readline().split())) for _ in range(n)]
m = int(sys.stdin.readline())
rotation = [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

for i in range(m):
    temp = []
    row = rotation[i][0] - 1
    direction = rotation[i][1]
    num = rotation[i][2]
    if direction == 0:
        for j in range(num % n, n):
            temp.append(gotgam[row][j])
        for j in range(0, num % n):
            temp.append(gotgam[row][j])
    else:
        for j in range((n-num) % n, n):
            temp.append(gotgam[row][j])
        for j in range(0, (n-num) % n):
            temp.append(gotgam[row][j])
    gotgam[row] = temp

start = 0
end = n
answer = 0

for i in range(n):
    for j in range(start, end):
        answer += gotgam[i][j]
    if i < n//2:
        start += 1
        end -= 1
    else:
        start -= 1
        end += 1
print(answer)
```

```python
import sys
sys.stdin = open("input.txt", 'r')
n = int(input())
a = [list(map(int, input().split())) for _ in range(n)]
m = int(input())
for i in range(m):
    h, t, k = map(int, input().split())
    if(t == 0):
        for _ in range(k):
            a[h-1].append(a[h-1].pop(0))
    else:
        for _ in range(k):
            a[h-1].insert(0, a[h-1].pop())

res = 0
s = 0
e = n-1
for i in range(n):
    for j in range(s, e+1):
        res += a[i][j]
    if i < n//2:
        s += 1
        e -= 1
    else:
        s -= 1
        e += 1
print(res)
```

