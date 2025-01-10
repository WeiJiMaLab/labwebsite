import React from 'react';
import newsData from '../data/news.json';
import ReactMarkdown from 'react-markdown';
import { Row, Col } from 'reactstrap';

const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options).replace(',', '<br/>');
};

const News = () => {
    return (
        <div className='banner'>
            <h1>Lab News</h1>
            <div style={{ maxHeight: '400px', overflowY: 'scroll', padding: '10px', borderRadius: "30px", backgroundColor: "rgba(255, 255, 255, 0.5)"}}>
                {newsData.map((newsItem, index) => (
                    <div key={index} style={{ paddingLeft: '10%', paddingRight: '10%', marginBottom: '20px' }}>
                        <Row>
                            <Col xs="3">
                                <h3 dangerouslySetInnerHTML={{ __html: formatDate(newsItem.date) }}></h3>
                            </Col>
                            <Col xs="9">
                                <ReactMarkdown>{newsItem.text}</ReactMarkdown>
                            </Col>
                        </Row>
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default News;