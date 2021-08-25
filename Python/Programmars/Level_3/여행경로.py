from collections import defaultdict


# 일부 케이스 오답
def DFS(level, airport):
    if level == len(paths):
        answer.append(airport)
        return
    else:
        for i in range(len(paths)):
            if check[i] == 0 and airport == paths[i][0]:
                check[i] = 1
                answer.append(airport)
                DFS(level+1, paths[i][1])


def solution(tickets):
    global paths, check, answer
    answer = []
    paths = sorted(tickets, key=lambda x: (x[0], x[1]))
    check = [0]*len(paths)
    DFS(0, "ICN")
    return answer


# ["ICN", "JFK", "HND", "IAD"]
print(solution([["ICN", "JFK"], ["HND", "IAD"], ["JFK", "HND"]]))
print(solution([["ICN", "SFO"], ["ICN", "ATL"], [
      "SFO", "ATL"], ["ATL", "ICN"], ["ATL", "SFO"]]))  # ["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"]
print(solution([['ICN', 'B'], ['B', 'ICN'], [
      'ICN', 'A'], ['A', 'D'], ['D', 'A']]))  # ["ICN", "B", "ICN", "A", "D", "A"]
print(solution([["ICN", "COO"], ["ICN", "BOO"],
                ["COO", "ICN"], ["BOO", "DOO"]]))  # ["ICN", "COO", "ICN", "BOO", "DOO"]
print(solution([["ICN", "SFO"], ["SFO", "ICN"],
                ["ICN", "SFO"], ["SFO", "QRE"]]))
print(solution([["ICN", "BOO"], ["ICN", "COO"], ["COO", "DOO"], ["DOO", "COO"], [
      "BOO", "DOO"], ["DOO", "BOO"], ["BOO", "ICN"], ["COO", "BOO"]]))  # ["ICN", "BOO", "DOO", "BOO", "ICN", "COO", "DOO", "COO", "BOO"]


# ref
def dfs(graph, N, key, footprint):
    print(footprint)

    if len(footprint) == N + 1:
        return footprint

    for idx, country in enumerate(graph[key]):
        graph[key].pop(idx)

        tmp = footprint[:]
        tmp.append(country)

        ret = dfs(graph, N, country, tmp)

        graph[key].insert(idx, country)

        if ret:
            return ret


def solution(tickets):
    answer = []

    graph = defaultdict(list)

    N = len(tickets)
    for ticket in tickets:
        graph[ticket[0]].append(ticket[1])
        graph[ticket[0]].sort()

    answer = dfs(graph, N, "ICN", ["ICN"])

    return answer
