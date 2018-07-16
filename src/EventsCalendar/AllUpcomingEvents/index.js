import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

import { fetchAllEvents } from '../../Store/Event/duck/actions';
import EventsList from '../../Sector/EventsList';


class AllUpcomingEvents extends Component {
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
        return Date.parse(event.startDate) > today;
    });
};

const mapStateToProps = state => {
    return {
        upcomingEvents: getUpcomingEvents(state.event.allEvents)
    }
};

const mapDispatchToProps = dispatch => ({
    getEvents: (sectorId) => {
        dispatch(fetchAllEvents())
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(AllUpcomingEvents);  
