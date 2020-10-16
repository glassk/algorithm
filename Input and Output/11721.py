#11721 열 개씩 끊어 출력하기
#check1: print는 default로 개행을 포함하므로 개행이 되지 않도록 end=""을 덧붙여준다

word = list(input())

if 0 < len(word) <= 100:
    for i in range(len(word)):
        if i >= 10 and i % 10 == 0:
            print("")
        print(word[i], end="")
else:
    print("Check word length: 0 < length <= 100")