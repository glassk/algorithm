def split_file_name(file):
    head = number = tail = ''
    for i in range(len(file)):
        if file[i].isdigit():
            head = file[:i]
            file = file[i:]
            break
    for i in range(len(file)):
        if i == 5:
            tail = file[i:]
            break
        if file[i].isdigit():
            number += file[i]
        else:
            tail = file[i:]
            break
    return (head, number, tail)


def solution(files):
    answer = []
    names = []
    for file in files:
        names.append(split_file_name(file))
    names.sort(key=lambda x: (x[0].upper(), int(x[1])))
    for name in names:
        answer.append(''.join(name))
    return answer


print(solution(["img1234567.png", "img10.png", "img02.png",
                "img1.png", "IMG01.GIF", "img2.JPG"]))  # ["img1.png", "IMG01.GIF", "img02.png", "img2.JPG", "img10.png", "img12.png"]
# ["A-10 Thunderbolt II", "B-50 Superfortress", "F-5 Freedom Fighter", "F-14 Tomcat"]
print(solution(["F-5 Freedom Fighter", "B-50 Superfortress",
                "A-10 Thunderbolt II", "F-14 Tomcat"]))
