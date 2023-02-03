import React, { useRef } from 'react';
import Button from './Button';

const Input = ({ setInputValue, resetFilters }: {
	setInputValue: (value: string) => void,
	resetFilters: () => void
}) => {
	const inputRef = useRef<HTMLInputElement>(null);

	const handleOnChange = () => {
		const value = inputRef.current.value;
		setInputValue(value);
	}

	const resetInput = () => {
		inputRef.current.value = '';
	}
	return (
		<section className="section">
			<div>
				<input className="input" type="text" onChange={handleOnChange} ref={inputRef} />
			</div>
			<Button
				resetFilters={resetFilters}
				resetInput={resetInput}
			/>
		</section>
	)
}

export default Input;