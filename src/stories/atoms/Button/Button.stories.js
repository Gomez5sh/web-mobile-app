import React from "react";
import Button from "../../../components/atomic/atoms/index";

export default {
  title: "Atoms/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: "Primary",
};
