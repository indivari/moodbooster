import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import axios from "axios";
import styled from "styled-components";
import { FiTag } from "react-icons/fi";
import { SectionHeader } from "./SectionHeader";
import { QuotesContext } from "../QuotesContext";

const Container = styled.div`
  width: 200px;
  padding: 20px;
  flex-grow: 0;
  flex-shrink: 0;
`;

const Li = styled.li`
  margin: 4px 0;
  padding: 5px 10px;
  border-radius: 5px;
  display: inline-block;
  background-color: ${(props) => (props.current ? "#daa" : "transparent")};
  font-weight: ${(props) => (props.current ? "bold" : "normal")};
  line-height: 25px;
`;

const TagList = styled.ul`
  list-style: none;
  text-align: left;
  text-transform: capitalize;
  margin: 20px 0;
  padding: 0;
`;

export const TagLineItem = ({ tag, selected }) => {
  return (
    <Li current={selected}>
      <FiTag style={{}} />{" "}
      <Link
        to={`/tags/${tag}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        {tag}
      </Link>
    </Li>
  );
};

export const CategoriesPanel = () => {
  const [tags, setTags] = useState([]);
  const { filterQuotesByTag } = useContext(QuotesContext);
  const { tagId: selectedTag } = useParams();

  useEffect(() => {
    axios.get("http://localhost:8080/tags/list").then((res) => {
      console.log("quotes response", res.data);
      setTags(res.data);
    });
  }, []);

  useEffect(() => {
    filterQuotesByTag(selectedTag);
  }, [selectedTag, filterQuotesByTag]);

  return (
    <Container>
      <SectionHeader>Tags</SectionHeader>
      <TagList>
        {tags.map((t) => (
          <TagLineItem key={t} tag={t} selected={t === selectedTag} />
        ))}
      </TagList>
    </Container>
  );
};
