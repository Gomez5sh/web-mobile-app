/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Button from "../../components/atomic/atoms/Button/index";

export default {
  title: "Atoms/Button",
  component: Button,
};

export const Primary = () => <Button type="primary">Button primary</Button>;
export const Secondary = () => (
  <Button type="secondary">Button secondary</Button>
);
export const Tertiary = () => <Button type="tertiary">Button tertiary</Button>;
