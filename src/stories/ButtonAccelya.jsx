import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import './ButtonAccelya.css';

/**
 * Primary UI component for user interaction
 */

//#3464BC
export const ButtonAccelya = ({ primary, backgroundColor, size, label, variant, disabled, ...props }) => {
    const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';


    let theme = createTheme({
        palette: {
            primary: {
                main: '#3464BC',
            },
            secondary: {
                main: '#edf2ff',
            },
            action: {
                disabled: '#B8B8B8', // Replace with your desired color
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Button
                // style={buttonStyle.concat(size)}
                // className='customButton'
                className={`Button-label--${size}`}
                {...props}
                variant={variant}
                disabled={disabled}
            >
                {label}
            </Button>
        </ThemeProvider>
    );
};

ButtonAccelya.propTypes = {
    /**
     * Is this the principal call to action on the page?
     */
    primary: PropTypes.bool,
    /**
     * What background color to use
     */
    backgroundColor: PropTypes.string,
    /**
     * How large should the button be?
     */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /**
     * Button contents
     */
    label: PropTypes.string.isRequired,
    /**
     * Optional click handler
     */
    onClick: PropTypes.func,
};

ButtonAccelya.defaultProps = {
    backgroundColor: null,
    primary: false,
    size: 'medium',
    onClick: undefined,
};
