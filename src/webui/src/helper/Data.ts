let LoginRuntime = {
    LoginCurrentTime: Date.now(),
    LoginCurrentRate: 0,
    QQLoginStatus: false, //得去那边注册个回调刷新
    QQQRCodeURL: ""
}
export const DataRuntime = {
    checkLoginRate: async function (RateLimit: number): Promise<boolean> {
        if (Date.now() - LoginRuntime.LoginCurrentTime > 1000 * 60) {
            LoginRuntime.LoginCurrentRate = 0;//超出时间重置限速
            return true;
        }
        if (LoginRuntime.LoginCurrentRate <= RateLimit) {
            LoginRuntime.LoginCurrentRate++;
            return true;
        }
        return false;
    }
    ,
    getQQLoginStatus: async function (): Promise<boolean> {
        return LoginRuntime.QQLoginStatus;
    }
    ,
    setQQLoginStatus: async function (status: boolean): Promise<void> {
        LoginRuntime.QQLoginStatus = status;
    }
}