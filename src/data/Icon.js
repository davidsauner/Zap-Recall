import error from "../assets/img/icone_erro.png";
import half from "../assets/img/icone_quase.png";
import zap from "../assets/img/icone_certo.png";
import seta from "../assets/img/seta_play.png";
export default function Icon({ status }) {
  return (
    <>
      {status === "error" && (
        <img src={error} alt={error} data-test="no-icon" />
      )}
      {status === "half" && (
        <img src={half} alt={half} data-test="partial-icon" />
      )}
      {status === "zap" && <img src={zap} alt={zap} data-test="zap-icon" />}
      {status === "none" && <img src={seta} alt={seta} data-test="play-btn" />}
    </>
  );
}
