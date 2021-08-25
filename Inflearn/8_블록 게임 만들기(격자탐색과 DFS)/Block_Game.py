import turtle as t  # 터틀 그래픽 모듈
import random as r  # 랜덤 모듈
import time
dy = [-1, 0, 1, 0]  # 행
dx = [0, 1, 0, -1]  # 열


class Brick():
    def __init__(self):
        # 떨어지는 벽돌의 초기 위치와 랜덤 색
        self.y = 0
        self.x = 6
        self.color = r.randint(1, 6)

    def move_left(self, grid):  # 왼쪽 방향키 눌렀을 때 동작
        # (두번째 조건) 대각선 위치에 블록 있으면 이동 못하게 함
        if grid[self.y][self.x-1] == 0 and grid[self.y+1][self.x-1] == 0:
            grid[self.y][self.x] = 0
            self.x -= 1

    def move_right(self, grid):  # 오른쪽 방향키 눌렀을 때 동작
        if grid[self.y][self.x+1] == 0 and grid[self.y+1][self.x+1] == 0:
            grid[self.y][self.x] = 0
            self.x += 1


def draw_grid(block, grid):  # 격자 정보를 block 객체로 그래픽 처리하는 함수
    block.clear()
    # 시작점 설정
    top = 250
    left = -150
    # 인덱스(번호)별 block 색상 설정(0은 block, 7은 white)
    colors = ['black', 'red', 'blue', 'orange',
              'yellow', 'green', 'purple', 'white']
    for y in range(len(grid)):  # 행 번호 접근
        for x in range(len(grid[0])):  # 열 번호 접근
            # 사각형 한 변 길이는 20px + 간격 2px
            sc_x = left+(x*22)  # block의 x 좌표
            sc_y = top-(y*22)  # block의 y 좌표
            block.goto(sc_x, sc_y)
            # 게임 오버 기준이 되는 행의 벽은 빨간색으로
            if y == 15 and grid[y][x] == 7:
                block.color("red")
            else:
                block.color(colors[grid[y][x]])
            block.stamp()  # 도장 찍는 것처럼 그려짐


def DFS(y, x, grid, color):
    global ch, blank
    ch[y][x] = 1
    blank.append((y, x))  # 좌표 저장
    # 상하좌우 탐색
    for i in range(4):
        yy = y+dy[i]
        xx = x+dx[i]
        if 0 < yy < 24 and 0 < xx < 13:
            if grid[yy][xx] == color and ch[yy][xx] == 0:
                DFS(yy, xx, grid, color)


def max_height(grid):  # 위에서부터 탐색하면서 블록이 존재하는 최초 행(height) 찾기
    for y in range(1, 24):
        for x in range(1, 13):
            if grid[y][x] != 0:
                return y


def grid_update(grid, blank):
    # 같은 brick은 0으로 변경
    for y, x in blank:
        grid[y][x] = 0
    # 중력 작용에 따라 떨어뜨리기
    height = max_height(grid)
    for y in range(23, height, -1):
        for x in range(1,  13):
            if grid[y][x] == 0:
                tmp_y = y
                while grid[tmp_y-1][x] == 0 and tmp_y-1 > 0:
                    tmp_y -= 1
                grid[y][x] = grid[tmp_y-1][x]
                grid[tmp_y-1][x] = 0


def continual_remove():  # grid_update() 후 연쇄반응으로 함께 지워지는 경우
    global blank, ch
    while True:
        flag = 1  # grid_update가 발생했는지 확인
        for y in range(23, 15, -1):
            for x in range(1, 13):
                if grid[y][x] != 0:
                    ch = [[0]*14 for _ in range(25)]
                    blank = []
                    DFS(y, x, grid, grid[y][x])
                    if len(blank) >= 4:
                        grid_update(grid, blank)
                        flag = 0
        draw_grid(block, grid)
        if flag == 1:  # grid_update, 연쇄반응 없었으므로 while문 break
            break


def game_over():
    pen.up()
    pen.goto(-120, 100)
    pen.write("Game Over", font=("courier", 30))


def you_win():
    pen.up()
    pen.goto(-100, 100)
    pen.write("You Win", font=("courier", 30))


if __name__ == "__main__":
    # 스크린 객체 (sc는 창)
    sc = t.Screen()
    sc.tracer(False)  # 그리는 속도를 빠르게 한다
    sc.bgcolor("black")
    sc.setup(width=600, height=700)
    # 2차원 리스트로 격자판 생성
    grid = [[0]*12 for _ in range(24)]
    # 벽(테두리)은 7
    for i in range(24):
        grid[i].insert(0, 7)
        grid[i].append(7)
    grid.append([7]*14)
    # 아래 3줄은 미리 랜덤하게 채워져 있음
    for y in range(23, 20, -1):
        for x in range(1, 13):
            grid[y][x] = r.randint(1, 6)

    # 터틀 그래픽 클래스 객체 block
    block = t.Turtle()
    block.penup()  # 이동해도 그리지 않음
    block.speed(0)  # block 이동 속도
    block.shape("square")  # block 모양
    block.color("red")  # block 색
    block.setundobuffer(None)  # 버퍼에 계속 누적되는 것을 방지(일정 양 유지)

    # Brick 클래스 객체 brick
    brick = Brick()
    grid[brick.y][brick.x] = brick.color  # 그리드에 brick 표시
    draw_grid(block, grid)  # 격자 그리는 함수

    # 터틀 그래픽 클래스 객체 pen
    pen = t.Turtle()
    pen.ht()  # ht(Hide Turtle): 객체 모양을 숨겨서 보이지 않게 함
    pen.goto(-80, 290)  # pen 특정 좌표로 이동
    pen.color("white")
    pen.write("Block Game", font=('courier', 20, 'normal'))  # 글자 작성

    # key를 누르면 (멤버)함수 적용 (인자가 함수이면 람다 함수로)
    sc.onkeypress(lambda: brick.move_left(grid), "Left")
    sc.onkeypress(lambda: brick.move_right(grid), "Right")
    sc.listen()  # 실제로 반응하고 작동하려면 필요
    while True:
        sc.update()  # sc.tracer(False) 때문에 update해야 함
        # 가려고 하는 지점이 0(빈 공간)일 때
        if grid[brick.y+1][brick.x] == 0:
            # 아래 방향으로 brick이 움직인다
            grid[brick.y][brick.x] = 0
            brick.y += 1
            grid[brick.y][brick.x] = brick.color
        else:
            # 같은 색 brick이 4개 쌓이면 없어짐
            ch = [[0]*14 for _ in range(25)]
            blank = []
            DFS(brick.y, brick.x, grid, brick.color)
            # DFS로 탐색한 결과인 blank의 길이가 4 이상이면 해당 brick 삭제
            if len(blank) >= 4:
                grid_update(grid, blank)
                continual_remove()

            height = max_height(grid)
            if height <= 15:  # 게임 오버 상태
                game_over()
                break
            elif height >= 22:  # 이긴 상태 (블록 최대 높이가 2 이하)
                draw_grid(block, grid)  # 화면에 표현한 후 종료
                you_win()
                break

            # 새로운 객체로 초기화
            brick = Brick()

        draw_grid(block, grid)  # 그리드에 표시
        time.sleep(0.05)  # while문 실행에 딜레이(속도 조절)

    sc.mainloop()  # 실행 후 창이 유지되도록
