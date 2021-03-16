import { New, Popular } from '../../App';

export default function withHighlight(Component) {
  return function (props) {
    if (props.views >= 1000) return (
      <Popular>
        <Component {...props} />
      </Popular>
    );
    if (props.views < 100) return (
      <New>
        <Component {...props} />
      </New>
    );
    return <Component {...props} />
  }
}
