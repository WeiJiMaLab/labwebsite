import Link from "next/link";
import Layout from "../../components/layout";
import React, { Component } from "react";
import LinkButton from "../../components/linkbutton";
import { Button, Row, Col, Input } from "reactstrap";
import publicationslist from "../publications/publicationslist";
import ReactMarkdown from "react-markdown";

class Publications extends Component {
  constructor(props) {
    super(props);

    const publications = publicationslist;

    this.filters = [
      ...new Set(publications.flatMap((publication) => publication.tags))
    ];

    this.rename = {
      nyu: "NYU",
    };

    this.state = {
      events: publications,
      publications: publications,
      searchQuery: "",
      ...Object.fromEntries(this.filters.map((filter) => [filter, false])),
    };

    this.reset = this.reset.bind(this);
    this.refresh = this.refresh.bind(this);
    this.filterby = this.filterby.bind(this);
    this.makebuttons = this.makebuttons.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.formatPublication = this.formatPublication.bind(this);
  }

  refresh() {
    this.setState({
      events: this.state.publications.filter((publication) => {
        const allFiltersOff = this.filters.every(
          (filter) => !this.state[filter]
        );

        const matchesFilter = this.filters.some(
          (filter) => this.state[filter] && publication.tags.includes(filter)
        );

        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = publication.description;
        const textDescription = tempDiv.textContent || tempDiv.innerText || "";
        console.log(publication.description)
        console.log("Got here!")

        const matchesSearch =
          publication.title
            .toLowerCase()
            .includes(this.state.searchQuery.toLowerCase()) ||
          textDescription
            .toLowerCase()
            .includes(this.state.searchQuery.toLowerCase()) ||
          publication.tags.some((tag) =>
            tag.toLowerCase().includes(this.state.searchQuery.toLowerCase())
          );

        return (allFiltersOff || matchesFilter) && matchesSearch;
      }),
    });
  }

  filterby(filter) {
    this.setState(
      (prevState) => ({ [filter]: !prevState[filter] }),
      this.refresh
    );
  }

  reset() {
    this.setState(
      {
        searchQuery: "",
        ...Object.fromEntries(this.filters.map((filter) => [filter, false])),
      },
      this.refresh
    );
  }

  handleSearchChange(event) {
    this.setState({ searchQuery: event.target.value }, this.refresh);
  }

  makebuttons(filters) {
    return filters.map((filter) => (
      <Button
        key={filter}
        onClick={() => this.filterby(filter)}
        style={{
          backgroundColor: this.state[filter] ? "pink" : "black",
          margin: "2px",
        }}
      >
        {filter in this.rename ? this.rename[filter] : filter}
      </Button>
    ));
  }

  formatPublication(publication, index) {
    return (
      <div key={index} className="publication-item" style={{ marginLeft: "150px" }}>
      <h3>{publication.title}</h3>
      <p>
      {publication.authors.join("; ")}, {publication.year}
      <br />
      {publication.journal && <em>{publication.journal}</em>}
      {publication.info ? ", " + publication.info: ""}
      {publication.doi && (
        <>
        , DOI: <a href={`https://doi.org/${publication.doi}`}>{publication.doi}</a>
        </>
      )}
      </p>
      <div className="publication-links">
      {publication.links.map((link, linkIndex) => (
      <LinkButton key={linkIndex} text={link.text} href={link.url} />
      ))}
      </div>
      <div className="publication-description">
      <ReactMarkdown>{publication.description}</ReactMarkdown>
      </div>
      <p className="publication-tags">
      <b>Tags:</b> {publication.tags.filter((filter) => isNaN(filter)).sort().join(", ")}
      </p>
      <hr />
      </div>
    );
  }

  render() {
    const publicationsByYear = this.state.events.reduce((acc, publication) => {
      const year = publication.year;
      if (!acc[year]) {
      acc[year] = [];
      }
      acc[year].push(publication);
      return acc;
    }, {});

    return (
      <Layout>
      <div className="banner">
      <h1>
      <span>Publications</span>
      </h1>
      <Input
      type="text"
      placeholder="Search by title, description, or tags"
      value={this.state.searchQuery}
      onChange={this.handleSearchChange}
      style={{ marginBottom: "10px" }}
      />
      <div>
      <Button
        color="primary"
        onClick={() => this.setState({ dropdownOpen: !this.state.dropdownOpen })}
        style={{ marginBottom: "10px" }}
      >
        Filters
      </Button>
      {this.state.dropdownOpen && (
        <div className="filters-dropdown">
        <div>
        <strong>Filter by Type:</strong>
        <br />
        {this.makebuttons(["dissertation", "preprint", "publication"])}
        </div>
        <div>
        <strong>Filter by Year:</strong>
        <br />
        {this.makebuttons(
        this.filters.filter((filter) => !isNaN(filter)).sort().reverse()
        )}
        </div>
        <div>
        <strong>Filter by Topic:</strong>
        <br />
        {this.makebuttons(
        this.filters.filter((filter) => isNaN(filter)).sort()
        )}
        </div>
        <br />
        <Button onClick={this.reset}>Reset Filters</Button>
        </div>
      )}
      </div>
      <div className="publications-list">
      {Object.keys(publicationsByYear)
        .sort((a, b) => b - a)
        .map((year, index) => (
        <div key={year} className="year-section">
        <h2 className="sticky-year">{year}</h2>
        <hr style={{ height: 3 }} />
        {publicationsByYear[year].map(this.formatPublication)}
        </div>
        ))}
      </div>
      </div>
      <style jsx>{`
      .sticky-year {
      position: -webkit-sticky;
      position: sticky;
      top: 60px; /* Adjust this value based on the height of your menu */
      background: none;
      z-index: 1;
      padding-top: 10px;
      }
      `}</style>
      </Layout>
    );
  }
}

export default Publications;