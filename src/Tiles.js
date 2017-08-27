import React from 'react';

const SingleTile = props => {
	return (
		<div className="tile is-ancestor has-text-centered">
		    <div className="tile is-parent">
		        <div className="tile is-child">{props.data[0]}</div>
		    </div>
		</div>
	)
};

const DoubleTile = props => {
	return (
		<div className="tile is-ancestor has-text-centered">
		    <div className="tile is-parent">
		        <div className="tile is-6 is-child">{props.data[0]}</div>
		        <div className="tile is-6 is-child">{props.data[1]}</div>
		    </div>
		</div>
	)
};

const TripleTile = props => {
	return (
		<div className="tile is-ancestor has-text-centered">
		    <div className="tile is-parent">
		        <div className="tile is-4 is-child">{props.data[0]}</div>
		        <div className="tile is-4 is-child">{props.data[1]}</div>
		        <div className="tile is-4 is-child">{props.data[2]}</div>
		    </div>
		</div>
	)
};

const QuadraTile = props => {
	return (
		<div className="tile is-ancestor has-text-centered">
		    <div className="tile is-parent">
		        <div className="tile is-3 is-child">{props.data[0]}</div>
		        <div className="tile is-3 is-child">{props.data[1]}</div>
		        <div className="tile is-3 is-child">{props.data[2]}</div>
		        <div className="tile is-3 is-child">{props.data[3]}</div>
		    </div>
		</div>
	)
};

const Tiles = props => {
	if (props.data.length === 1) {
		return <SingleTile data={props.data}/>
	} else if (props.data.length === 2) {
		return <DoubleTile data={props.data}/>
	} else if (props.data.length === 3) {
		return <TripleTile data={props.data}/>
	} else {
		return <QuadraTile data={props.data}/>
	}
};

export default Tiles;