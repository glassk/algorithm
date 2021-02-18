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

