function addTodo() {
  const input = document.getElementById('input');
  const list = document.getElementById('list');

  if (input.value === '') return;

  const li = document.createElement('li');
  li.textContent = input.value;
  list.appendChild(li);

  input.value = '';
}