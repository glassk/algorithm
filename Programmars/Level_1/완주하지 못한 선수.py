def solution(participant, completion):
    answer = ''
    players = dict()
    for x in participant:
        players[x] = players.get(x, 0) + 1
    for x in completion:
        players[x] -= 1
    for name, count in players.items():
        if count > 0:
            answer = name
    return answer


print(solution(["leo", "kiki", "eden"], ["eden", "kiki"]))  # leo
print(solution(["marina", "josipa", "nikola", "vinko", "filipa"], [
      "josipa", "filipa", "marina", "nikola"]))  # vinko
print(solution(["mislav", "stanko", "mislav", "ana"],
               ["stanko", "ana", "mislav"]))  # mislav
