def Step1(str):
    str = str.lower()
    return str


def Step2(str):
    result = ''
    for letter in str:
        if letter.islower() or letter.isdecimal() or letter == '-' or letter == '_' or letter == '.':
            result = result + letter
    return result


def Step3(str):
    result = ''
    for letter in str:
        if result and letter == '.' and result[-1] == '.':
            continue
        result = result + letter
    return result


def Step4(str):
    if str and str[0] == '.':
        str = str[1:]
    if str and str[-1] == '.':
        str = str[:-1]
    return str


def Step5(str):
    if str:
        return str
    else:
        return 'a'


def Step6(str):
    if len(str) > 15:
        str = str[:15]
        if str[-1] == '.':
            str = str[:-1]
    return str


def Step7(str):
    while len(str) < 3:
        str = str + str[-1]
    return str


def solution(new_id):
    answer = Step7(Step6(Step5(Step4(Step3(Step2(Step1(new_id)))))))
    return answer


testcases = ["...!@BaT#*..y.abcdefghijklm",
             "z-+.^.", "=.=", "123_.def", "abcdefghijklmn.p"]
results = ["bat.y.abcdefghi", "z--", "aaa", "123_.def", "abcdefghijklmn"]
for case, result in zip(testcases, results):
    if solution(case) == result:
        print(True)
    else:
        print(False)


# ref: 정규표현식(re 패키지) 활용
def solution(new_id):
    from re import sub
    st = new_id
    st = st.lower()
    st = sub('[^a-z0-9\-_.]', '', st)
    st = sub('\.+', '.', st)
    st = sub('^[.]|[.]$', '', st)
    st = 'a' if len(st) == 0 else st[:15]
    st = sub('^[.]|[.]$', '', st)
    st = st if len(st) > 2 else st + \
        "".join([st[-1] for i in range(3-len(st))])
    return st
