# ref: https://eda-ai-lab.tistory.com/472
def solution(clothes):
    answer = {}
    for i in clothes:
        answer[i[1]] = answer.get(i[1], 0) + 1
    count = 1
    for i in answer.values():
        count *= (i+1)  # 안 입은 경우를 고려하여 +1
    return count - 1  # 모두 안 입은 경우 제외


print(solution([["yellowhat", "headgear"], [
      "bluesunglasses", "eyewear"], ["green_turban", "headgear"]]))  # 5
print(solution([["crowmask", "face"], [
      "bluesunglasses", "face"], ["smoky_makeup", "face"]]))  # 3
