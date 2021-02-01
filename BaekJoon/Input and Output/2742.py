#2742 기찍 N
N = int(input())

if N <= 100000:
    for i in range(N, 0, -1):
        print(i)
else:
    print("Check input condition: input <= 100000")

#further way (2741번 참고)
print("\n".join(map(str, range(int(input()), 0 , -1))))