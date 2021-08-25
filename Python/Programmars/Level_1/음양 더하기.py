true = True
false = False


def solution(absolutes, signs):
    answer = 0
    for i in range(len(signs)):
        if signs[i]:
            answer += absolutes[i]
        else:
            answer -= absolutes[i]
    return answer


print(solution([4, 7, 12], [true, false, true]))  # 9
print(solution([1, 2, 3], [false, false, true]))  # 0


# ref: zip() 활용
def solution(absolutes, signs):
    answer = 0
    for absolute, sign in zip(absolutes, signs):
        if sign:
            answer += absolute
        else:
            answer -= absolute
    return answer
