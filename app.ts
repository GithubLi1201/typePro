// 定义用户类型
interface User {
    id: number;
    username: string;
    phone:string;
    email: string;
}

// 获取 DOM 元素cxv        
const userList = document.getElementById('user-list') as HTMLUListElement;
const loadingDiv = document.getElementById('loading') as HTMLDivElement;

// 从 API 获取用户数据
async function fetchUsers(): Promise<void> {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const users: User[] = await response.json();
        displayUsers(users);
    } catch (error) {
        console.error('Error fetching users:', error);
    }finally{
        loadingDiv.style.display = 'none';
    }
}

// 显示用户数据
function displayUsers(users: User[]): void {
    userList.innerHTML = ''; // 清空列表
    users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = `${user.username}  (${user.phone})`;
        userList.appendChild(listItem);
    });
}

// 调用 fetchUsers 函数
fetchUsers();
