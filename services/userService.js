import UserDAO from "../DAO/userDAO.js";
import ValidationError from "../errors/ValidationError.js";
import NoDataFoundError from "../errors/NoDataFoundError.js";

export default class UserService {
    constructor() {
        this.userDAO = new UserDAO()
    }

    async createUser(userData) {
        const usernameExist = await this.userDAO.getByUsername(userData.username)
        if (usernameExist) throw new ValidationError("Ya existe un usuario con ese nombre de usuario.")
        const user = await this.userDAO.create(userData);
        return user
    }

    async updateUser(id, userData) {
        const userToUpdate = await this.userDAO.getById(id)
        if (!userToUpdate) throw new NoDataFoundError("El usuario no existe")
        const userUpdated = await this.userDAO.update(id, userData)
        return userUpdated
    }

    async deleteUser(id) {
        const userDeleted = await this.userDAO.delete(id)
        if (!userDeleted) throw new NoDataFoundError("El usuario no existe")
        return userDeleted
    }

    async getUsers(limit) {
        const users = await this.userDAO.get(limit)
        return users
    }

    async getUser(id) {
        const user = await this.userDAO.getById(id)
        if (!user) throw new NoDataFoundError("El usuario no existe")
        return user
    }

    async login(userData) {
        const user = await this.userDAO.getByUsername(userData.username)
        if (!user) throw new ValidationError("El nombre de usuario o la contraseña son incorrectos")
        if (user.password !== userData.password) throw new ValidationError("El nombre de usuario o la contraseña son incorrectos")
        return user
    }
}