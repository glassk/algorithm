# ref: https://kyome.tistory.com/111 (comment)
# 클래스 활용, 트리 구성 및 순회, 재귀함수
import sys
sys.setrecursionlimit(10**5)


class Tree:
    def __init__(self, nodeinfo):
        self.idx, *self.root = nodeinfo.pop()
        leftTree = list(filter(lambda x: x[1] < self.root[0], nodeinfo))
        rightTree = list(filter(lambda x: x[1] > self.root[0], nodeinfo))
        self.left = Tree(leftTree) if leftTree else False
        self.right = Tree(rightTree) if rightTree else False


def recursiveTraversal(tree, preorder, postorder):
    preorder.append(tree.idx)
    if tree.left:
        recursiveTraversal(tree.left, preorder, postorder)
    if tree.right:
        recursiveTraversal(tree.right, preorder, postorder)
    postorder.append(tree.idx)


def solution(nodeinfo):
    nodeinfo = [(i+1, x, y) for i, (x, y) in enumerate(nodeinfo)]
    nodeinfo = sorted(nodeinfo, key=lambda x: x[2])
    tree = Tree(nodeinfo)
    preorder, postorder = [], []
    recursiveTraversal(tree, preorder, postorder)
    return [preorder, postorder]


print(solution([[5, 3], [11, 5], [13, 3], [3, 5],
                [6, 1], [1, 3], [8, 6], [7, 2], [2, 2]]	))  # [[7,4,6,9,1,8,5,2,3],[9,6,5,8,1,4,3,2,7]]
