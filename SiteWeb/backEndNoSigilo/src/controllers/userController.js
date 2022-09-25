import User from '../models/userModel'


//List all users
async function index(req, res){
    const  users = await User.findAll()
   return res.json(users)
}

//Create a user
async function create(req, res){
    const {name,  tel, city, state, active, datecad} = req.body
    const user = await User.create({ name, city, state, active, tel, datecad })
    return res.status(201).json(user)
}

//Show a single user
async function show(req, res){
    const {id} = req.params
    const user = await User.findByPk(id)

    if (!user) {
        return res.status(400).json({ message: ` User with id ${id} not found!`})
    }
    return res.json(user)
}

//Update a user
async function update(req, res){
    const {id} = req.params
    const {name,  tel, city, state, active, datecad} = req.body

    let user = await User.findByPk(id)

    if (!user) {
        return res.status(400).json({ message: ` User with id ${id} not found!`})
    }

    user.name = name
    user.tel = tel
    user.city = city
    user.state = state
    user.active = active
    user.datecad = datecad

    await user.save()
    
    return res.json(user)
    
}

//Remove a usser
async function destroy(req, res){
    const {id} = req.params

    const user = await User.findByPk(id)

    if (!user) {
        return res.status(400).json({ message: ` User with id ${id} not found!!!`})
    }

    await user.destroy(id)
    return res.status(204).json()
    
}

export default {index, create, show, update, destroy}

