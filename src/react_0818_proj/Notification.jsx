import React from "react"

const styles = {
     wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
        justifyContent: "space-between",
        alignItems: "center",
    },
    messageText: {
        color: "black",
        fontSize: 16,
    },
    logText: {
        color: "gray",
        fontSize: 12,
        marginLeft: 12,
    },
}

class Notification extends React.Component {
    constructor(props) {
        super(props) 

        this.state = {
            log: "", // 로그를 state로 관리
        }
    }

    componentDidMount() {
        
        this.setState({
            log: `${this.props.id} componentDidMount() called.`,

        })
    }

    componentDidUpdate(prevProps, prevState) {
    const msg = `${this.props.id} componentDidUpdate() called.`;
    if (prevState.log !== msg) {
      this.setState({ log: msg }); // 가드 있음: 한 번만 갱신
    }
  }
    
    componentWillUnmount() {

    }
    render() {
        const {message, hide } = this.props
        return (
            <div style={styles.wrapper}>
                 <span style={{ ...styles.messageText, visibility: hide ? "hidden" : "visible" }}>
          {message}
        </span>
            </div>
        )
    }
}

export default Notification