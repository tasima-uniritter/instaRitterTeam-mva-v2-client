import { Injectable } from "../../../node_modules/@angular/core";
import { Photo } from "../../model/photo";

@Injectable()
export class PhotoService {

    validar(photo : Photo){
        this.validarObrigatoriedadeLegenda(photo)
        this.validarObrigatoriedadeNomeUsuario(photo)
    }

    private validarObrigatoriedadeLegenda(photo : Photo){
        if(!photo.legenda || !photo.legenda.trim())
           throw new Error("Informe a legenda.")
    }

    private validarObrigatoriedadeNomeUsuario(photo : Photo){
        if(!photo.nomeUsuario || !photo.nomeUsuario.trim())
           throw new Error("Informe o nome do usuário.")
    }  
}