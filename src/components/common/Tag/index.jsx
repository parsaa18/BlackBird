import MagneticButton from "../magneticButton";

const Tag = ({
  name,
  width = "100px",
  height = "40px",
  padding,
  fontSize = "0.875rem",
}) => {
  return (
    <MagneticButton
      width={padding ? "auto" : width}
      height={padding ? "auto" : height}
      mag={false}
      bg="transparent"
    >
      <div
        style={{
          width: padding ? "auto" : width,
          height: padding ? "auto" : height,
          padding: padding,
          fontSize: fontSize,
        }}
        className=" rounded-3xl flex items-center justify-center   font-light hover:text-white text-metricBlack transition-colors duration-700 "
      >
        {name}
      </div>
    </MagneticButton>
  );
};
export default Tag;
