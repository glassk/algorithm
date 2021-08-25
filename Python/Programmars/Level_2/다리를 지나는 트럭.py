def solution(bridge_length, weight, truck_weights):
    answer = 0
    bridge = [0]*bridge_length
    while truck_weights:
        bridge.pop(0)
        if sum(bridge)+truck_weights[0] <= weight:
            bridge.append(truck_weights.pop(0))
        else:
            bridge.append(0)
        answer += 1
    if bridge:
        answer += len(bridge)
    return answer


print(solution(2, 10, [7, 4, 5, 6]))  # 8
print(solution(100, 100, [10]))  # 101
print(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]))  # 110
