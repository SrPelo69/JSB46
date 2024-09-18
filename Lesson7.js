// DOM (Document Object Model) Là một mô hình sử dụng để đại diện và tương tác với tài liệu HTML

// Truy cập các phần tử
var title = document.getElementById('title');
var textbutton = document.getElementById('ChangeTextButton');
var colorbutton = document.getElementById('ChangeColorButton');
var addElementButton = document.getElementById('addElementButton');
var RemoveElement = document.getElementById('RemoveElement');
var AddNumber = document.getElementById('AddNumber');
var toggleButton = document.getElementById('toggleButton');
var warning = document.getElementById('warning');


// Thay đổi nội dung của phần tử
textbutton.addEventListener('click', function() {
    title.textContent = "Cường hết bị trĩ"
})

// Thay đổi màu background
//textbutton.addEventListener('click', function() {
//    document.body.style.backgroundColor = "red";
//})
var textbutton = document.getElementById('ChangeTextButton');
textbutton.addEventListener('click', function() {
    if (document.body.style.backgroundColor === "red") {
        document.body.style.backgroundColor = "";
    } else {
        document.body.style.backgroundColor = "red";
    }
});


// Thêm phần tử mới
addElementButton.addEventListener('click', function() {
    var newElement = document.createElement("p")
    newElement.textContent = "Cường bị trĩ tổng hợp lần 2"
    document.body.appendChild(newElement)
});

// Xóa phần tử 
RemoveElement.addEventListener("click", function () {
    var elements = document.querySelectorAll("p");
    if (elements.length > 0) {
        var lastElement = elements[elements.length - 1];
        lastElement.parentNode.removeChild(lastElement)
    }
});

// Thay đổi thành gì gì đấy

var num = 0;
AddNumber.addEventListener("click", function() {
    title.textContent = num
    num ++;
    if (num === 10) {}
})

// toggle ẩn hiện
toggleButton.addEventListener("click", function() {
    if (warning.style.display === "none") {
        warning.style.display = "block"
    } else {
        warning.style.display = "none"
    }
})

