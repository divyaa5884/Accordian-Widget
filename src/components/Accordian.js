import React, {useState} from 'react';
import './../App.css'
const Accordian = ({items}) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [count, increaseCount] = useState(0);

	const onTitleClicked = ((index) => {
		setActiveIndex(index);
	})

	const onButtonClick = (() => {
		increaseCount(count+1);
	})

	const allItems = items.map((item, index) => {
		const toShow = activeIndex === index ? 'show' : 'hide';
		const icon = activeIndex === index ? 'down' : 'right';
	  	return (
	  		<div key={item.title} className="ui segment">
	  			<h3 className="ui header" 
	  				onClick = {() => onTitleClicked(index)} >
	  				<i className={`caret icon ${icon}`}></i>
	  				{item.title}
	  			</h3>
	  			<p className={`ui content ${toShow}`} >{item.content}</p>
	  		</div>
	  	);
	})

	return (
		<div className = "ui container" >
			{allItems}
			<button className = "ui button primary" onClick={onButtonClick}>Increase Count</button>
			<span className = "show-count">{count}</span>
		</div>
	)
}

export default Accordian;