import Notification from "./Notification";
import NotificationList from "./NotificationList";

const React_0818_proj = () => {
    return (
        <div>
            <p>chapter 5</p>
            <NotificationList /><hr />
           
            <Ex_cont>
                <Ex_context1 />
               
            </Ex_cont>
            {/* 외부 js  */}
            <Ex_js_2 />
            <Ex_zustand_3 />
            <Provider store={store_redux}>
                <Ex_redux_4 />
            </Provider>

        </div>
    );
};

export default React_0818_proj;