import { useSelector } from "react-redux";

function PlatformSelector({ value, onChange }) {
  const platforms = useSelector(
    (state) => state.platforms.platforms
  );

  return (
    <select value={value} onChange={onChange}>
      {platforms.map((platform, index) => (
        <option key={index} value={platform}>
          {platform}
        </option>
      ))}
    </select>
  );
}

export default PlatformSelector;
