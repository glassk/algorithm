import itertools as it


def DFS(L, s):
    global count
    if L == k:
        sum = 0
        for i in range(k):
            sum += a[res[i]]
        if sum % m == 0:
            count += 1
    else:
        for i in range(s, n):
            res[L] = i
            DFS(L+1, i+1)


if __name__ == "__main__":
    n, k = map(int, input().split())
    a = list(map(int, input().split()))
    m = int(input())
    res = [0]*k
    count = 0
    DFS(0, 0)
    print(count)

'''
def DFS(L, s, sum):
    global cnt
    if L==k:
        if sum%m==0:
            cnt+=1
    else:
        for i in range(s, n):
            DFS(L+1, i+1, sum+a[i])

if __name__=="__main__":
    n, k=map(int, input().split())
    a=list(map(int, input().split()))
    m=int(input())
    cnt=0
    DFS(0, 0, 0)
    print(cnt)
'''

# 라이브러리를 이용한 조합
n, k = map(int, input().split())
a = list(map(int, input().split()))
m = int(input())
cnt = 0
for x in it.combinations(a, k):
    if sum(x) % m == 0:
        cnt += 1
print(cnt)
