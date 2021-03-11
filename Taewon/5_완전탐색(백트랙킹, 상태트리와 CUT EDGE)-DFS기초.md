##  재귀함수를 이용한 이진수 출력

```python
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
```

- [재귀함수와 스택 설명 참고](https://github.com/GlassK/ALS/blob/master/Python%20Basic%20Grammar.md#%EC%9E%AC%EA%B7%80%ED%95%A8%EC%88%98%EC%99%80-%EC%8A%A4%ED%83%9D)

```python
#ref
import sys
sys.stdin=open("input.txt", "r")
def DFS(x):
    if x==0:
        return
    else:
        DFS(x//2)
        print(x%2, end='')

if __name__=="__main__":
    n=int(input())
    DFS(n)
```

- 따로 리스트를 사용하지 않고 바로 출력했다
- if-else문으로 DFS가 종료되는 조건을 if로 지정하자
  - `return`: 함수를 종료시키는 명령



## 이진트리 순회(깊이우선탐색)

```python
#ref
def DFS(v):
    if v > 7:
        return
    else:
      	#전위순회
        print(v, end=' ')
        DFS(v*2)
        DFS(v*2+1)
        
        #중위순회
        DFS(v*2)
        print(v, end=' ')
        DFS(v*2+1)
        
        #후위순회
        DFS(v*2)
        DFS(v*2+1)
        print(v, end=' ')


if __name__ == "__main__":
    DFS(1)
```

- 트리를 탐색하는 방법에는 깊이우선탐색(DFS, 재귀 활용)과 너비우선탐색(BFS, 큐 활용)이 있다.
  - 너비우선탐색: 레벨 탐색(루트 노드부터 0레벨)
- 트리의 기본 단위
  - 부모 노드
  - 왼쪽 자식 노드
  - 오른쪽 자식 노드
- 트리를 탐색하는 순서
  - 전위순회(부모 - 왼쪽 - 오른쪽): 루트 노드부터 시작하여 왼쪽 노드로 계속 탐색하다가 탐색할 것이 없으면(말단 노드 도달) 부모 노드로 돌아가서 다른 노드를 방문한다. 방문 시 노드 본연의 일을 실행한 후 다음 왼쪽 노드를 방문하거나 부모 노드로 돌아가서 다른 노드를 방문한다.
  - 중위순회(왼쪽 - 부모 - 오른쪽)
  - 후위순회(왼쪽 - 오른쪽 - 부모) 

- 자식 노드를 호출하는 방법
  - 왼쪽 자식 노드: 부모*2
  - 오른쪽 자식 노드: 부모*2 + 1
- 깊이우선탐색 문제는 대부분 전위순회 방식이고, 병합정렬의 경우에는 후위순회로 해결한다

---

- `DFS(1)`: 항상 1번 노드부터 시작한다
- `print(v, end=' ')`는 각 노드가 하는 본연의 일
  - 전위순회: 두 재귀함수를 호출하기 전에 실행한다
  - 중위순회: `DFS(v*2)`를 호출한 후 실행한다
  - 후위순회: 두 재귀함수를 호출한 후에 실행한다



## 부분집합 구하기(DFS)

```python
#ref
import sys
sys.stdin = open("input.txt", "r")


def DFS(v):
    if v == n+1:
        for i in range(1, n+1):
            if ch[i] == 1:
                print(i, end=' ')
        print()
    else:
        ch[v] = 1
        DFS(v+1)
        ch[v] = 0
        DFS(v+1)


if __name__ == "__main__":
    n = int(input())
    ch = [0]*(n+1)
    DFS(1)
```

- 각 원소에 대하여 포함되는지의 여부에 따라 경우를 나눌 수 있다
  - 리스트를 활용하여 포함 여부를 체크하고 저장한다
  - ch[v]가 1이면 포함, 0이면 미포함

-  DFS 문제를 해결하기 위해서는 상태 트리를 잘 구성해야 한다

  <img src="/Users/yuri/Library/Application Support/typora-user-images/image-20210308102950254.png" alt="image-20210308102950254" style="zoom:50%;" />

  

## 합이 같은 부분집합(DFS)

```python
#ref
import sys
sys.stdin = open("input.txt", "r")


def DFS(L, sum):
    if sum > total//2:
        return
    if L == n:
        if sum == (total-sum):
            print("YES")
            sys.exit(0)
    else:
        DFS(L+1, sum+a[L])
        DFS(L+1, sum)


if __name__ == "__main__":
    n = int(input())
    a = list(map(int, input().split()))
    total = sum(a)
    DFS(0, 0)
    print("NO")  #참이 되는 경우가 없을 때
```

문제를 푸는 원리 자체는 생각해 냈지만 코드로 구현하기 쉽지 않았다

- `if sum == (total-sum)`: 한 부분집합의 합과 나머지 부분집합의 합 간 비교

- DFS의 인자 두 가지

  - `L`: 리스트 a의 인덱스 참조 (Level을 의미함)
    - L이 n이 되었을 때는 곧 한 부분집합 구성을 끝낸 것이다
    - n이 되기 전까지 1씩 증가시킨다 (= 인덱스와 레벨 1씩 증가)
  - `sum`: 누적 합
    - `sum+a[L]`: 해당 부분집합에 포함시킴
    - `sum`: 해당 부분집합에 포함시키지 않음

  <img src="/Users/yuri/Library/Application Support/typora-user-images/image-20210309151122419.png" alt="image-20210309151122419" style="zoom:50%;" />

- `sys.exit(0)`: 함수뿐만 아니라 **프로그램 전체를 아예 종료시킨다!**

- 시간복잡도를 줄이는 방법

  - 두 개의 부분집합으로 나눴을 때 두 부분집합의 원소의 합이 같다

    = 한 부분집합의 `sum`이 `total`의 1/2을 초과해 버리면 더 이상 DFS를 진행할 필요가 없다!



## 바둑이 승차(DFS)

```python
#ref
import sys
sys.stdin = open("input.txt", "r")


def DFS(L, sum, tsum):
    global result
    if sum+(total-tsum) < result:
        return
    if sum > c:
        return
    if L == n:
        if sum > result:
            result = sum
    else:
        DFS(L+1, sum+a[L], tsum+a[L])
        DFS(L+1, sum, tsum+a[L])


if __name__ == "__main__":
    c, n = map(int, input().split())
    a = [0]*n
    result = -2147000000
    for i in range(n):
        a[i] = int(input())
    total = sum(a)
    DFS(0, 0, 0)
    print(result)
```

- 부분집합을 활용하면 된다 (직전 문제와 유사)
- 각 바둑이의 몸무게를 리스트 a에 저장한다

- 최댓값을 찾아야 하 므로 최종 답이 되는 `result`는 정수의 범위 중 최솟값으로 초기화한다
  - 최댓값을 찾는 과정에서 재할당하므로(`result = sum`) 전역 변수로 선언해야 한다(`global result`)
- `L`은 a에 접근하는 인덱스 번호, `sum`은 부분집합의 합
  - `L == n` 이면 말단 지점까지 도달한 것
- `DFS(L+1, sum+a[L])`: 부분집합에 인덱스가 L인 원소 포함시킴

**Cut Edge Tech**

- `tsum` 없이도 테스트케이스를 모두 통과하지만, 시간 초과
- `tsum`(total sum): 포함 여부와 상관없이 판단을 거친 바둑이의 몸무게 합
  - `total - tsum`: 앞으로 판단해야 할 바둑이의 몸무게 합
  - `if sum+(total-tsum) < result`: 지금까지의 합과 포함 가능성 있는 모든 합이 result(지금까지의 최댓값)보다 작을 경우 바로 실행 종료



## 중복순열 구하기(DFS)

```python
#ref
import sys
sys.stdin = open("input.txt", "r")


def DFS(L):
    global cnt
    if L == m:
        for i in range(m):
            print(res[i], end=' ')
        print()
        cnt += 1
    else:
        for i in range(1, n+1):
            res[L] = i
            DFS(L+1)


if __name__ == "__main__":
    n, m = map(int, input().split())
    res = [0]*n
    cnt = 0
    DFS(0)
    print(cnt)
```

상태트리를 잘 구성하여 DFS()를 호출하면 된다

<img src="/Users/yuri/Library/Application Support/typora-user-images/image-20210310112228100.png" alt="image-20210310112228100" style="zoom:50%;" />

- 크기가 m인 리스트를 생성하여 각 아이템의 숫자를 상태 트리를 통해 결정한다
- DFS(L+1)을 n번 실행하면서 res[L]을a 1~n까지의 값으로 초기화한다 (이해 필요)

- `cnt += 1` 를 쓰기 위해서는 `cnt`를 전역변수로 선언해야 한다



## 동전교환

```python
#ref
import sys
sys.stdin = open("input.txt", "r")


def DFS(L, sum):
    global res
    if L >= res:
        return
    if sum > m:
        return
    if sum == m:
        if L < res:
            res = L
    else:
        for i in range(n):
            DFS(L+1, sum+a[i])


if __name__ == "__main__":
    n = int(input())
    a = list(map(int, input().split()))
    m = int(input())
    res = 2147000000
    a.sort(reverse=True)
    DFS(0, 0)
    print(res)
```



## 순열 구하기

```python
#ref
import sys
sys.stdin = open("input.txt", "r")


def DFS(L):
    global cnt
    if L == m:
        for i in range(m):
            print(res[i], end=' ')
        print()
        cnt += 1
    else:
        for i in range(1, n+1):
            if ch[i] == 0:
                ch[i] = 1
                res[L] = i
                DFS(L+1)
                ch[i] = 0


if __name__ == "__main__":
    n, m = map(int, input().split())
    res = [0]*n
    ch = [0]*(n+1)
    cnt = 0
    DFS(0)
    print(cnt)
```

