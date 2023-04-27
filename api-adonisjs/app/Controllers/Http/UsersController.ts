import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "App/Models/User";

export default class UsersController {
  public async index({}: HttpContextContract) {
    const user = await User.all();
    return user;
  }

  public async store({}: HttpContextContract) {
    const user = await User.create({
      name: "Taina",
      email: "taina@email.com",
      password: "123456",
    });

    console.log(user.$isPersisted);
    return user;
  }

  public async show({}: HttpContextContract) {
    return "show";
  }

  public async update({}: HttpContextContract) {
    return "update";
  }

  public async destroy({}: HttpContextContract) {
    return "destroy";
  }
}

/* Método create e edit não serão usados
  pois são métodos que utilizamos quando fazemos o front junto. 
  public async edit({}: HttpContextContract) {}
  public async create({}: HttpContextContract) {}
*/
