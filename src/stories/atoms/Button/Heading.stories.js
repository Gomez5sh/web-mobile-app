/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Heading from "../../../components/atomic/atoms/Heading/index";

export default {
  title: "Atoms/Heading",
  component: Heading,
};

//default
export const Default = () => <Heading>Heading</Heading>;

//size
export const ExtraSmall = () => <Heading size="xs">Heading</Heading>;
export const Small = () => <Heading size="sm">Heading</Heading>;
export const Medium = () => <Heading size="md">Heading</Heading>;

//color
export const Primary = () => <Heading color="primary">Heading</Heading>;
