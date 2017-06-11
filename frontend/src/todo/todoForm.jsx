import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Grid from '../template/grid';
import IconButtom from '../template/iconButton';
import { changeDescription } from './todoActions';

const TodoForm = props => {
    const keyHandler = (e) => {
        if(e.key === 'Enter') {
            e.ctrlKey ? props.handleSearch() : props.handleAdd()
        } else if (e.key === 'Escape') {
            props.handleClear();
        }
    }

    return (
        <div role='form' className='todoForm'>
            <Grid cols='12 9 10'>
                <input
                    id='description'
                    className='form-control'
                    placeholder='Add a task'
                    value={props.description}
                    onChange={props.changeDescription}
                    onKeyUp={keyHandler}></input>
            </Grid>
            <Grid cols='12 3 2'>
                <IconButtom
                    style='primary'
                    icon='plus'
                    onClick={props.handleAdd}></IconButtom>
                <IconButtom
                    style='info'
                    icon='search'
                    onClick={props.handleSearch}></IconButtom>
                <IconButtom
                    style='default'
                    icon='close'
                    onClick={props.handleClear}></IconButtom>
            </Grid>
        </div>
    );
}

const mapStateToProps = state => ({description: state.todo.description});
const mapDispatchToProps = dispatch => bindActionCreators({ changeDescription }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);