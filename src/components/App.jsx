import { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = state => {
    this.setState(prevState => {
      return {
        [state]: prevState[state] + 1,
      };
    });
  };

  totalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  totalPercentage = () => {
    if (this.totalFeedback > 0)
      return Math.round((this.state.good / this.totalFeedback()) * 100) || '-';
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback()}
          />
        </Section>
        <Section title="Statistics">
          {this.totalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.totalFeedback()}
              positivePercentage={this.totalPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
