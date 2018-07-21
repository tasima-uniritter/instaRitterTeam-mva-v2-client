import { Injectable } from "../../../node_modules/@angular/core";
import { Photo } from "../../model/photo";

@Injectable()
export class PhotoService {

    validar(photo: Photo) {
        this.validarObrigatoriedadeNomeUsuario(photo)
        this.validarObrigatoriedadeImagem(photo)
        this.validarObrigatoriedadeLegenda(photo)
        this.validarObrigatoriedadeData(photo)
    }

    private validarObrigatoriedadeNomeUsuario(photo: Photo) {
        if (!photo.nomeUsuario || !photo.nomeUsuario.trim())
            throw new Error("Informe o nome do usuário.")
    }

    private validarObrigatoriedadeImagem(photo: Photo) {
        if (!photo.imagem)
            throw new Error("Selecione a imagem.")
    }

    private validarObrigatoriedadeLegenda(photo: Photo) {
        if (!photo.legenda || !photo.legenda.trim())
            throw new Error("Informe a legenda.")
    }

    private validarObrigatoriedadeData(photo: Photo) {
        if (!photo.data)
            throw new Error("Informe a data.")
    }
}