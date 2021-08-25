def solution(array, commands):
    answer = []
    array.insert(0, 0)
    for command in commands:
        i, j, k = command
        temp = array[i:j+1]
        temp.sort()
        answer.append(temp[k-1])
    return answer


print(solution([1, 5, 2, 6, 3, 7, 4], [
      [2, 5, 3], [4, 4, 1], [1, 7, 3]]))  # [5, 6, 3]


# ref: sorted() 함수
def solution(array, commands):
    answer = []
    for command in commands:
        i, j, k = command
        answer.append(list(sorted(array[i-1:j]))[k-1])
    return answer
