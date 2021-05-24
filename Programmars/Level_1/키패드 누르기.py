def move_left(i, j):
    global left, answer
    left = (i, j)
    answer += 'L'


def move_right(i, j):
    global right, answer
    right = (i, j)
    answer += 'R'


def solution(numbers, hand):
    global answer, keypad, left, right
    answer = ''
    keypad = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [-1, 0, -1]]
    left = (3, 0)
    right = (3, 2)
    for num in numbers:
        for i in range(4):
            for j in range(3):
                if keypad[i][j] == num:
                    if j == 0:
                        move_left(i, j)
                    elif j == 2:
                        move_right(i, j)
                    else:
                        left_dis = abs(left[0]-i) + abs(left[1]-j)
                        right_dis = abs(right[0]-i) + abs(right[1]-j)
                        if left_dis > right_dis:
                            move_right(i, j)
                        elif left_dis < right_dis:
                            move_left(i, j)
                        else:
                            if hand == "right":
                                move_right(i, j)
                            else:
                                move_left(i, j)
    return answer


print(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"))  # "LRLLLRLLRRL"
print(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left"))  # "LRLLRRLLLRR"
print(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right"))  # "LLRLLRLLRL"
