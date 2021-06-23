# 오답
def solution(routes):
    answer = len(routes)
    routes.sort(key=lambda x: x[1]-x[0])
    print(routes)
    i = 0
    temp = routes.pop(0)
    while routes:
        if len(routes) == 1:
            return answer
        if routes[i][1] < temp[0] or temp[1] < routes[i][0]:
            i += 1
            if i == len(routes):
                temp = routes.pop(0)
                i = 0
        else:
            answer -= 1
            routes.pop(i)
    return answer


print(solution([[-20, 15], [-14, -5], [-18, -13], [-5, -3]]))  # 2


# ref: https://wwlee94.github.io/category/algorithm/greedy/speed-enforcement-camera/
def solution(routes):
    answer = 0
    routes.sort(key=lambda x: x[1])  # routes를 차량이 나간 지점 (진출) 기준으로 정렬
    camera = -30001  # -30001부터 카메라 위치를 찾습니다.

    for route in routes:
        if camera < route[0]:
            answer += 1
            camera = route[1]
    return answer
