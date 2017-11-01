export default function log(target) {

	const componentWillMount = target.prototype.componentWillMount;
    target.prototype.componentWillMount = function(){
    	console.log('componentWillMount...');
    	componentWillMount&&componentWillMount.call(this);
    }
	
	const render = target.prototype.render;

	target.prototype.render = function() {
		console.log('render...');
		return render.call(this);
	}

	const oldComponentDidMount = target.prototype.componentDidMount;
	target.prototype.componentDidMount = function() {
		console.log('componentDidMount...');
		oldComponentDidMount&&oldComponentDidMount.call(this);
	}

	const componentWillUnMount = target.prototype.componentWillUnMount;
    target.prototype.componentWillUnMount = function() {
    	console.log('componentWillUnMount...');
		componentWillUnMount&&componentWillUnMount.call(this);
	}

	const componentWillReceiveProps = target.prototype.componentWillReceiveProps;
	target.prototype.componentWillReceiveProps = function() {
		console.log('componentWillReceiveProps...');
		componentWillReceiveProps&&componentWillReceiveProps.call(this);
	}

	const shouldComponentUpdate = target.prototype.shouldComponentUpdate;
	target.prototype.shouldComponentUpdate = function() {
		console.log('shouldComponentUpdate...');
		return shouldComponentUpdate.call(this);
	}
    
    const componentWillUpdate = target.prototype.componentWillUpdate;
    target.prototype.componentWillUpdate = function() {
    	console.log('componentWillUpdate...');
    	componentWillUpdate&&componentWillUpdate.call(this);
    }

    const componentDidUpdate = target.prototype.componentDidUpdate;
    target.prototype.componentDidUpdate = function() {
    	console.log('componentDidUpdate...');
    	componentDidUpdate&&componentDidUpdate.call(this);
    } 


}