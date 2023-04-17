import playstoreImg from '../../../../images/playstore.png';
import appstoreImg from '../../../../images/appstore.png';
import { DownloadApp } from '../../constants/footer.allconstants';
export default function FooterDownloadSource() {
    return (
        <div className="footer-download-source flex">
            <p className="download-text flex">{DownloadApp}</p>
            <div className="footer-store-img flex justify-center align-center">
                <img src={playstoreImg} alt="play store image" />
                <img src={appstoreImg} alt="apple store image" />
            </div>
        </div>

    )
}