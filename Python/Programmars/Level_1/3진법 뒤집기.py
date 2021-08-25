def solution(n):
    answer = 0
    temp = ''
    while n > 0:
        temp += str(n % 3)
        n = n//3
    temp = int(temp)
    length = len(str(temp))
    for i in range(length):
        answer += (3**(length-i-1))*int(str(temp)[i])
    return answer


print(solution(45))
print(solution(125))
