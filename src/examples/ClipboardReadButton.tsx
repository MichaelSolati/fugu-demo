export default function ClipboardReadButton() {
  const onClick = async () => {
    const text = await navigator.clipboard.readText();
    alert(text);
  };

  return <button onClick={onClick}>Click me to see what's in your clipboard</button>;
}
