from itertools import permutations


def isPrime(n):
    if n == 0 or n == 1:
        return False
    for i in range(2, n):
        if n % i == 0:
            return False
    return True


def solution(numbers):
    answer = []
    for length in range(1, len(numbers)+1):
        for x in permutations(numbers, length):
            if isPrime(int(''.join(x))):
                answer.append(int(''.join(x)))
    return len(set(answer))


print(solution("17"))  # 3
print(solution("011"))  # 2
