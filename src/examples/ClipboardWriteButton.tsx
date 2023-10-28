export default function ClipboardWriteButton() {
  const onClick = async () => {
    await navigator.clipboard.writeText(new Date().toDateString());
  };

  return <button onClick={onClick}>Click me to copy date</button>;
}
