import React, { useState } from "react";
import Footer from "../../../components/Footer/Footer";

import "./History_page.css";
import styles from './History_page.module.css';

function HistoryPage() {

    const [showArticles, setShowArticles] = useState(false);
    const [showPosters, setShowPosters] = useState(false);
    const [showInventions, setShowInventions] = useState(false);

    return (
        <>
            <div className="about-container">

                <div className="services-banner">
                    <img src="/images/LG_banners/about/format_L.jpg"></img>
                    <h1 className="banners-title">ABOUT</h1>
                </div>

                <div className="testimonials-container">

                    {/* <div className="testimonials-transition">
                    <h1>Turning your data into a valuable product</h1>
                </div>
                <div className="testimonials-content reverse-flex-row">
                    <div className="testimonials-content-img">
                            <img src="/images/gardy_black_bg.jpg"></img>
                    </div>

                    <div className="services-quote-text testimonials-quote-text">
                        <figure className="services-figure figure-large">
                            <blockquote className="blockquote">
                                <p>In today's data-rich environment, extracting relevant, actionable information can 
                                    be challenging, regardless of whether the data is collected by established procedures 
                                    or by modern tools in a continuous stream. The goal is the same: to leverage this 
                                    wealth of information to propel your business. As an independent data scientist, 
                                    I transform your data into crucial insights, driving growth in your present 
                                    and future ventures.</p>

                                <figcaption className="figcaption">
                                    <span className="figcaption-span-services">Ludovic Gardy</span>
                                </figcaption>
                            </blockquote>
                        </figure>
                    </div>
                </div> */}

                </div>

                {/* #3c3c4b  #6e51a8 #e24A68 */}
                <div className="about-transition">
                    <h1 className={styles.timelineh1}>Brief history</h1>
                    <ul className={styles.myUl}>
                        <li className={styles.myLi} style={{ '--accent-color': '#6e51a8' }}>
                            <div className={styles.myDate}>June 2023</div>
                            <div className={styles.myTitle}>Founder of Sotis A.I.&#174;</div>

                            <div className={styles.myDescr}>Sotis AI® specializes in developping advanced data engineering pipelines
                                and artificial intelligence solutions that transform complex data into strategic insights for businesses.</div>
                        </li>
                        {/* <li className={styles.myLi} style={{'--accent-color': '#6e51a8'}}>
                        <div className={styles.myDate}>August 2023</div>
                        <div className={styles.myTitle}>Co-founder of Avrio MedTech&#174;</div>
                        <div className={styles.myDescr}>Co-founded <a target="_blank" href="https://avriomedtech.com/">Avrio MedTech®</a>, a deep-tech startup focused on improving the diagnosis of 
                        drug-resistant epilepsy through the use of Halyzia®.</div>
                    </li> */}
                        <li className={styles.myLi} style={{ '--accent-color': '#3c3c4b' }}>
                            <div className={styles.myDate}>December 2022</div>
                            <div className={styles.myTitle}>Award RISE, CNRS Innovation</div>
                            <div className={styles.myDescr}>I was rewarded for having developed a technological solution with strong industrial and valorization potential in the deeptech market.</div>
                            {/* using technologies developed in CNRS labs.</div> */}
                        </li>
                        <li className={styles.myLi} style={{ '--accent-color': '#e24A68' }}>
                            <div className={styles.myDate}>Oct. 2021 - June 2023</div>
                            <div className={styles.myTitle}>Research engineer, CNRS</div>
                            <div className={styles.myDescr}>Maturation and regulatory protection of the Ladybird/Halyzia® algorithm and software, developed during my thesis, with a view to its commercialization.</div>
                        </li>
                        <li className={styles.myLi} style={{ '--accent-color': '#6e51a8' }}>
                            <div className={styles.myDate}>November 2021</div>
                            <div className={styles.myTitle}>Award tech. pre-maturation</div>
                            <div className={styles.myDescr}>This prize allowed my team and me to finance the technological and business development of Ladybird/Halyzia®, diagnostic assistance technology, aiming its regulatory marking its marketing.</div>
                        </li>
                        <li className={styles.myLi} style={{ '--accent-color': '#3c3c4b' }}>
                            <div className={styles.myDate}>Oct. 2018 - Oct. 2021</div>
                            <div className={styles.myTitle}>PhD Neuroscience, AI specialization</div>
                            <div className={styles.myDescr}>Developed Ladybird/Halyzia®, an innovative deeptech solution for the automatic detection of pathological intracerebral oscillations in epilepsy using artificial neural networks.
                                My <a target="_blank" href="https://www.theses.fr/2021TOU30190">thesis manuscript</a> and
                                the <a target="_blank" href="https://data.inpi.fr/brevets/FR3128111">patent</a> are available online.</div>
                        </li>
                        <li className={styles.myLi} style={{ '--accent-color': '#e24A68' }}>
                            <div className={styles.myDate}>Oct. 2018- Oct. 2021</div>
                            <div className={styles.myTitle}>Part-time teacher</div>
                            <div className={styles.myDescr}>Taught statistics at the Paul Sabatier University of Toulouse,
                                and neurophysiology to orthoptists at the Medical School of Toulouse.</div>
                        </li>
                        <li className={styles.myLi} style={{ '--accent-color': '#6e51a8' }}>
                            <div className={styles.myDate}>March 2020</div>
                            <div className={styles.myTitle}>Award Innovation</div>
                            <div className={styles.myDescr}>The Prime Minister and BPI France rewarded me for the development of Ladybird/Halyzia® during my research work, a cutting-edge innovative technology supported by France Relance 2030.</div>
                        </li>
                        <li className={styles.myLi} style={{ '--accent-color': '#3c3c4b' }}>
                            <div className={styles.myDate}>October 2019</div>
                            <div className={styles.myTitle}>Award Science-to-Business</div>
                            <div className={styles.myDescr}>Received the Doc. d'Occitanie award, designed to support innovative research projects with high marketing potential.</div>
                        </li>
                        <li className={styles.myLi} style={{ '--accent-color': '#e24A68' }}>
                            <div className={styles.myDate}>Dec. 2017 - Oct. 2018</div>
                            <div className={styles.myTitle}>Big Data processing Engineer</div>
                            <div className={styles.myDescr}>Designed experimental protocols for studying human behavior | Developed data analysis tools | Managed massive data: billions of entries, terabytes, multi-dimensionality, infrastructure design and creation.</div>
                        </li>
                        <li className={styles.myLi} style={{ '--accent-color': '#6e51a8' }}>
                            <div className={styles.myDate}>June 2017 - June 2018</div>
                            <div className={styles.myTitle}>Scientific Coordinator</div>
                            <div className={styles.myDescr}>For the Brain Awareness Week national event. Design of themes and selection of more than 50 speakers | Negotiation with nearly 40 local partners | Supervision of several dozen volunteers |  34 workshops and conferences.</div>
                        </li>
                        <li className={styles.myLi} style={{ '--accent-color': '#3c3c4b' }}>
                            <div className={styles.myDate}>June 2017 - Dec. 2017</div>
                            <div className={styles.myTitle}>Data analysis Engineer assistant</div>
                            <div className={styles.myDescr}>Scaling and structuring data processing pipelines, databases and algorithms to study the cognitive decline over 20K parameters in 250 pré-Alzheimer patients. Subtle changes observed up to 12 years before diagnosis.</div>
                        </li>
                        <li className={styles.myLi} style={{ '--accent-color': '#e24A68' }}>
                            <div className={styles.myDate}>Nov. 2015- June 2017</div>
                            <div className={styles.myTitle}>Intern in AI and Big Data</div>
                            <div className={styles.myDescr}>Collection and cleaning of large quantities of medical data | Structuring of databases according to SQL standards to prepare for massive exploitation and the use of machine learning algorithms | Statistical analyses.</div>
                        </li>
                        <li className={styles.myLi} style={{ '--accent-color': '#6e51a8' }}>
                            <div className={styles.myDate}>Sept. 2015 - June 2017</div>
                            <div className={styles.myTitle}>MD Neurosciences, AI specialization </div>
                            <div className={styles.myDescr}>Paul Sabatier University and National School Aviation.</div>
                        </li>
                    </ul>
                </div>

                <div className="about_ending">
                    <h1>List of publications</h1>
                    <h3>Scientific articles</h3>
                    <button className="about_button" onClick={() => setShowArticles(!showArticles)}>
                        Show content
                    </button>
                    {showArticles && (
                        <div className="about_paragraph">
                            <p><span>Gardy L.</span>, Curot J., Valton L., Berthier L., Barbeau E.J., Hurter C.<span> Detecting fast-ripples on both macro and micro-electrodes in epilepsy: A wavelet-based CNN detector.</span> Journal of Neuroscience Methods, 415, 110350, 2025.</p>
                            <p>Hurter C., Rogowitz B., Truong G., Andry Y., Romat H., <span>Ludovic G.</span>, Amini F., Henry Riche N.<span> Memory Recall for Data Visualization in Mixed Reality, Virtual Reality, 3D and 2D.</span> IEEE Trans Vis Comput Graph. 30(10), 6691-6706, 2024.</p>
                            <p>Benaiteau M., Valton L., <span>Gardy L.</span>, Denuelle M., Debs R., Wucher V., Rulquin F., Barbeau E.J., Bonneville F., Pariente J., Curot J.<span> Specific profiles of new-onset vs non-inaugural status epilepticus: From diagnosis to 1-year outcome.</span> Frontiers in Neurology, 14, 1101370, 2022.</p>
                            <p><span>Gardy L.</span><span> Détection automatique multi-échelle et de grande envergure d'oscillations intracérébrales pathologiques dans l'épilepsie par réseaux de neurones artificiels.</span> theses.fr/ 2021TOU30190, 2021.</p>
                            <p>Joubert S., <span>Gardy L.</span>, Didic M., Rouleau I., Barbeau E.J.<span> A meta-analysis of semantic memory in prodromal Alzheimer’s Disease.</span> Neuropsychology Review, 31(2) : 221-232, 2021.</p>
                            <p><span>Gardy L.</span>, Barbeau E.J., Hurter C.<span> Automatic Detection of Epileptic Spikes in Intracerebral EEG with Convolutional Kernel Density Estimation.</span> Proceedings of the 15th International Joint Conference on Computer Vision, Imaging and Computer Graphics Theory and Applications - Volume 2 : HUCAPP, pages 101-109, 2020.</p>
                            <p>Despouy E., Curot J., Deudon M., <span>Gardy L.</span>, Denuelle M., Sol J.C., Lotterie J.A., Valton L., Barbeau E.J.<span> A Fast Visual Recognition Memory System in Humans Identified Using Intracerebral ERP.</span> Cerebral cortex, 30(5) : 2961–2971, 2019.</p>
                        </div>
                    )}

                    <h3>Scientific abstracts and posters</h3>
                    <button className="about_button" onClick={() => setShowPosters(!showPosters)}>
                        Show content
                    </button>
                    {showPosters && (
                        <div>
                            <p>Curot J., Marcy B., De Barros A., <span>Gardy L.</span>, Denuelle M., Lotterie J.A., Valton L., Barbeau E.J.<span>Are the Microelectrode HFOs and the Macroelectrode HFOs the Same Beast in Epilepsy?</span>American Epilepsy Society, 2024.</p>
                            <p>Calvat P., Barbeau E.J., Rheims S., Guenot M., Chatard B., De Barros A., <span>Gardy L.</span>, Lotterie J.A., Denuelle M., Valton L., Curot J. <span>Recording epileptic seizures at multiple scale with tetrodes - from large-scale networks to inframillimetric neuronal populations -.</span> European Congress of Clinical Neurophysiology. ECCN, Marseille, France. May 10-12, 2023.</p>
                            <p>Calvat P., Barbeau E.J., Guenot M., Chatard B., De Barros A., <span>Gardy L.</span>, Lotterie J.A., Denuelle M., Valton L., Curot J. <span>Les crises épileptiques vues à des échelles multiples - des réseaux larges aux populations neuronales inframillimétriques - grâce à des tétrodes chez les patients épileptiques.</span> Journées Françaises de l'Epilepsie. JFE, Grenoble, France. May 7, 2022.</p>
                            <p><span>Gardy L.</span>, Barbeau E.J., Hurter C. <span>Convolutional Kernel Density Estimation (CKDE), an innovative technic for the visualization of anomalies in time series.</span> 4th International Conference on Human Computer Interaction Theory and Applications (HUCAPP), Malte, february 2020.</p>
                            <p><span>Gardy L.</span>, Barbeau E.J., Hurter C. <span>Epileptic spikes detection and visualization in intracerebral EEG with Convolutional Kernel Density Estimation.</span> Workshop on Intracranial Recordings in humans : Epilepsy, DBS. WIRED, Paris, France. 19-20 novembre, 2019.</p>
                            <p><span>Gardy L.</span>, Joubert S., Didic M., Rouleau I., Barbeau E.J. <span>Semantic memory in Alzheier's Disease.</span> Brain and Cognition, 137 :103642, 2019.</p>
                        </div>
                    )}

                    <h3>Protected inventions</h3>
                    <button className="about_button" onClick={() => setShowInventions(!showInventions)}>
                        Show content
                    </button>
                    {showInventions && (
                        <div>
                            <p>Halyzia algorithm &#174;: French patent FR3128111.</p>
                            <p>Halyzia software &#174;: Program protection agency.</p>
                            <p>Halyzia databases &#174;: Program protection agency.</p>
                        </div>
                    )}

                </div>

            </div>

            <Footer />

        </>
    );
}

export default HistoryPage;
