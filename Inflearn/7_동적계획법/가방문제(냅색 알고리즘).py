# ref
if __name__ == "__main__":
    n, m = map(int, input().split())
    dy = [0]*(m+1)
    for i in range(n):
        w, v = map(int, input().split())
        for j in range(w, m+1):
            dy[j] = max(dy[j], dy[j-w]+v)
    print(dy[m])
