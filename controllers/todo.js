const Todo=require("../models/Todo");
const moment=require("moment")

const homeController =async(req,res,next)=>{
    try {
        const todos= await Todo.find({}).sort({createdAt:-1});
        res.locals.moment=moment;
        res.render("index",{title:"List todo",todos});
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }
}


const addTodoFormController =(req,res,next)=>{
    try {
        res.render("newTodo",{title:"New todo"})
        
    } catch (error) {
        res.status(500).json({message:error.message})  
    }
}

const updateTodoController =async(req,res,next)=>{
    try {
        const {id}=req.query;
        const todo =await Todo.findById(id);
        res.render("updateTodo",{title:"Update todo",todo})
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }
}

const deleteTodoController =async(req,res,next)=>{
    try {
        const{id}=req.query;
        const todo =await Todo.findById(id);
        res.render("deleteTodo",{title:"Delete todo",todo})
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }
}

const addTodoController=async(req,res,next)=>{
    try {
        const{title,desc}=req.body;

        const newTodo= new Todo({title,desc})
        await newTodo.save();
        res.redirect("/")
        
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }
}

const updateTodoController2=async(req,res,next)=>{
    try {
       const{id}=req.params
       const{title,desc}=req.body;
       const todo=await Todo.findById(id);
       if(!todo){
        return res.status(404).json({message:"Todo not found"})
       }

       todo.title=title;
       todo.desc=desc;
       await todo.save();
       res.redirect("/")

        
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }
}

const deletetodocontrol=async(req,res,next)=>{
    try {
       const{id}=req.params
       
       await Todo.findByIdAndDelete(id);
       res.redirect("/")

        
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }
}
module.exports={deletetodocontrol,homeController,addTodoFormController,updateTodoController,deleteTodoController,addTodoController,updateTodoController2}