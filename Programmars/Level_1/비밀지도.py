def format_size(arr):
    if len(arr) < size:
        arr = '0'*(size-len(arr)) + arr
    return arr


def solution(n, arr1, arr2):
    global size
    size = n
    answer = []
    temp = [[0]*n for _ in range(n)]
    for i in range(n):
        arr1[i] = format_size(format(arr1[i], 'b'))
        arr2[i] = format_size(format(arr2[i], 'b'))
    for i in range(n):
        result = ''
        for j in range(n):
            temp[i][j] = int(arr1[i][j]) + int(arr2[i][j])
            if temp[i][j] > 0:
                result += '#'
            else:
                result += ' '
        answer.append(result)
    return answer


print(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]))
# ["#####","# # #", "### #", "# ##", "#####"]


# ref: rjust(), replace 활용
def solution(n, arr1, arr2):
    answer = []
    for i in range(n):
        a = str(bin(arr1[i] | arr2[i])[2:]).rjust(
            n, '0').replace('1', '#').replace('0', ' ')
        answer.append(a)
    return answer
