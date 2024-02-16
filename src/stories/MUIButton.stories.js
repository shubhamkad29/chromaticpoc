import React from 'react';
import { Button } from "@mui/material";
import './ButtonAccelya.css'

const buttonStyle = {
    padding: '8px 16px',
};

export default {
    title: "Material/Button",
    component: Button,
    argTypes: {
        variant: { control: "text" },
        children: { control: "text" },
        onClick: { action: 'button-clicked' }
    },
    tags: ['autodocs'],
}

const Template = args => <Button style={buttonStyle} className='Button' {...args} />

export const Contained = Template.bind({})
Contained.args = {
    variant: "contained",
    children: "contained"
}

export const Text = Template.bind({})
Text.args = {
    variant: "text",
    children: "text"
}

