import React from 'react';
import { New, Popular } from '../../App';

export default function RatingBorder(Component) {
  return class extends React.Component {

    setRatingBorder(data) {
      if (data >= 1000) return (
        <Popular>
          <Component {...this.props} />
        </Popular>
      );
      if (data < 100) return (
        <New>
          <Component {...this.props} />
        </New>
      );
      return <Component {...this.props} />;
    }

    render() {
      return (
        <React.Fragment>
          {this.setRatingBorder(this.props.views)}
        </React.Fragment>
      );
    }
  };
}
