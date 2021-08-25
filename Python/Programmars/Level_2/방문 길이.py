def solution(dirs):
    answer = 0
    dy = [1, 0, -1, 0]
    dx = [0, 1, 0, -1]
    command = ['U', 'R', 'D', 'L']
    now = (0, 0, 0, 0)
    path = []
    for dir in dirs:
        next_path = (now[2], now[3], now[2] +
                     dy[command.index(dir)], now[3]+dx[command.index(dir)])
        if -5 <= next_path[2] <= 5 and -5 <= next_path[3] <= 5:
            if not next_path in path:
                answer += 1
                path.append(next_path)
                path.append((next_path[2], next_path[3],
                             next_path[0], next_path[1]))
            now = next_path
    return answer


print(solution("ULURRDLLU"))  # 7
print(solution("LULLLLLLU"))  # 7
