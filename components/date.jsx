export default function _Date({ date }) {
  return (
    <div>
      {new Date(date).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })}
    </div>
  );
}
