def solution(s):
    answer = ''
    word = ''
    for letter in s:
        if letter == ' ':
            answer += word + letter
            word = ''
        else:
            if word:
                word += letter.lower()
            else:
                word += letter.upper()
    if word:
        answer += word
    return answer


print(solution("3people unFollowed me"))  # "3people Unfollowed Me"
print(solution("for the last week"))  # "For The Last Week"
print(solution("abc"))
print(solution(" adgagd 3eagdag "))


# ref: join & capitalize & split 활용
def solution(s):
    return ' '.join([word.capitalize() for word in s.split(" ")])
