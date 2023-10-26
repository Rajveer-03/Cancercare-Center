import React from 'react'; 
import './main.css';
export default function CancerDetectionTool(){
    return (
        <div className = "container mt-5">
            <h1 className='text-center'>Cancer Detection Tool</h1>
            <div className = "col">

            <p>Cancer has been characterized as a heterogeneous disease consisting of many different subtypes. The early diagnosis and prognosis of a cancer type have become a necessity in cancer research, as it can facilitate the subsequent clinical management of patients. The importance of classifying cancer patients into high or low risk groups has led many research teams, from the biomedical and the bioinformatics field, to study the application of machine learning (ML) methods. Therefore, these techniques have been utilized as an aim to model the progression and treatment of cancerous conditions. In addition, the ability of ML tools to detect key features from complex datasets reveals their importance. A variety of these techniques, including Artificial Neural Networks (ANNs), Bayesian Networks (BNs), Support Vector Machines (SVMs) and Decision Trees (DTs) have been widely applied in cancer research for the development of predictive models, resulting in effective and accurate decision making. Even though it is evident that the use of ML methods can improve our understanding of cancer progression, an appropriate level of validation is needed in order for these methods to be considered in the everyday clinical practice. In this work, we present a review of recent ML approaches employed in the modeling of cancer progression. The predictive models discussed here are based on various supervised ML techniques as well as on different input features and data samples. Given the growing trend on the application of ML methods in cancer research, we present here the most recent publications that employ these techniques as an aim to model cancer risk or patient outcomes.</p>
            </div>
            <div>
                <img src="./cancer-detection.jpg" alt="Cancer Detection Image" />
            </div>
            <form className='container my-5 border border-5'>
                <div className = "box__input">
                    <br />
                    <input className = "box__file" type="file" name="files[]" id="file" data-multiple-caption="{count} files selected" multiple />
                    <br />
                    <br/>
                    <label HtmlFor = "file"><strong>Choose a file</strong><span className = "box__dragndrop"> or drag it here</span>.</label>
                    <br /><br />
                    <button className = "box__button btn btn-primary" type="submit">Upload</button>
                </div> 
            </form>
        </div>
    )
}