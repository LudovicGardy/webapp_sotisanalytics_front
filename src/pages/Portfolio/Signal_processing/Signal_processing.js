import React, { useState, useEffect, useRef } from "react";
import { FaQuoteLeft } from 'react-icons/fa';
import Footer from "../../../components/Footer/Footer";
import Partners from "../../Home/Scrolling_banner_section";

import "../../../App.css";
import "../Portfolio.css";

import Modal_component from "../../../components/Modal_component";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { faSliders } from '@fortawesome/free-solid-svg-icons';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';

function Signal_Processing() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openModal = (imgSrc) => {
    setCurrentImage(imgSrc);
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  return (
    <>
    <div className="services-container">

        <div className="services-banner">
            <img src="/images/LG_banners/signal_processing/format_L.jpg"></img>
            <h1 className= "banners-title">SIGNAL PROCESSING</h1>
        </div>

        <div className="services-quote-text">
                <figure className="services-figure">
                    <blockquote className="blockquote text-italic">
                      <p>The world, whether it's audio, whether it's video, whether it's data coming from some source, is analog. 
                        It's continuous time, it's continuous space, it's continuous amplitude. Signal processing serves as a vital bridge between 
                        the continuous analog world and our digital systems, enabling us to interpret, analyze, 
                        and manipulate these signals into a form that our systems can comprehend and utilize.</p>
                        <figcaption className="figcaption">
                          <span>Alan V. Oppenheim</span>
                      </figcaption>
                    </blockquote>
                </figure>
          </div>

        <div className="services-transition">
          <p>Many of the projects I have worked on in recent years have involved signal processing, especially time series and 3D medical images.
            Whether audio, EEG, EMG, waves, vibrations, stock market or financial curves, analysis of 
            these signals requires very specific techniques to clean them up, normalize them, transform them and derive insights from them.
          </p>
        </div>

          <div className="services-start">
            <h3>Examples of publicly shareable projects I had the opportunity to work on</h3>
          </div>

        <div className="services-content services-content-first reverse-flex-col">
          <div className="services-content-img" onClick={() => openModal("/images/LG_services/signal_processing/FR_detection.jpg")}>
            <img src="/images/LG_services/signal_processing/FR_detection.jpg"></img>
          </div>
          <div className="services-content-text">
            <div className="services-content-left-title-wrapper">
              <h4 className="services-content-left-title">Micro-Oscillations Extraction from EEG Signals</h4>
              <p className="news-text"><FontAwesomeIcon icon={faCalendarCheck} title="Problem or requet" className="services-icon subtitle-icons"/> 2018-2023</p>
            </div>
            <ul className="services-content-ul">
              <li><FontAwesomeIcon icon={faPersonCircleQuestion} title="Problem or requet" className="services-icon"/> 
              Isolation of micro-oscillations from raw, complex intracerebral EEG data. Designed and executed a process pipeline for extraction, transformation and classification.</li>
              <li><FontAwesomeIcon icon={faScrewdriverWrench} title="Tools" className="services-icon"/>
              Python · proprietary big data formats (edf, nsX, nrd, ncs, med) · JSON.</li>
              <li><FontAwesomeIcon icon={faSliders} title="Methods" className="services-icon"/>
              Applied signal processing techniques such as normalization, filtering, wavelet transform, time-frequency analysis, 2D and 3D matrices convolution.</li>
              <li><FontAwesomeIcon icon={faHandshake} title="Delivered to (organization)" className="services-icon"/>
              Executed project deliverables for CNRS, Civil Aviation Computing Department, and Purpan Hospital of Toulouse.</li>
              <li><FontAwesomeIcon icon={faCircleInfo} title="Additional info." className="services-icon"/>
              Part of a 5-year project. A full <a target="_blank" href="https://www.theses.fr/2021TOU30190">scientific report</a> has been published.</li>
            </ul>
          </div>
        </div>

        <div className="services-content">
          <div className="services-content-text">
            <div className="services-content-left-title-wrapper">
              <h4 className="services-content-left-title">Creation of Referential Delineated Colormaps</h4>
              <p className="news-text"><FontAwesomeIcon icon={faCalendarCheck} title="Problem or requet" className="services-icon subtitle-icons"/> 2022</p>
            </div>
            <ul className="services-content-ul">
              <li><FontAwesomeIcon icon={faPersonCircleQuestion} title="Problem or requet" className="services-icon"/> 
              Designed a method to improve the visualization of spectral power in scralograms for large-scale comparisons and interpretations.</li>
              <li><FontAwesomeIcon icon={faScrewdriverWrench} title="Tools" className="services-icon"/>
              Python · proprietary big data formats (edf, nsX, nrd, ncs, med) · open source formats (dat) · JSON.</li>
              <li><FontAwesomeIcon icon={faSliders} title="Methods" className="services-icon"/>
              Utilized wavelet transform, 2D convolution, heatmaps and other pixel-based methods.</li>
              <li><FontAwesomeIcon icon={faHandshake} title="Delivered to (organization)" className="services-icon"/>
              Executed project deliverables for CNRS.</li>
              <li><FontAwesomeIcon icon={faCircleInfo} title="Additional info." className="services-icon"/>
              Part of a 18-month project. A <a target="_blank" href="https://github.com/LudovicGardy/Custom_colormaps/blob/master/custom_colormaps.ipynb">public repository</a> is available on github.</li>
            </ul>
          </div>
          <div className="services-content-img" onClick={() => openModal("/images/LG_services/signal_processing/HaReBaD.jpg")}>
            <img src="/images/LG_services/signal_processing/HaReBaD.jpg"></img>
          </div>
        </div>

        <div className="services-content reverse-flex-col">
          <div className="services-content-img" onClick={() => openModal("/images/LG_services/signal_processing/MRI.jpg")}>
            <img src="/images/LG_services/signal_processing/MRI.jpg"></img>
          </div>
          <div className="services-content-text">
            <div className="services-content-left-title-wrapper">
              <h4 className="services-content-left-title">3D Medical Images Visualization</h4>
              <p className="news-text"><FontAwesomeIcon icon={faCalendarCheck} title="Problem or requet" className="services-icon subtitle-icons"/> 2019</p>
            </div>
            <ul className="services-content-ul">
              <li><FontAwesomeIcon icon={faPersonCircleQuestion} title="Problem or requet" className="services-icon"/>
              Visualization enhancement of 3D brain images for localization of cortical areas, using convolution and threshold methods.</li>
              <li><FontAwesomeIcon icon={faScrewdriverWrench} title="Tools" className="services-icon"/>
              Python · proprietary and open source formats (DICOM, NIfTI) ·  Docker · JSON.</li>
              <li><FontAwesomeIcon icon={faSliders} title="Methods" className="services-icon"/>
              Converted, aligned and restructured MRI brain images. Designed 3D architecture for navigation and 2D kernels for image enhancement.</li>
              <li><FontAwesomeIcon icon={faHandshake} title="Delivered to (organization)" className="services-icon"/>
              Executed project deliverables for CNRS.</li>
              <li><FontAwesomeIcon icon={faCircleInfo} title="Additional info." className="services-icon"/>
              A mission that was spread over time. A version of this tool is available in a <a target="_blank" href="https://github.com/LudovicGardy/Halyzia_MRI_visualization">public repository</a> on github.</li>
            </ul>
          </div>
        </div>

        <div className="services-content">
          <div className="services-content-text">
            <div className="services-content-left-title-wrapper">
              <h4 className="services-content-left-title">Convolutional Kernel Density Estimation (CKDE)</h4>
              <p className="news-text"><FontAwesomeIcon icon={faCalendarCheck} title="Problem or requet" className="services-icon subtitle-icons"/> 2018</p>
            </div>
            <ul className="services-content-ul">
              <li><FontAwesomeIcon icon={faPersonCircleQuestion} title="Problem or requet" className="services-icon"/>
              Automation of epileptic spikes detection in intracerebral EEG data.</li>
              <li><FontAwesomeIcon icon={faScrewdriverWrench} title="Tools" className="services-icon"/>
              Python · proprietary big data formats (edf, nsX, nrd, ncs, med) · open source formats (dat) ·  Docker · JSON.</li>
              <li><FontAwesomeIcon icon={faSliders} title="Methods" className="services-icon"/>
              Applied time series and image processing, pixel-based analyses, 2D convolution, image resampling, thresholding and filtering.</li>
              <li><FontAwesomeIcon icon={faHandshake} title="Delivered to (organization)" className="services-icon"/>
              Executed project deliverables for CNRS, and Civil Aviation Computing Department.</li>
              <li><FontAwesomeIcon icon={faCircleInfo} title="Additional info." className="services-icon"/>
              A 6-month project leading to the publication of a <a target="_blank" href="https://hal-enac.archives-ouvertes.fr/hal-02555030/">scientific paper</a>. The corresponding <a target="_blank" href="https://enac.hal.science/hal-02396485/document">poster</a> was presented at several international conferences.</li>
            </ul>
          </div>
          <div className="services-content-img" onClick={() => openModal("/images/LG_services/signal_processing/CKDE.jpg")}>
            <img src="/images/LG_services/signal_processing/CKDE.jpg"></img>
          </div>
        </div>

        <div className="services-content reverse-flex-col">
          <div className="services-content-img" onClick={() => openModal("/images/LG_services/signal_processing/imVSperc.jpg")}>
            <img src="/images/LG_services/signal_processing/imVSperc.jpg"></img>
          </div>
          <div className="services-content-text">
            <div className="services-content-left-title-wrapper">
              <h4 className="services-content-left-title">Evoked Related Potentials Analysis</h4>
              <p className="news-text"><FontAwesomeIcon icon={faCalendarCheck} title="Problem or requet" className="services-icon subtitle-icons"/> 2017</p>
            </div>
            <ul className="services-content-ul">
              <li><FontAwesomeIcon icon={faPersonCircleQuestion} title="Problem or requet" className="services-icon"/>
              Summarization of brain activity during a behavioral task.</li>
              <li><FontAwesomeIcon icon={faScrewdriverWrench} title="Tools" className="services-icon"/>
              Python · Tkinter · Qt · proprietary big data formats (edf, nsX, nrd, ncs, med) · open source formats (dat) · Docker · JSON.</li>
              <li><FontAwesomeIcon icon={faSliders} title="Methods" className="services-icon"/>
              Conducted data collection | cleaning | filtering | averaging | segmentation, UI/UX for local app design, multimodality comparisons.</li>
              <li><FontAwesomeIcon icon={faHandshake} title="Delivered to (organization)" className="services-icon"/>
              Executed project deliverables for CNRS.</li>
              <li><FontAwesomeIcon icon={faCircleInfo} title="Additional info." className="services-icon"/>
              Part of a 7-month project that also involved statistical analyses for plotting and comparing traces from multiple conditions.</li>
            </ul>
          </div>
        </div>

        <div className="services-content">
          <div className="services-content-text">
            <div className="services-content-left-title-wrapper">
              <h4 className="services-content-left-title">Single Neuron Activity Extraction</h4>
              <p className="news-text"><FontAwesomeIcon icon={faCalendarCheck} title="Problem or requet" className="services-icon subtitle-icons"/> 2017</p>
            </div>
            <ul className="services-content-ul">
              <li><FontAwesomeIcon icon={faPersonCircleQuestion} title="Problem or requet" className="services-icon"/>
              Extraction of neuronal activity from intracerebral EEG data using a new technology of micro-electrodes.</li>
              <li><FontAwesomeIcon icon={faScrewdriverWrench} title="Tools" className="services-icon"/>
              Matlab · Python · Spyking Circus · proprietary big data formats (edf, nsX, nrd, ncs, med) · open source formats (dat) · JSON.</li>
              <li><FontAwesomeIcon icon={faSliders} title="Methods" className="services-icon"/>
              Conducted big data collection, cleaning and engineering, UI/UX for local app design, multivariate statistical analyses.</li>
              <li><FontAwesomeIcon icon={faHandshake} title="Delivered to (organization)" className="services-icon"/>
              Executed project deliverables for CNRS.</li>
              <li><FontAwesomeIcon icon={faCircleInfo} title="Additional info." className="services-icon"/>
              Part of a 5-month project that also involved statistical analyses for plotting and comparing neuronal activities across multiple conditions.</li>
            </ul>
          </div>
          <div className="services-content-img" onClick={() => openModal("/images/LG_services/signal_processing/neuronal_activity.jpg")}>
            <img src="/images/LG_services/signal_processing/neuronal_activity.jpg"></img>
          </div>
        </div>



      {/* <div className="services-ending">
        <h4>And many more.</h4>
      </div> */}

      </div>

      <Modal_component 
          isModalOpen={isModalOpen} 
          closeModal={closeModal} 
          currentImage={currentImage} 
      />

      {/* <Partners/> */}
      <Footer/>

    </>
  );
}

export default Signal_Processing;
