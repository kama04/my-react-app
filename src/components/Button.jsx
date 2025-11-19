// Для кнопки: text (текст кнопки) та type (тип кнопки, наприклад,button , submit ).
// Для кнопки: onClick (обробник кліку).

// Button.jsx
export default function Button({ text, type = "button", onClick }) {
  return (
    <button type={type} onClick={onClick}>
      {text}
    </button>
  );
}
