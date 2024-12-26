document.getElementById('repairForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Отменяем стандартное поведение формы

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const printerModel = document.getElementById('printerModel').value;
  const issue = document.getElementById('issue').value;

  // Отправка данных на сервер
  fetch('/submit-repair-request', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      email,
      printerModel,
      issue
    })
  })
    .then(response => response.json())
    .then(data => {
      console.log(data); // Выводим данные из ответа
      document.getElementById('responseMessage').textContent = data.message;
    })
    .catch(error => {
      console.error('Error:', error); // Выводим ошибку в консоль
      document.getElementById('responseMessage').textContent = 'Произошла ошибка при отправке запроса.';
    });
});
