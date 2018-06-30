import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

import { fetchEvents } from '../../Store/Event/duck/actions';
import EventsList from '../EventsList';


class PastEvents extends Component {
    componentDidMount() {
        this.props.getEvents(this.props.sectorId);
    }

    render() {
        const { pastEvents } = this.props;
        return (
            <EventsList eventsList={pastEvents} />
        );
    }
}

const getPastEvents = (events) => {
    var today = new Date();
    today.setHours(0,0,0,0);
    return events.filter(event => {
        return Date.parse(event.eventDate) < today;
    });
};

const mapStateToProps = state => {
    return {
        pastEvents: getPastEvents(state.event.all)
    }
};

const mapDispatchToProps = dispatch => ({
    getEvents: (sectorId) => {
        dispatch(fetchEvents(sectorId))
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(PastEvents);  
