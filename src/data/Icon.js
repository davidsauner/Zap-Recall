import error from "../assets/img/icone_erro.png"
import half from "../assets/img/icone_quase.png"
import zap from "../assets/img/icone_certo.png"
import seta from "../assets/img/seta_play.png"
export default function Icon({status}){
    return(
        <>
        {status === "error" && <img src={error} alt={error} />}
        {status === "half" && <img src={half} alt={half} />}
        {status === "zap" && <img src={zap} alt={zap} />}
        {status === "none" && <img src={seta} alt={seta} />}
        </>
        
    )
}