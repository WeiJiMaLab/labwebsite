import Link from "next/link";
import Layout from "./layout";
import React, { Component } from "react";
import LinkButton from "./linkbutton";
import { Button, Input } from "reactstrap";
import publicationslist from "../data/publications";
import ReactMarkdown from "react-markdown";

class PubsComponent extends Component {
    constructor(props) {
        super(props);

        const publications = publicationslist;

        this.state = {
            publications: publications,
            searchQuery: "",
        };

        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.formatPublication = this.formatPublication.bind(this);
    }

    handleSearchChange(event) {
        this.setState({ searchQuery: event.target.value });
    }

    formatPublication(publication, index) {
        return (
            <div
                key={index}
                className="publication-item"
                style={{ marginLeft: "50px" }}
            >
                <h3>{publication.title}</h3>
                <p style={{ margin: "0" }}>
                    {publication.authors.join(", ")}, {publication.year}
                    <br />
                    {publication.journal && <em>{publication.journal}</em>}
                    {publication.info ? ", " + publication.info : ""}
                    {publication.doi && (
                        <>
                            , DOI:{" "}
                            <a href={`https://doi.org/${publication.doi}`}>
                                {publication.doi}
                            </a>
                        </>
                    )}
                </p>
                {publication.links.map((link, linkIndex) => (
                    <LinkButton key={linkIndex} text={link.text} href={link.url} />
                ))}
                <p className="publication-tags">
                    <b>Tags:</b>{" "}
                    {publication.tags
                        .filter((filter) => isNaN(filter))
                        .sort()
                        .join(", ")}
                </p>
                <hr />
            </div>
        );
    }

    render() {
        const publicationsByYear = this.state.publications.reduce((acc, publication) => {
            const year = publication.year;
            if (!acc[year]) {
                acc[year] = [];
            }
            acc[year].push(publication);
            return acc;
        }, {});

        const newestPubsComponent = Object.keys(publicationsByYear)
            .sort((a, b) => b - a)
            .reduce((acc, year) => {
            return acc.concat(publicationsByYear[year]);
            }, [])
            .slice(0, 5);

        const filteredPublications = this.state.publications
            .filter((publication) => {
            const query = this.state.searchQuery.toLowerCase();
            return (
                publication.title.toLowerCase().includes(query) ||
                publication.authors.some((author) =>
                author.toLowerCase().includes(query)
                ) ||
                publication.tags.some((tag) => tag.toLowerCase().includes(query))
            );
            })
            .sort((a, b) => b.year - a.year)
            .slice(0, 5);

        return (
            <div className="banner">
            <h1>
                Recent Publications
            </h1>
            <Input
                type="text"
                placeholder="Search by title, authors, or tags"
                value={this.state.searchQuery}
                onChange={this.handleSearchChange}
                style={{ marginBottom: "10px" }}
            />
            <LinkButton text="View all publications" href="/research/publications" />

            <div className="publications-list">
                {filteredPublications.map(this.formatPublication)}
            </div>
            </div>
        );
    }
}

export default PubsComponent;
