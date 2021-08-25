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
