import React from 'react';

const SearchBox = (props) => {
	//used props to start it and it gets called down in value
	return (
		<div className='col col-sm-4'>
			<input
				className='form-control'//I have some bootstrap styling here and top.
				value={props.searchValue}//had only .value changed it to searchValue instead to get the search bar working better.
				onChange={(event) => props.setSearchValue(event.target.value)}
				placeholder='Type to search...'
			></input>
		</div>
	
	);
};

export default SearchBox;
//This calls the const name