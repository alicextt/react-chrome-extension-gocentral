import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import * as TodoActions from '../actions/todos';
import style from './App.css';

@connect(
  state => ({
    todos: state.todos,
    accounts: state.accounts
  }),
  dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
  })
)
export default class App extends Component {

  static propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };

  constructor(props, context){
    super(props, context);
    this.state = { active : 'accounts'}
  }

  handleChangeTab = (ch) => {
    this.setState({ active: ch});
  }

  render() {
    const { todos, accounts, actions, domain, websiteId } = this.props;
    const { active } = this.state;

    return (
      <div className={style.normal}>
        <Header changeTab={ this.handleChangeTab } active={active} />
        <MainSection todos={todos} actions={actions} accounts={accounts} active={active}
        domain={domain} changeTab={ this.handleChangeTab } websiteId={websiteId}/>
      </div>
    );
  }
}
