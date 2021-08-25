import math
import re
from collections import Counter


def split_string(string):
    strings = []
    string = string.upper()
    for i in range(len(string)-1):
        if string[i:i+2].isalpha():
            strings.append(string[i:i+2])
    return strings


def solution(str1, str2):
    count_str1 = Counter(split_string(str1))
    count_str2 = Counter(split_string(str2))

    union = 0
    intersection = 0
    for letters, cnt in count_str1.items():
        if letters in count_str2:
            intersection += min(cnt, count_str2[letters])
            union += max(cnt, count_str2[letters])
        else:
            union += cnt
    for letters, cnt in count_str2.items():
        if not letters in count_str1:
            union += cnt

    if intersection == union == 0:
        return 65536
    return int(intersection/union*65536)


print(solution('FRANCE', 'french'))  # 16384
print(solution('handshake', 'shake hands'))  # 65536
print(solution('aa1+aa2', 'AAAA12'))  # 43690
print(solution('E=M*C^2', 'e=m*c^2'))  # 65536


# ref: 정규표현식, set과 & 및 | 연산 활용
def solution(str1, str2):
    str1 = [str1[i:i+2].lower() for i in range(0, len(str1)-1)
            if not re.findall('[^a-zA-Z]+', str1[i:i+2])]
    str2 = [str2[i:i+2].lower() for i in range(0, len(str2)-1)
            if not re.findall('[^a-zA-Z]+', str2[i:i+2])]

    gyo = set(str1) & set(str2)
    hap = set(str1) | set(str2)

    if len(hap) == 0:
        return 65536

    gyo_sum = sum([min(str1.count(gg), str2.count(gg)) for gg in gyo])
    hap_sum = sum([max(str1.count(hh), str2.count(hh)) for hh in hap])

    return math.floor((gyo_sum/hap_sum)*65536)
