import * as React from "react";
import { connect } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./loader.css";
class Loader extends React.Component {
  render() {
    const { isLoading } = this.props;
    return (
      <div>
        {isLoading && (
          <div className={"loader"}>
            <CircularProgress />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ Loader }) => ({
  isLoading: Loader.isLoading
});

export default connect(mapStateToProps)(Loader);
