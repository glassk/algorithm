from collections import Counter
from itertools import combinations


def solution(orders, course):
    menus = dict()
    answer = []
    for x in course:
        for order in orders:
            for y in combinations(sorted(order), x):
                menus[y] = menus.get(y, 0) + 1
    for x in course:
        max_menu = 0
        for menu, count in menus.items():
            if len(menu) == x:
                max_menu = max(max_menu, count)
        for menu, count in menus.items():
            if max_menu >= 2 and len(menu) == x and count == max_menu:
                answer.append(''.join(menu))
    return sorted(answer)


# ["AC", "ACDE", "BCFG", "CDE"]
print(solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4]))

# ["ACD", "AD", "ADE", "CD", "XYZ"]
print(solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2, 3, 5]))

print(solution(["XYZ", "XWY", "WXA"], [2, 3, 4]))  # ["WX", "XY"]


# ref
def solution(orders, course):
    result = []

    for course_size in course:
        order_combinations = []
        for order in orders:
            order_combinations += combinations(
                sorted(order), course_size)

        most_ordered = Counter(order_combinations).most_common()
        result += [k for k, v in most_ordered if v >
                   1 and v == most_ordered[0][1]]

    return [''.join(v) for v in sorted(result)]
