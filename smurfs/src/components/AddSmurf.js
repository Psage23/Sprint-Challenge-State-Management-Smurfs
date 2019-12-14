import React, {  useState } from 'react';

const AddSmurfs = ({ addSmurf }) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        addSmurf({
            name,
            age,
            height
        });
        setName('');
        setAge('');
        setHeight('');
    };

    return (
        <div>
            <form onSubmit={onSubmit} className="form">
                <h2>Add Smurf:</h2>
                <input
                    placeholder="Name"
                    className="input"
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)} />
                <input
                    placeholder="Age"
                    className="input"
                    type="text"
                    value={age}
                    onChange={e => setAge(e.target.value)} />
                <input
                    placeholder="Height"
                    className="input"
                    type="text"
                    value={height}
                    onChange={e => setHeight(e.target.value)} />
                <button type="submit">Add Smurf</button>
            </form>
        </div>
    )
}

export default AddSmurfs;