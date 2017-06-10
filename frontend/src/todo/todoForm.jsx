import React from 'react';
import Grid from '../template/grid';
import IconButtom from '../template/iconButton';

export default props => (
    <div role='form' className='todoForm'>
        <Grid cols='12 9 10'>
            <input
                id='description'
                className='form-control'
                placeholder='Add a task'
                value={props.description}
                onChange={props.handleChange}></input>
        </Grid>
        <Grid cols='12 3 2'>
            <IconButtom
                style='primary'
                icon='plus'
                onClick={props.handleAdd}></IconButtom>
        </Grid>
    </div>
);