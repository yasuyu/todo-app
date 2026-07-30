function addTodo() {
  const input = document.getElementById('input');
  const list = document.getElementById('list');

  if (input.value === '') return;

  const li = document.createElement('li');
  li.textContent = input.value;

  // クリックで完了（取り消し線）
  li.onclick = function() {
    li.style.textDecoration =
      li.style.textDecoration === 'line-through' ? 'none' : 'line-through';
  };

  list.appendChild(li);
  input.value = '';
}