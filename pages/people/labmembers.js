import React, { useState } from 'react';
import Layout from "../../components/layout";
import { currentLabMembers, 
    currentAlumniCollaborators, 
    currentExternalCollaborators, 
    pastLabMembers, 
    pastCollaborators, 
    mapStatus,
    } from "../../data/people";
import LinkButton from "../../components/linkbutton";
import { Row, Col, Input } from 'reactstrap';
import publicationlist from "../../data/publications";
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

function formatPeople(person, index) {
    return (
        <Row key={index} className="person-card" style={{ alignItems: 'flex-start', marginBottom: '20px' }}>
            <Col xs={3}>
                {person.image ? (
                    <div style={{ 
                    width: '100%', 
                    paddingTop: '100%', 
                    position: 'relative', 
                    overflow: 'hidden', 
                    borderRadius: '50%', 
                    float: 'left',
                    }}>
                        <Image 
                            src={person.image} 
                            alt={`${person.firstname} ${person.lastname}`} 
                            layout="fill" 
                            objectFit="cover" 
                        />
                    </div>
                ) : <></>}
            </Col>
            <Col xs={9} className="person-info">
                <div>
                <h3>{`${person.firstname} ${person.lastname}`}, {mapStatus(person)}</h3>
                {person.email && <LinkButton text={person.email} href={`mailto:${person.email}`} target="_top"/>}
                {person.googleScholar && <LinkButton text="Google Scholar" href={person.googleScholar} />}
                {person.neurotree && <LinkButton text="Neurotree" href={person.neurotree} />}
                {person.website && <LinkButton text="Website" href={person.website} />}
                {person.github && <LinkButton text="GitHub" href={person.github} />}
                {person.twitter && <LinkButton text="Twitter" href={person.twitter} />}
                {person.linkedin && <LinkButton text="LinkedIn" href={person.linkedin} />}
                
                {person.links && person.links.map((link, linkIndex) => (
                    <LinkButton key={linkIndex} text={link.text} href={link.url} />
                ))}
                
                <ReactMarkdown>{person.bio}</ReactMarkdown>
                </div>
            </Col>
        </Row>
    );
}

export default function People() {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
    };

    const filterPeople = (people) => {
    return people.filter(person => 
        `${person.firstname} ${person.lastname}`.toLowerCase().includes(searchQuery) ||
        person.firstname.toLowerCase().includes(searchQuery) ||
        person.lastname.toLowerCase().includes(searchQuery)
    );
    };

    return (
    <Layout>
        <section id="people">
        <div className="banner people-list">
            <h1>
            <span>People</span>
            </h1>
            <Input 
            type="text" 
            placeholder="Search by name..." 
            value={searchQuery} 
            onChange={handleSearch} 
            style={{ marginBottom: '20px' }}
            />
            <h2 style={{ position: 'sticky', top: '0px', backgroundColor: 'white', zIndex: 1000 }}>Lab Members</h2>
            {filterPeople(currentLabMembers).map((person, index) => formatPeople(person, index))}
            
            <h2 style={{ position: 'sticky', top: '0px', backgroundColor: 'white', zIndex: 1000 }}>Alumni Collaborators</h2>
            {filterPeople(currentAlumniCollaborators).map((person, index) => formatPeople(person, index))}
            
            <h2 style={{ position: 'sticky', top: '0px', backgroundColor: 'white', zIndex: 1000 }}>External Collaborators</h2>
            {filterPeople(currentExternalCollaborators).map((person, index) => formatPeople(person, index))}
            
            <h2 style={{ position: 'sticky', top: '0px', backgroundColor: 'white', zIndex: 1000 }}>Past Lab Members</h2>
            {filterPeople(pastLabMembers).map((person, index) => formatPeople(person, index))}
            
            <h2 style={{ position: 'sticky', top: '0px', backgroundColor: 'white', zIndex: 1000 }}>Past Collaborators</h2>
            {filterPeople(pastCollaborators).map((person, index) => formatPeople(person, index))}
        </div>
        </section>
    </Layout>
    );
}
