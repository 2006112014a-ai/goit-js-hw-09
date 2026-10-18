const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

const formState = {
  email: '',
  message: '',
};

// Восстанавливаем сохранённые данные при загрузке страницы
const savedData = localStorage.getItem(STORAGE_KEY);

if (savedData) {
  try {
    const parsedData = JSON.parse(savedData);

    formState.email =
      typeof parsedData.email === 'string' ? parsedData.email : '';
    formState.message =
      typeof parsedData.message === 'string' ? parsedData.message : '';

    form.elements.email.value = formState.email;
    form.elements.message.value = formState.message;
  } catch {
    localStorage.removeItem(STORAGE_KEY);
  }
}

// Сохраняем значения при вводе
form.addEventListener('input', event => {
  const fieldName = event.target.name;

  if (fieldName === 'email' || fieldName === 'message') {
    formState[fieldName] = event.target.value.trim();

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formState));
  }
});

// Обрабатываем отправку формы
form.addEventListener('submit', event => {
  event.preventDefault();

  formState.email = form.elements.email.value.trim();
  formState.message = form.elements.message.value.trim();

  if (!formState.email || !formState.message) {
    alert('Fill please all fields');
    return;
  }

  console.log({ ...formState });

  localStorage.removeItem(STORAGE_KEY);

  formState.email = '';
  formState.message = '';

  form.reset();
});