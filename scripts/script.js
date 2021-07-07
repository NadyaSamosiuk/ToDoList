
let toDo = function Todo (){
    let todoArr = []
   
    this.create = function(){
        let htmlTodo = `<h1 class="title">To Do Lists</h1>
                        <div class= "todo_option" >
                            <input type="text" id="todo__input">
                        </div>
                        <div class="todos">
                            <ul id="todos__lists">
                            </ul>
                        </div>`
        let element = document.querySelector('.todo__list')
        element.innerHTML=htmlTodo

        let input = document.querySelector('#todo__input')
        input.addEventListener('keyup', (e)=>{
            if(e.keyCode == '13'){                
                this.add(e.target.value)                
                e.target.value=""
            }            
        })       
    }

    this.add = function(task){
        let todoTask = {
            todo: task,
            flag: true
        }
        todoArr.push(todoTask)
        console.log(todoArr) 
        this.show()       
    }
   
    this.delete = function(id){
        todoArr.splice(id,1);
        this.show()
    }

    this.edit = function(id){
        todoArr[id].todo= prompt()
        this.show()
    }

    this.show = function(){
        let elementUl = document.querySelector('#todos__lists')

        elementUl.innerHTML = ""

        todoArr.forEach((item,index)=>{
            let li = document.createElement('li')
            li.classList.add('todo__li')
            li.innerHTML=`<input type="checkbox" class="btn__checked" id="${index}">${item.todo}<br> <button class="btn__delete" id="${index}">Delete</button><button class="btn__edit" id="${index}">Edit</button>`

            elementUl.appendChild(li)
        })

        let checkedBtn = document.querySelectorAll('.btn__checked')

        checkedBtn.forEach((item, index)=>{
            item.addEventListener('click', (event)=>{
                let id = event.target
                id.parentElement.classList.toggle('active') 
             })
        })

        let deleteBtn = document.querySelectorAll('.btn__delete')

        deleteBtn.forEach((btn,index) =>{
            btn.addEventListener('click', (event)=>{
                let id = +event.target.id
                this.delete(id)
            })
            console.log()
        })

        
        let editBtn = document.querySelectorAll('.btn__edit')

        editBtn.forEach((item, index)=>{
            item.addEventListener('click', (event)=>{
                let id = event.target.id
                this.edit(id)
            })
        })     
    }
}

window.addEventListener('load',()=>{
    let todo = new toDo()
    todo.create();
})