def solution(s):
    s = list(s.lower())
    check = dict()
    for x in s:
        check[x] = check.get(x, 0) + 1
    if check.get('p') and check.get('y') and check['p'] == check['y']:
        return True
    else:
        return False


print(solution("pPoooyY"))  # true
print(solution("Pyy"))  # false


# ref: .count() 함수 활용
def solution(s):
    return s.lower().count('p') == s.lower().count('y')
