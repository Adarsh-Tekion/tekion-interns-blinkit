import React from 'react'
import './footer.Module.css';
import { FooterDownloadSource } from './molecules/footerDownloadSource';
import { FooterSocialMedia } from './molecules/footerSocialMedia';
import { FooterCopyRight } from './constants/footer.allconstants';
export default function Footer() {
  return (
    <footer className="flex align-center justify-center">
      <p className="flex">{FooterCopyRight}</p>
      <FooterDownloadSource />
      <FooterSocialMedia />
    </footer>
  )
}
