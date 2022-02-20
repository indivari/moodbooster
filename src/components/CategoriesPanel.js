import React, { useEffect, useState } from "react";

import axios from "axios";
import styled from "styled-components";
import { FiTag } from "react-icons/fi";
import { SectionHeader } from "./SectionHeader";

const Container = styled.div`
  width: 180px;
  padding: 20px;
`;

const Li = styled.li`
  display: block;
  margin: 8px 0;
`;

const TagList = styled.ul`
  list-style: none;
  text-align: left;
  text-transform: capitalize;
  margin: 20px 0;
  padding: 0;
`;

export const TagLineItem = ({ tag }) => {
  return (
    <Li>
      <FiTag /> {tag}
    </Li>
  );
};

export const CategoriesPanel = () => {
  const [tags, setTags] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/tags/list").then((res) => {
      console.log("quotes response", res.data);
      setTags(res.data);
    });
  }, []);

  return (
    <Container>
      <SectionHeader>Tags</SectionHeader>
      <TagList>
        {tags.map((t) => (
          <TagLineItem tag={t} />
        ))}
      </TagList>
    </Container>
  );
};
