import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class BirthdaySelect extends Component {

    state = {
        selectedOption: '',
    }
  
    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
    }

    render() {
        return (
            <div>
            <label for="day">Day</label>
            <Select
                name="day"
                value={this.state.selectedOption.value}
                onChange={this.handleChange}
                clearable={false}
                options={[
                    { value: 'one', label: 'One' },
                    { value: 'two', label: 'Two' },
                ]} />
            </div>
        );
    }
}

export default BirthdaySelect;
