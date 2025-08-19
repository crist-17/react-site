import Ex_cont from "./gloval1/Ex_cont";
import Ex_context1 from "./gloval1/Ex_context1";
import Ex_js_2 from "./gloval1/Ex_js_2";
import Ex_redux_4 from "./gloval1/Ex_redux_4";
import Ex_zustand_3 from "./gloval1/Ex_zustand_3";
import Notification from "./Notification";
import NotificationList from "./NotificationList";
import { Provider } from 'react-redux'
import { store_redux } from './gloval1/store_redux'
import Accommodate from "./chapter_7/Accommodate";
import ConfurmButton from "./chapter_8/ConfirmButton";
import LandingPage from "./chapter_9/LandingPage";
import AttendanceBook from "./chapter_10/AttendanceBook";

const React_0818_proj = () => {
    return (
        <div>
            <p>chapter 5</p>
            <NotificationList /><hr />
            <ConfurmButton/><hr />
            <LandingPage/><hr />
            <AttendanceBook/><hr />
            <Ex_cont>
                <Ex_context1 />
               
            </Ex_cont>
            {/* 외부 js  */}
            <Ex_js_2 />
            <Ex_zustand_3 />
            <Provider store={store_redux}>
                <Ex_redux_4 />
            </Provider>
            <Accommodate/>
        </div>
    );
};

export default React_0818_proj;