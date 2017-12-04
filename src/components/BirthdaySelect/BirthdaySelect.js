import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import './BirthdaySelect.css';

class BirthdaySelect extends Component {
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
            <div className="birthday-select">
                <label className="birthday-label" htmlFor={this.props.label}>
                    {this.props.label}
                </label>
                <Select
                    name={this.props.label}
                    value={this.state.selectedOption.value}
                    onChange={this.handleChange}
                    clearable={false}
                    options={this.props.options} />
            </div>
        );
    }
}

export default BirthdaySelect;
