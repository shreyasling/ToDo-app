
const express=require("express")
const router =express.Router();
const todo =require("../controllers/todo")

router.get("/",todo.homeController)


router.get("/add-todo",todo.addTodoFormController)

router.get("/update-todo",todo.updateTodoController)


router.get("/delete-todo",todo.deleteTodoController)


router.post("/add-todo",todo.addTodoController)

router.post("/update-todo/:id",todo.updateTodoController2)

router.get("/delete-todo/:id",todo.deletetodocontrol);

module.exports=router;