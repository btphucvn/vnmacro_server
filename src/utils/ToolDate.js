class ToolDate {
    static Convert_TimeStamp_To_MMYYYY(UNIX_timestamp) {
        var a = new Date(UNIX_timestamp);
        var year = a.getFullYear();
        var month = a.getMonth() + 1;
        if (month < 10) { month = "0" + month; }
        var time = month + '-' + year;
        return time;
    }
    static timeConverter(UNIX_timestamp) {
        var a = new Date(UNIX_timestamp * 1000);
        var year = a.getFullYear();
        var month = a.getMonth() + 1;
        if (month < 10) { month = "0" + month; }
        var time = month + '-' + year;
        return time;
    }
}

export default ToolDate;