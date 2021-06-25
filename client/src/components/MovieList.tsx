import React, { FC, useState, FormEvent } from "react";import React from "react";

type Props = {
  title: string;
}

const MovieList: React.FC<Props> = ({ children, title }) => (
  <div>
    <p>Gozilla.</p>
  </div>
);
  
export default MovieList;