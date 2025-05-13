import React from "react";
import Profile from "./Parallax_profile";
import "./Parallax_section.css";

function Parallax() {
  return (

    <div className="parallax">

        <div className="parallax-inner">

            {/* <Fade duration={2000}> */}
            <div className="container-box-parallax">

                <Profile />

                <div className="horizontal-box-parallax">

                    <div className="vertical-box-parallax v-box-par-txt">

                        <div className="text-box-parralax"> 

                            <div className="text-item-parallax">

                                <div className="text-little-box-parallax">
                                    <h4>Languages and Frameworks</h4>
                                    <ul>
                                        <li><span>Programming languages:</span> Python, R, Matlab</li>
                                        <li><span>Web Backend Frameworks:</span> Flask, FastAPI, Django</li>
                                        <li><span>Web Frontend Frameworks:</span> React, NodeJS</li>
                                        <li><span>Basic web technologies:</span> HTML, CSS, JavaScript</li>
                                        <li><span>Documentation technologies:</span> LaTeX, Markdown, YAML, XML</li>
                                    </ul>
                                </div>

                                <div className="text-little-box-parallax">
                                    <h4>Database Management and Data Handling</h4>
                                    <ul>
                                        <li><span>Relational Databases:</span> PostgreSQL, MySQL, Pymssql, BigQuery, Azure SQL</li>
                                        <li><span>NoSQL Databases:</span> MongoDB, Redis</li>
                                        <li><span>Database Management Tools:</span> SQLAlchemy, pgAdmin</li>
                                        <li><span>Data Storage Solutions:</span> Data lakes, Data warehouses, Dynamic databases</li>
                                        <li><span>Data Transformation:</span> Databricks, Snowflake, DBT</li>
                                    </ul>
                                </div>

                                <div className="text-little-box-parallax">
                                    <h4>Artificial Intelligence and MLOps</h4>
                                    <ul>
                                        <li><span>Classical algorithms:</span> Linear Regression, Logistic Regression, Decision Trees, Support Vector Machines (SVM), K-Nearest Neighbors (KNN), K-means</li>
                                        <li><span>Ensemble methods:</span> Bagging (e.g., Random Forest), Boosting (e.g., Gradient Boosting, CatBoost, XGBoost, LightGBM)</li>
                                        <li><span>Dimensionality reduction:</span> Principal Component Analysis (PCA), t-SNE</li>
                                        <li><span>Deep Learning:</span> Embeddings, Convolutional Neural Networks (CNN), Transfer Learning</li>
                                        <li><span>Applications:</span> Natural Language Processing (NLP), Computer Vision, Large Language Models (LLMs)</li>
                                        <li><span>NLP Integration and Models:</span> OpenAI, LangChain, Llama 2</li>
                                        <li><span>Model Deployment and Serving:</span> TensorFlow, MLflow, TorchServe</li>
                                        <li><span>Experiment Tracking and Versioning:</span> MLflow, DVC (Data Version Control)</li>
                                        <li><span>Model Monitoring and Management:</span> Prometheus, Grafana, Evidently AI</li>
                                        <li><span>Workflow Orchestration and Automation:</span> GitHub Actions, Jenkins, Apache Airflow</li>
                                        <li><span>Data & ML Platforms:</span> Databricks, Azure</li>
                                    </ul>
                                </div>


                                <div className="text-little-box-parallax">
                                    <h4>Development and DevOps</h4>
                                    <ul>
                                        <li><span>Version Control and CI/CD:</span> Github, Gitlab</li>
                                        <li><span>Containerization and Orchestration:</span> Docker</li>
                                        <li><span>Cloud Platforms:</span> Azure, AWS, GCP</li>
                                    </ul>
                                </div>

                                <div className="text-little-box-parallax">
                                    <h4>Additional Tools and Technologies</h4>
                                    <ul>
                                        <li><span>Data extraction:</span> Web scraping, Document parsing</li>
                                        <li><span>Big Data Management:</span> Spark, HDFS, Databricks</li>
                                        <li><span>Real-Time Data Processing & Apps:</span> Streamlit</li>
                                    </ul>
                                </div>

                            </div>
        
                        </div>

                    </div>
                </div>
        
            </div>
            {/* </Fade> */}

        </div>
    </div>

  );
}

export default Parallax;
