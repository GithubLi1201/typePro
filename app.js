"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// 获取 DOM 元素cxv        
const userList = document.getElementById('user-list');
const loadingDiv = document.getElementById('loading');
// 从 API 获取用户数据
function fetchUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch('https://jsonplaceholder.typicode.com/users');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const users = yield response.json();
            displayUsers(users);
        }
        catch (error) {
            console.error('Error fetching users:', error);
        }
        finally {
            loadingDiv.style.display = 'none';
        }
    });
}
// 显示用户数据
function displayUsers(users) {
    userList.innerHTML = ''; // 清空列表
    users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = `${user.username}  (${user.phone})`;
        userList.appendChild(listItem);
    });
}
// 调用 fetchUsers 函数
fetchUsers();
