import { PhotoService } from './photo.service'
import { Photo } from '../../model/photo';
describe('PhotoTest', () => {

  let service: PhotoService
  let photo: Photo

  beforeEach(() => {
    service = new PhotoService
    photo = new Photo
  })

  it('Deve exibir mensagem de obrigatoriedade para o campo legenda', () => {
    photo.legenda = " "
    expect(() => service.validar(photo)).toThrow(new Error("Informe a legenda."))

    photo.legenda = null
    expect(() => service.validar(photo)).toThrow(new Error("Informe a legenda."))
  })

  it('Deve exibir mensagem de obrigatoriedade para o campo nome usuario', () => {
    photo.legenda = "Visitando a capital do Chile."
    photo.nomeUsuario = " "
    expect(() => service.validar(photo)).toThrow(new Error("Informe o nome do usuário."))

    photo.nomeUsuario = null
    expect(() => service.validar(photo)).toThrow(new Error("Informe o nome do usuário."))
  })
})
