# 채점은 통과했으나 마지막 케이스 오답
import heapq


def solution(operations):
    queue = []
    for operation in operations:
        command, data = operation.split(' ')
        if command == 'I':
            heapq.heappush(queue, int(data))
        else:
            if not queue:
                continue
            # 큐에서 최댓값 삭제 (최대 힙)
            if data == '1':
                queue = [x*(-1) for x in queue]
                heapq.heappop(queue)
                queue = [x*(-1) for x in queue]
            # 큐에서 최솟값 삭제 (최소 힙)
            elif data == '-1':
                heapq.heappop(queue)
        print(queue)
    if queue:
        return [max(queue), min(queue)]
    else:
        return [0, 0]


print(solution(["I 16", "D 1"]))  # [0,0]
print(solution(["I 7", "I 5", "I -5", "D -1"]))  # [7,5]
print(solution(["I 16", "I -5643", "D -1",
                "D 1", "D 1", "I 123", "D -1"]))  # [0, 0]
print(solution(["I -45", "I 653", "D 1", "I -642",
                "I 45", "I 97", "D 1", "D -1", "I 333"]))  # [333, -45]


# ref: https://codedrive.tistory.com/54
# heapq.nlargest, heapq.nsmallest 활용
def solution(operations):
    heap = []
    for operation in operations:
        command, data = operation.split(' ')
        if command == 'I':
            heapq.heappush(heap, int(data))
        else:
            if len(heap) > 0:
                if data == '1':
                    heap.pop(heap.index(heapq.nlargest(1, heap)[0]))
                else:
                    heapq.heappop(heap)
            else:
                pass
    if len(heap) == 0:
        return [0, 0]
    else:
        return [heapq.nlargest(1, heap)[0], heapq.nsmallest(1, heap)[0]]
