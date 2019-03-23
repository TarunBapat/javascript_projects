/*
let x=document.getElementsByClassName('title');

console.log(Array.isArray(Array.from(x)));

let y=Array.from(x);
y.forEach(function(value){
    console.log(value)
    
})


var z=document.querySelectorAll("#Book_List li .name")
console.log(z);
Array.from(z).forEach(function(list){
    list.textContent+='(title)'
})

const p=document.querySelector('#Book_List');
p.innerHTML='<h2>replace whole thing</h2>';



var x=document.querySelector('#page_banner .book_store')
console.log(x);
x.hasChildNodes()
x.cloneNode(true)
x.cloneNode(false)


const w=document.querySelector('#page_banner')
console.log(w);

const x=document.querySelectorAll('#Book_List .delete')
Array.from(x).forEach(function(btn){
    btn.addEventListener('click',function(e){
        const li=e.target.parentElement
        li.parentNode.removeChild(li)
        
    })
    
})
*/

const list=document.querySelector('#Book_List ul')
list.addEventListener('click',function(e){
    if(e.target.className='delete'){
        const li=e.target.parentElement
        list.removeChild(li)
    }
    
})

const addForm=document.forms['addbook']
addForm.addEventListener('submit',function(e){
    e.preventDefault()
    const value=addForm.querySelector('input[type="text"]').value
    console.log(value)

    
    
    //create elements

    const li=document.createElement('li')
    const bookName=document.createElement('span')
    const deleteBtn=document.createElement('span')

    bookName.classList.add('name')
    deleteBtn.className='btn btn-primary btn-sm'
    li.className='list'



    // add values
    bookName.textContent=value
    deleteBtn.textContent='delete'
    li.appendChild(bookName)
    li.appendChild(deleteBtn)

    list.appendChild(li)


})
//hide books
const hide=document.querySelector('#hide')
hide.addEventListener('change',function(e){
    if(hide.checked){
        list.style.display='none'
    }
    else{
        list.style.display='initial'
    }
})

//search field

const searchBar=document.forms['search'].querySelector('input')
searchBar.addEventListener('keyup',function(e){
    const term=e.target.value.toLowerCase()
    const books=list.getElementsByTagName('li')
    Array.from(books).forEach(function(book){
        const title=book.firstElementChild.textContent
        if(title.toLowerCase().indexOf(term)!=-1){
            book.style.display='block'
        }
        else{
            book.style.display='none'
        
        }
    })

})




