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

  

