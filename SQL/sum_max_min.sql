# 최댓값 구하기
SELECT MAX(DATETIME)
FROM ANIMAL_INS;

# 최솟값 구하기
SELECT MIN(DATETIME)
FROM ANIMAL_INS;

# 동물 수 구하기
SELECT COUNT(*) 
FROM ANIMAL_INS;

# 중복 제거하기
SELECT COUNT(DISTINCT NAME) 
FROM ANIMAL_INS;