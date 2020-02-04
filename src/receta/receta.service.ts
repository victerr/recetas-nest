import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Receta } from './interfaces/receta.interface';
import { Model } from 'mongoose';

@Injectable()
export class RecetaService {
    constructor(@InjectModel('Receta')
    private readonly recetaModel: Model<Receta>) { }

    async listar(): Promise<Receta[]> {
        return await this.recetaModel.find().exec();
    }

    async buscarPorId(id: string): Promise<Receta> {
        return await this.recetaModel.findById(id).exec();
    }
}
