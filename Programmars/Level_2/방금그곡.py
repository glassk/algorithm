# ref: https://json1995.tistory.com/entry/Python%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4Level-2-%EB%B0%A9%EA%B8%88%EA%B7%B8%EA%B3%A1
def change(melody):
    if 'A#' in melody:
        melody = melody.replace('A#', 'a')
    if 'C#' in melody:
        melody = melody.replace('C#', 'c')
    if 'D#' in melody:
        melody = melody.replace('D#', 'd')
    if 'F#' in melody:
        melody = melody.replace('F#', 'f')
    if 'G#' in melody:
        melody = melody.replace('G#', 'g')
    return melody


def solution(m, musicinfos):
    m = change(m)
    answer = ('(None)', None)
    for info in musicinfos:
        start, end, title, melody = info.split(',')
        start_h, start_m, end_h, end_m = map(
            int, start.split(':') + end.split(':'))
        time = 60*(end_h-start_h) + (end_m-start_m)
        melody = change(melody)
        melody_played = (melody*time)[:time]
        if m in melody_played:
            if (answer[1] == None) or (time > answer[1]):
                answer = (title, time)
    return answer[0]


print(
    solution("ABCDEFG", ["12:00,12:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF"]))  # "HELLO"
print(solution("CC#BCC#BCC#BCC#B", [
      "03:00,03:30,FOO,CC#B", "04:00,04:08,BAR,CC#BCC#BCC#B"]))  # "FOO"
print(
    solution("ABC", ["12:00,12:14,HELLO,C#DEFGAB", "13:00,13:05,WORLD,ABCDEF"]))  # "WORLD"
