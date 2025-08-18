import React from "react"
import Notification from "./Notification"

const reservedNotifications = [
    {
        id: 1,
        message: "안녕하세요, 오늘 일정을 알려드립니다.",
    },
    {
        id: 2,
        message: "점심식사 시간입니다.",
    },
    {
        id: 3,
        message: "이제 곧 미팅이 시작됩니다.",
    },
]
const INTERVAL_MS = 1500
const BLINK_MS = 500;

class NotificationList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            notifications: [],
            allShown: false,     
            blink: true,
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState((prevState) => {
                if (prevState.notifications.length < reservedNotifications.length) {
                    const index = prevState.notifications.length
                    return {
                        notifications: [
                            ...prevState.notifications,
                            reservedNotifications[index],
                        ],
                    }
                } else {
                    clearInterval(this.timer)
                     if (!this.blinkTimer) {
            this.setState({ allShown: true }); // 전부 뜸 표시
            this.blinkTimer = setInterval(() => {
              this.setState((p) => ({ blink: !p.blink }));
            }, BLINK_MS);
          }
          return prevState; // 리스트는 유지
        }
      });
    }, INTERVAL_MS);
  }


    componentWillUnmount() {
        if (this.timer) clearInterval(this.timer);
        if (this.blinkTimer) clearTimeout(this.blinkTimer);

    }

    render() {
        const { notifications, allShown, blink } = this.state;
        const hide = allShown ? !blink : false
        
        return (
            <div>
                <h3>알림 목록</h3>
                {notifications.map((n) => (
                    //  속성만 쓰지 말고 컴포넌트로 감싸기
                    <Notification key={n.id}
                        id={n.id}
                        message={n.message}
                        hide={hide}
                    />

                ))}
            </div>
        )
    }

}

export default NotificationList