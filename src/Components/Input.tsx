import React, { useRef } from 'react';

const Input = ({ setInputValue }: {
	setInputValue: (value: string) => void
}) => {
	const inputRef = useRef<HTMLInputElement>(null);

	const handleOnChange = () => {
		const value = inputRef.current.value;
		setInputValue(value);
	}
	return (
		<section className="section">
			<input className="input" type="text" onChange={handleOnChange} ref={inputRef} />
		</section>
	)
}

export default Input;