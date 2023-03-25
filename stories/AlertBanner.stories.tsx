import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import Alert from "../components/AlertBanner";


export default {
    component: Alert,
    title: 'Alert Banner'
} as ComponentMeta<typeof Alert>

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />

export const Primary = Template.bind({});

Primary.args = {
    preview: true,
    loading: false
}