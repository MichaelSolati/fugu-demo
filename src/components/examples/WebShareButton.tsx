export default function WebShareButton() {
  const onClick = async () => {
    if ("canShare" in navigator) {
      await navigator.share({
        url: window.location.origin,
      });
    } else {
      alert("navigator.canShare() not supported");
    }
  };

  return <button onClick={onClick}>Share this site!</button>;
}
