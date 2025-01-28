class Task { 
    constructor (title, description, date){
    this._title = title;
    this._description = description;
    this._date = date;    
};

    get title(){
        return this._title;
    };

    set title(newTitle){
        this._title = newTitle;
    }

    get description(){
        return this._description;
    };

    set description(newDescription){
        this._description = newDescription;
    }

    get date(){
        return this._date;
    };

    set date(newDate){
        this._date = newDate;
    }
};
export { Task };

function createTaskDOM(){
    const content = document.getElementById('content');
    const taskCard = document.createElement('div');
    taskCard.className = 'card';
    content.appendChild(taskCard);
    

    const id = generateID();
    const form = createForm(id);
    taskCard.appendChild(form);
};
export { createTaskDOM }

function generateID(id){
    id = Math.random().toString(36).slice(2,9);
    return id;
};



export { generateID }

function createForm(id){
    const form = document.createElement('form');


    const titleLabel = document.createElement('label');
    titleLabel.textContent = 'Title'
    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.name = 'title';
    form.appendChild(titleLabel)
    form.appendChild(titleInput)

    const descLabel = document.createElement('label');
    descLabel.textContent = 'Description'
    const descInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.name = 'description';
    form.appendChild(descLabel)
    form.appendChild(descInput)

    const dateLabel = document.createElement('label');
    dateLabel.textContent = 'Due Date'
    const dateInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.name = 'dueDate';
    form.appendChild(dateLabel)
    form.appendChild(dateInput)

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit';
    form.appendChild(submitButton);

        form.addEventListener('submit', function (event) {
            event.preventDefault(); 
            const title = titleInput.value;
            const description = descInput.value;
            const dueDate = dateInput.value;
    
            createCard(title, description, dueDate);
    
            form.parentElement.remove();
        });

    return form;
}

function createCard(title, description, dueDate) {
    const content = document.getElementById('content'); 
    const card = document.createElement('div');
    card.className = 'card';

    const titleElement = document.createElement('h3');
    titleElement.textContent = title;

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = description;

    const dueDateElement = document.createElement('p');
    dueDateElement.textContent = `Due Date: ${dueDate}`;

    card.appendChild(titleElement);
    card.appendChild(descriptionElement);
    card.appendChild(dueDateElement);

    content.appendChild(card);
}