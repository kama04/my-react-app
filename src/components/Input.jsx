// Для поля введення: placeholder (підказка) та type (тип поля,
// наприклад, text , password ).
// Для поля введення: onChange (обробник зміни значення).

export default function Input({ placeholder, type = "text", value, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
