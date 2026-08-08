function addTodo() {
  const input = document.getElementById('input');
  const list = document.getElementById('list');

  if (input.value === '') return;

  const li = document.createElement('li');

  // テキスト部分
  const span = document.createElement('span');
  span.textContent = input.value;

  // クリックで完了（取り消し線）
  span.onclick = function() {
    span.style.textDecoration =
      span.style.textDecoration === 'line-through' ? 'none' : 'line-through';
  };

  // 削除ボタン
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '削除';
  deleteBtn.onclick = function() {
    list.removeChild(li);
  };

  li.appendChild(span);
  li.appendChild(deleteBtn);
  list.appendChild(li);

  input.value = '';
}