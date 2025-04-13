import React, { useState } from "react";
import TestimonialsCarousel from "./Testimonials_carousel_item";
import Footer from "../../../components/Footer/Footer";

function Testimonials() {
    return (
        <>
        <div className="testimonials-container">
    
            <div className="services-banner testimonials-banner">
                <img src="/images/LG_banners/testimonials/format_L.jpg"></img>
                <h1 className= "banners-title">Testimonials</h1>
            </div>

            {/* <div className="testimonials-transition">
                <h1>Did we work together? Tell me what you think!</h1>
            </div>
            <div className="testimonials-content">
                <div className="testimonials-content-img">
                    <img src="/images/gardy_black_bg.jpg"></img>
                </div>
                <div className="services-quote-text testimonials-quote-text">
                    <figure className="services-figure figure-large">
                        <blockquote className="blockquote">
                            <p>What I like about my job is the diversity of applications and subjects I have the opportunity to deal with. 
                            Discovering new projects, new data and new questions is always exciting for me. </p>
                            <p>Beyond the technical aspect that drives me, I enjoy meeting the people, teams, experts and 
                            less-experts who trust me to help them with their projects, whatever their scope.</p>
                            <figcaption className="figcaption">
                                <span className="figcaption-span-services">Ludovic Gardy</span>
                            </figcaption>
                        </blockquote>
                    </figure>
                </div>
        </div> */}

        <TestimonialsCarousel/>

        <Footer/>
    
        {/* <div className="testimonials-ending">
            <h1>Communication and public relations</h1>
            <h3>Scientific articles</h3>
            <p>[In writting] <span>Gardy L.</span>, Curot J., Valton L., Berthier L., Barbeau E.J., Hurter C. <span>Halyzia: a CNN-based, computer-aided detection method of fast-ripples for both macro and micro electrodes in epilepsy.</span> publications planned for 2023.</p>
            <p>Benaiteau M., Valton L., <span>Gardy L.</span>, Denuelle M., Debs R., Wucher V., Rulquin F., Barbeau E.J., Bonneville F., Pariente J., Curot J. <span>Specific profiles of new-onset vs non-inaugural status epilepticus: From diagnosis to 1-year outcome.</span> Frontiers in Neurology, 14, 1101370, 2022.</p>
            <p>Joubert S., <span>Gardy L.</span>, Didic M., Rouleau I., Barbeau E.J. <span>A meta-analysis of semantic memory in prodromal Alzheimer’s Disease.</span> Neuropsychology Review, 31(2) : 221- 232, 2021.</p>
            <p><span>Gardy L.</span>, Barbeau E.J., Hurter C. <span>Automatic Detection of Epileptic Spikes in Intracerebral EEG with Convolutional Kernel Density Estimation.</span> Proceedings of the 15th International Joint Conference on Computer Vision, Imaging and Computer Graphics Theory and Applications - Volume 2 : HUCAPP, pages 101-109, 2020.</p>
            <p>Despouy E., Curot J., Deudon M., <span>Gardy L.</span>, Denuelle M., Sol J.C., Lotterie J.A., Valton L., Barbeau E.J. <span>A Fast Visual Recognition Memory System in Humans Identified Using Intracerebral ERP.</span> Cerebral cortex, 30(5) : 2961–2971, 2019.</p>

            <h3>Abstracts and posters</h3>
            <p>Calvat P., Barbeau E.J., Rheims S., Guenot M., Chatard B., De Barros A., <span>Gardy L.</span>, Lotterie J.A., Denuelle M., Valton L., Curot J. <span>Recording epileptic seizures at multiple scale with tetrodes - from large-scale networks to inframillimetric neuronal populations -.</span> European Congress of Clinical Neurophysiology. ECCN, Marseille, France. May 10-12, 2023.</p>
            <p>Calvat P., Barbeau E.J., Guenot M., Chatard B., De Barros A., <span>Gardy L.</span>, Lotterie J.A., Denuelle M., Valton L., Curot J. <span>Les crises épileptiques vues à des échelles multiples - des réseaux larges aux populations neuronales inframillimétriques - grâce à des tétrodes chez les patients épileptiques.</span> Journées Françaises de l'Epilepsie. JFE, Grenoble, France. May 7, 2022.</p>
            <p><span>Gardy L.</span>, Barbeau E.J., Hurter C. <span>Epileptic spikes detection and visualization in intracerebral EEG with Convolutional Kernel Density Estimation.</span> 4th International Conference on Human Computer Interaction Theory and Applications (HUCAPP), Malte, february 2020.</p>
            <p><span>Gardy L.</span>, Joubert S., Didic M., Rouleau I., Barbeau E.J. <span>Semantic memory in Alzheier's Disease.</span> Brain and Cognition, 137 :103642, 2019.</p>

            <h3>Patent and inventions</h3>
            <p>Halyzia algorithm &#169;: French patent FR3128111.</p>
            <p>Halyzia software &#169;: Program protection agency.</p>
            <p>Halyzia databases &#169;: Program protection agency.</p>

        </div> */}

        </div>
        
        </>
    );
    }

export default Testimonials;
