import PropTypes from "prop-types";

// Screenshot of a style's official template demo, framed like a browser window.
const StylePreview = ({ style, eager = false }) => (
  <div className="w-full h-full rounded-[12px] overflow-hidden shadow-soft flex flex-col bg-white">
    <div className="h-[26px] shrink-0 flex items-center gap-[5px] px-3 bg-[#EDEAE3] border-b border-line" aria-hidden="true">
      <span className="w-[7px] h-[7px] rounded-full bg-[#D8D3C8]" />
      <span className="w-[7px] h-[7px] rounded-full bg-[#D8D3C8]" />
      <span className="w-[7px] h-[7px] rounded-full bg-[#D8D3C8]" />
      <span className="ml-3 h-[16px] max-w-[60%] rounded-full bg-[#F7F4EE] px-3 flex items-center text-[10px] text-stone truncate">
        {style.provider} · {style.templateName}
      </span>
    </div>
    <div className="relative flex-1 min-h-0 bg-paper">
      <img
        src={`${import.meta.env.BASE_URL}${style.previewImage}`}
        alt={`Αρχική σελίδα του template ${style.provider} ${style.templateName}`}
        width={1200}
        height={900}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
    </div>
  </div>
);

StylePreview.propTypes = {
  style: PropTypes.shape({
    provider: PropTypes.string.isRequired,
    templateName: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
  }).isRequired,
  eager: PropTypes.bool,
};

export default StylePreview;
