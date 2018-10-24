/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectPeopleData } from 'containers/App/selectors';
import { fakeOnline } from 'utils/fakeData';

import { loadPeople } from '../App/actions';
import reducer from './reducer';
import saga from './saga';

import {
  ActiveUser,
  SimpleChart,
  TopWidget,
  Report,
  Statistic,
} from './components/Widgets';
import BreadCrumb from './components/BreadCrumb';
import TabSelector from './components/TabSelector';
import CardFooterLink from './components/CardFooterLink';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      dummyData: [
        51,
        72,
        53,
        94,
        65,
        56,
        37,
        88,
        69,
        40,
        51,
        82,
        38,
        68,
        74,
        83,
        77,
        86,
        54,
        43,
        35,
        60,
        59,
        23,
        65,
        45,
      ],
    };
    this.timer = this.timer.bind(this);
  }
  timer() {
    const { dummyData } = this.state;
    fakeOnline(dummyData, data => {
      this.setState({
        dummyData: data,
      });
    });
  }

  componentDidMount() {
    this.props.loadPeople();
    this.interval = setInterval(() => this.timer(), 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { peopleData } = this.props;

    return (
      <article className="content-wrapper">
        <div> {/* {JSON.stringify(this.props)} */} </div>
        <Helmet>
          <title>Home Page</title>
          <meta
            name="description"
            content="A React.js Boilerplate application homepage"
          />
        </Helmet>
        <BreadCrumb />
        <TopWidget />
        <div className="row">
          <div className="col-md-7 grid-margin">
            <TabSelector />
            <div className="card">
              <div className="card-body">
                <div className="clearfix"> </div>
                <SimpleChart />
                {
                  // selector switch
                }
              </div>
              <CardFooterLink />
            </div>
          </div>
          <div className="col-md-5 grid-margin stretch-card">
            <ActiveUser data={this.state.dummyData} page={peopleData} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 grid-margin">
            <Report
              title="What course do your users visit?"
              heading={['Courses', 'Completed', 'Completion %']}
            />
          </div>
          <div className="col-md-6 grid-margin">
            <Report
              title="Who is your most active user?"
              heading={['Users', 'Completed', 'Points']}
            />
          </div>
        </div>
        <div className="mt-5">
          <div className="mb-3">What course do your users visit?</div>
          <Statistic />
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  peopleData: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  loadPeople: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    loadPeople: () => dispatch(loadPeople()),
  };
}

const mapStateToProps = createStructuredSelector({
  peopleData: makeSelectPeopleData(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
