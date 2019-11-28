class Node{
    constructor(data){
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  class arbolBinario{
    constructor(){
      this.root = null;
    }

    // Creación del método de insertar nodo

      insertar(data){
      let nodo = new Node(data);
      if(this.root == null){
        this.root = nodo;
      }else{
        this.insertarNodo(this.root, nodo);
      } 
    }

    // Creación del método recursivo para insertar un nodo
    
    insertarNodo(root, newNode){
      if(newNode.data < root.data){
        if(root.left == null){
          root.left = newNode;
        }else{
          this.insertarNodo(root.left, newNode);
        }
      }else if(newNode.data > root.data){
        if(root.right == null){
          root.right = newNode;
        }else{
          this.insertarNodo(root.right, newNode);
        }
      }
    }

    //Obtener la raíz del árbol
    
    obtenerRaiz(){
      return this.root; 
    }
    
    //Métodos de búsqueda
    
    preOrder(root){
      if(root != null){
        console.log(root.data); 
        this.preOrder(root.left); 
        this.preOrder(root.right);
      }
    }
    
    inOrder(root){
      if(root != null){
        this.inOrder(root.left); 
        console.log(root.data); 
        this.inOrder(root.right); 
      }
    }
    
    postOrder(root){
      if(root != null){
        this.postOrder(root.left);
        this.postOrder(root.right); 
        console.log(root.data); 
      }
    }
    
  }
  
  var a = new arbolBinario();
  
  a.insertar(4);
  a.insertar(5);
  a.insertar(1);
  a.insertar(6);
  a.insertar(3);
  a.insertar(2);
  
  var root = a.obtenerRaiz();
  
  console.log('preOrder');
  a.preOrder(root);
  console.log('\n');
  
  console.log('inOrder');
  a.inOrder(root);
  console.log('\n');
  
  console.log('postOrder');
  a.postOrder(root);
  console.log('\n');