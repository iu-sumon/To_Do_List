    var form = document.querySelector("#new-task-form");
	var input = document.querySelector("#new-task-input");
	var list_el = document.querySelector("#tasks");

	form.addEventListener('submit', (e) => {
	     console.log(e)
		e.preventDefault();

		var task = input.value;

		var parent = document.createElement('div');
		parent.classList.add('task');

		var child1 = document.createElement('div');
		child1.classList.add('content');

		var child2 = document.createElement('div');
		child2.classList.add('actions');

		parent.appendChild(child1);
		parent.appendChild(child2);

		var input_el = document.createElement('input');
			input_el.classList.add('text');
			input_el.type = 'text';
			input_el.value = task;
			input_el.setAttribute('readonly', 'readonly');

		child1.appendChild(input_el);

		
		
		var edit_el = document.createElement('button');
		edit_el.classList.add('edit');
		edit_el.innerText = 'Edit';

		var delete_el = document.createElement('button');
		delete_el.classList.add('delete');
		delete_el.innerText = 'Delete';

		child2.appendChild(edit_el);
		child2.appendChild(delete_el);

		

		list_el.appendChild(parent);

		input.value = '';

		edit_el.addEventListener('click', (e) => {
			if (edit_el.innerText.toLowerCase() == "edit") {
				edit_el.innerText = "Save";
				input_el.removeAttribute("readonly");
				input_el.focus();
			} else {
				edit_el.innerText = "Edit";
				input_el.setAttribute("readonly", "readonly");
			}
		});

		delete_el.addEventListener('click', (e) => {
			list_el.removeChild(parent);
		});

		
	});

	// var deleteAll = document.querySelector("#delete_all");

	//     deleteAll.addEventListener('click', (e) => {

	//     var tasksParent =document.querySelector('#tasks_parent')
	// 	    tasksParent.removeChild(list_el);

	// });