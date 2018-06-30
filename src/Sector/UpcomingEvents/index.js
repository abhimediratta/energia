import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

import { fetchEvents } from '../../Store/Event/duck/actions';
import EventsList from '../EventsList';


class UpcomingEvents extends Component {
    componentDidMount() {
        this.props.getEvents(this.props.sectorId);
    }

    render() {
        const { upcomingEvents } = this.props;
        return (
            <EventsList eventsList={upcomingEvents} />
        );
    }
}

const getUpcomingEvents = (events) => {
    var today = new Date();
    today.setHours(0,0,0,0);
    return events.filter(event => {
        return Date.parse(event.eventDate) > today;
    });
};

const mapStateToProps = state => {
    return {
        upcomingEvents: getUpcomingEvents(state.event.all)
    }
};

const mapDispatchToProps = dispatch => ({
    getEvents: (sectorId) => {
        dispatch(fetchEvents(sectorId))
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(UpcomingEvents);  
