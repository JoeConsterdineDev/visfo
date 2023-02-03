import React from 'react';

const Button = ({ resetFilters, resetInput }: {
	resetFilters: () => void,
	resetInput: () => void
}) => {
	const reset = () => {
		resetFilters();
		resetInput();
	}
	return (
		<button className="button" onClick={reset}>Reset Filters</button>
	)
}

export default Button;