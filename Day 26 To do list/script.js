function addTask() {
            const taskInput = document.getElementById('task-input');
            const taskList = document.getElementById('task-list');

            if (taskInput.value.trim() !== '') {
                const li = document.createElement('li');
                li.innerHTML = `
                    <div class="task-content">
                        <input type="checkbox" onclick="toggleTask(this)">
                        <span>${taskInput.value}</span>
                    </div>
                    <button onclick="removeTask(this)">Delete</button>
                `;
                taskList.appendChild(li);
                taskInput.value = '';
            }
        }

        function toggleTask(checkbox) {
            const taskText = checkbox.nextElementSibling;
            if (checkbox.checked) {
                taskText.classList.add('completed');
            } else {
                taskText.classList.remove('completed');
            }
        }

        function removeTask(button) {
            const li = button.parentElement;
            li.remove();
        }