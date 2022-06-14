const solution = (fees, records) => {
  const [baseTime, baseFee, unitTime, unitFee] = fees;
  const carInTime = {}; // 입장 시간 기록
  const carAccTime = {}; // 누적 시간 기록

  const plusCarAccTime = (carNum, time) => {
    if (carAccTime[carNum]) {
      carAccTime[carNum] += calculateTime(carInTime[carNum], time);
    } else {
      carAccTime[carNum] = calculateTime(carInTime[carNum], time);
    }
  };

  const calculateTime = (inTime, outTime) => {
    const [inHour, inMin] = inTime.split(':').map((n) => +n);
    const [outHour, outMin] = outTime.split(':').map((n) => +n);
    return outHour * 60 + outMin - (inHour * 60 + inMin);
  };

  const calculateFee = (carNum) => {
    let fee = baseFee;
    const accTime = carAccTime[carNum];
    if (accTime > baseTime) {
      fee += Math.ceil((accTime - baseTime) / unitTime) * unitFee;
    }
    return fee;
  };

  let time, carNum, type;
  for (let record of records) {
    [time, carNum, type] = record.split(' ');
    if (type === 'IN') {
      carInTime[carNum] = time;
    } else if (type === 'OUT') {
      plusCarAccTime(carNum, time);
      delete carInTime[carNum];
    }
  }

  if (Object.keys(carInTime).length) {
    for (let carNum of Object.keys(carInTime)) {
      plusCarAccTime(carNum, '23:59');
    }
  }

  const carFees = [];
  for (let carNum of Object.keys(carAccTime)) {
    carFees.push([carNum, calculateFee(carNum)]);
  }
  carFees.sort();

  return carFees.map((car) => car[1]);
};

console.log(
  solution(
    [180, 5000, 10, 600],
    [
      '05:34 5961 IN',
      '06:00 0000 IN',
      '06:34 0000 OUT',
      '07:59 5961 OUT',
      '07:59 0148 IN',
      '18:59 0000 IN',
      '19:09 0148 OUT',
      '22:59 5961 IN',
      '23:00 5961 OUT',
    ]
  )
); // [14600, 34400, 5000]
console.log(
  solution(
    [120, 0, 60, 591],
    [
      '16:00 3961 IN',
      '16:00 0202 IN',
      '18:00 3961 OUT',
      '18:00 0202 OUT',
      '23:58 3961 IN',
    ]
  )
); // [0, 591]
console.log(solution([1, 461, 1, 10], ['00:00 1234 IN'])); // [14841]
