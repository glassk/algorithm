function solution(record) {
  const userInfo = {};
  const actions = [];
  const messages = {
    Enter: '님이 들어왔습니다.',
    Leave: '님이 나갔습니다.',
  };

  for (let str of record) {
    const [action, uid, nick] = str.split(' ');
    if (action === 'Enter' || action === 'Leave') {
      actions.push([action, uid]);
    }
    if (action === 'Enter' || action === 'Change') {
      userInfo[uid] = nick;
    }
  }

  return actions.map(([action, uid]) => `${userInfo[uid]}${messages[action]}`);
}

console.log(
  solution([
    'Enter uid1234 Muzi',
    'Enter uid4567 Prodo',
    'Leave uid1234',
    'Enter uid1234 Prodo',
    'Change uid4567 Ryan',
  ])
); // ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]
