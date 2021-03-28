


export default class APIService {
    
    static UpdateArticle(article_id, body, token) {

     return fetch(`http://127.0.0.1:8000/api/apis/category/${article_id}/`, {
        'method':'PUT',
        headers: {
            'Content-Type':'application/json',
            'Authorization':`Token ${token}` 
          }, 
          body:JSON.stringify(body)

     }).then(resp => resp.json())


    }

    static InsertArticle(body, token) {

      return fetch('http://127.0.0.1:8000/api/apis/category/', {
        'method':'POST',
        headers: {
            'Content-Type':'application/json',
            'Authorization':`Token ${token}` 
          }, 
          body:JSON.stringify(body)

      }).then(resp => resp.json())

    }






    static DeleteArticle(article_id, token) {

      return fetch(`http://127.0.0.1:8000/api/apis/category/${article_id}/`, {
        'method':'DELETE',
        headers: {
            'Content-Type':'application/json',
            'Authorization':`Token ${token}` 
          }

     })

    }

    static LoginUser(body) {

      return fetch('http://127.0.0.1:8000/auth/', {
        'method':'POST',
        headers: {
            'Content-Type':'application/json',
          }, 
          body:JSON.stringify(body)

      }).then(resp => resp.json())
      .then(data=>
        console.log(data)
      )
      .catch(err => console.log(err))
       

    }


    static RegisterUser(body) {

      return fetch('http://127.0.0.1:8000/api/apis/users/', {
        'method':'POST',
        headers: {
            'Content-Type':'application/json',
            'Authorization':`Token d03ef30f3aa3b550c60d69d1134a7b38d10526e2`
           
          }, 
          body:JSON.stringify(body)

      }).then(resp => resp.json())

    }


    //Contact Us page
    static ContactUs(event) {

      return fetch('http://127.0.0.1:8000/api/apis/ContactUs/', {
        'method':'POST',
        headers: {
            'Content-Type':'application/json',
            'Authorization':`Token d03ef30f3aa3b550c60d69d1134a7b38d10526e2`
           
          }, 
          body:JSON.stringify(event)

      }).then(response => response.json())

    }

      //Contact Us page
      static Todo(e,uri) {

        return fetch(`${uri}`, {
          'method':'POST',
          headers: {
              'Content-Type':'application/json',
              'Authorization':`Token d03ef30f3aa3b550c60d69d1134a7b38d10526e2`
             
            }, 
            body:JSON.stringify(e)
  
        }).then(response => response.json())
  
      }

      static DeleteTodo(todo_id,url) {

        return fetch(`${url}/${todo_id}/`, {
          'method':'DELETE',
          headers: {
              'Content-Type':'application/json',
              'Authorization':`Token d03ef30f3aa3b550c60d69d1134a7b38d10526e2` 
            }
  
       })
  
      }

}