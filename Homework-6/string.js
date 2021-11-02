var temp = "abcdeghilkamlnkjilklslgnlabcdefghijklmneopkqk";
var count = (temp.match(/a/g) || []).length; // biểu thức chính quy cho biết để tìm kiếm trên toàn bộ chuỗi thay vì chỉ tìm thấy sự xuất hiện đầu tiên.
alert(count)


