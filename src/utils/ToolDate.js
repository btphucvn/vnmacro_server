class ToolDate {
    static Convert_TimeStamp_To_YYYYMMDD (UNIX_timestamp) {
        var a = new Date(UNIX_timestamp * 1000);
        var year = a.getFullYear();
        var month = a.getMonth()+1;
        var date = a.getDate();
        var time = year+"-"+month+"-"+date;
        return time;
    }
}

export default ToolDate;