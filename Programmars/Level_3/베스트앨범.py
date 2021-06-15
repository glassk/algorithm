def solution(genres, plays):
    answer = []
    genre_play = dict()
    for genre, play in zip(genres, plays):
        genre_play[genre] = genre_play.get(genre, 0) + play
    genre_play = sorted(genre_play.items(), key=lambda x: x[1], reverse=True)
    for g in genre_play:
        temp = []
        for i in range(len(genres)):
            if genres[i] == g[0]:
                temp.append((i, plays[i]))
        temp.sort(reverse=True, key=lambda x: x[1])
        if len(temp) == 1:
            answer.append(temp[0][0])
        else:
            for i in range(2):
                answer.append(temp[i][0])
    return answer


print(solution(["classic", "pop", "classic", "classic", "pop"],
               [500, 600, 150, 800, 2500]))  # [4, 1, 3, 0]
