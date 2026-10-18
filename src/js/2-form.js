const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

const formData = {
  email: '',
  message: '',
};

// Восстанавливаем сохранённые данные при загрузке страницы
const savedData = localStorage.getItem(STORAGE_KEY);

if (savedData) {
  try {
    const parsedData = JSON.parse(savedData);

    formData.email =
      typeof parsedData.email === 'string' ? parsedData.email : '';
    formData.message =
      typeof parsedData.message === 'string' ? parsedData.message : '';

    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
  } catch {
    localStorage.removeItem(STORAGE_KEY);
  }
}

// Сохраняем значения при вводе
form.addEventListener('input', event => {
  const fieldName = event.target.name;

  if (fieldName === 'email' || fieldName === 'message') {
    formData[fieldName] = event.target.value.trim();

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }
});

// Обрабатываем отправку формы
form.addEventListener('submit', event => {
  event.preventDefault();

  formData.email = form.elements.email.value.trim();
  formData.message = form.elements.message.value.trim();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log({ ...formData });

  localStorage.removeItem(STORAGE_KEY);

  formData.email = '';
  formData.message = '';

  form.reset();
});