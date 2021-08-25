n, m = map(int, input().strip().split(' '))
for i in range(m):
    for j in range(n):
        print('*', end='')
    print()

# ref
a, b = map(int, input().strip().split(' '))
for _ in range(b):
    print('*'*a)
