const Input = ({ placeholder, width, value, onchange }) => {
	return (
		<>
			<input type="text"
				className={`
					px-4 py-3
					${width} text-gray-500 caret-gray-500 drop-shadow-lg
					focus:outline-0 focus:ring-1 focus:ring-gray-300
				`}
				placeholder={placeholder}
				value={value}
				onChange={onchange}
			/>
		</>
	)
}

export default Input