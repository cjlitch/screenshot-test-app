import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import styled from 'styled-components';
import styleguide from '../../styleguide';

export default class BirthdaySelect extends Component {
    static propTypes = {
        label: PropTypes.string.isRequired,
        options: PropTypes.array.isRequired,
        onChange: PropTypes.func.isRequired,
    }

    state = {
        selectedOption: '',
    }
  
    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        this.props.onChange(selectedOption);
    }

    render() {
        return (
            <StyledSelect data-test="birthday-select">
                <Label htmlFor={this.props.label}>
                    {this.props.label}
                </Label>
                <Select
                    name={this.props.label}
                    value={this.state.selectedOption.value}
                    onChange={this.handleChange}
                    clearable={false}
                    options={this.props.options} />
            </StyledSelect>
        );
    }
}

const Label = styled.label`
    font-family: ${styleguide.fonts.spectral};
    color: ${styleguide.colors.grayTundora};
    font-weight: 400;
`;

const StyledSelect = styled.div`
    margin-top: 20px;
    max-width: 200px;`
;
