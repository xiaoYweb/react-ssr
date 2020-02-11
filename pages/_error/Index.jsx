class Error extends React.Component {
  static getInitialProps(ctx) {
    const { res, err } = ctx;
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode }
  }

  render() {
    return (
      <p>
        {
          this.props.statusCode
            ? `An error ${this.props.statusCode} occurred on server`
            : 'An error occurred on client'
        }
      </p>
    )
  }
}

export default Error;