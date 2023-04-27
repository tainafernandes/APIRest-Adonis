import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class UsersController {
  public async index({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}

/* Método create e edit não serão usados
  pois são métodos que utilizamos quando fazemos o front junto. 
  public async edit({}: HttpContextContract) {}
  public async create({}: HttpContextContract) {}
*/
