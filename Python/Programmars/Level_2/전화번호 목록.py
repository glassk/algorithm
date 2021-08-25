def solution(phone_book):
    len_list = []
    for num in phone_book:
        len_list.append(len(num))
    len_list = sorted(set(len_list))
    for x in len_list:
        check = dict()
        for num in phone_book:
            check[num[:x]] = check.get(num[:x], 0) + 1
        for idx, value in check.items():
            if value > 1 and idx in phone_book:
                return False
    return True


print(solution(["119", "97674223", "1195524421"]))  # false
print(solution(["123", "456", "789"]))  # true
print(solution(["12", "123", "1235", "567", "88"]))  # false
print(solution(["234", "23456", "45"]))
