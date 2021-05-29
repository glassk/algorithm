def solution(record):
    answer = []
    commands = []
    uids = []
    info = {}

    for rec in record:
        rec = rec.split()
        if len(rec) == 3:  # Enter, Change
            command, uid, nick = rec
            info[uid] = nick
        else:  # Leave
            command, uid = rec

        if command == 'Enter' or command == 'Leave':
            commands.append(command)
            uids.append(uid)
        else:
            info[uid] = nick

    for i in range(len(commands)):
        if commands[i] == 'Enter':
            answer.append(f'{info[uids[i]]}님이 들어왔습니다.')
        else:
            answer.append(f'{info[uids[i]]}님이 나갔습니다.')
    return answer


print(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo",
                "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]))  # ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]
