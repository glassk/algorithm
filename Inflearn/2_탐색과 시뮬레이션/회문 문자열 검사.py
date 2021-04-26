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

#ref
sys.stdin = open("input.txt", "r")
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
