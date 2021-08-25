from math import ceil


def player_order(n, index):
    if (index+1) % n == 0:
        return n
    return (index+1) % n


def trial_order(n, index):
    return ceil((index+1) / n)


def solution(n, words):
    log = [words[0]]
    for i in range(1, len(words)):
        if log[-1][-1] != words[i][0]:
            return [player_order(n, i), trial_order(n, i)]
        if words[i] in log:
            return [player_order(n, i), trial_order(n, i)]
        log.append(words[i])
    return [0, 0]


print(solution(3, ["tank", "kick", "know", "wheel",
                   "land", "dream", "mother", "robot", "tank"]))  # [3, 3]
print(solution(5, ["hello", "observe", "effect", "take", "either", "recognize", "encourage",
                   "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"]))  # [0, 0]
print(solution(2, ["hello", "one", "even",
                   "never", "now", "world", "draw"]))  # [1, 3]
