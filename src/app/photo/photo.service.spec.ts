import { PhotoService } from './photo.service'
import { Photo } from '../../model/photo';
describe('PhotoTest', () => {

  let service: PhotoService
  let photo: Photo

  beforeEach(() => {
    service = new PhotoService
    photo = new Photo
  })

  it('Deve exibir mensagem de obrigatoriedade para o campo nome usuario', () => {
    photo.nomeUsuario = " "
    expect(() => service.validar(photo)).toThrow(new Error("Informe o nome do usuário."))

    photo.nomeUsuario = null
    expect(() => service.validar(photo)).toThrow(new Error("Informe o nome do usuário."))
  })

  it('Deve exibir mensagem de obrigatoriedade para a foto', () => {
    photo.nomeUsuario = "Ronando Nazário"

    photo.imagem = null
    expect(() => service.validar(photo)).toThrow(new Error("Selecione a imagem."))
  })

  it('Deve exibir mensagem de obrigatoriedade para o campo legenda', () => {
    photo.nomeUsuario = "Ronaldo Nazario."
    photo.imagem = new Blob

    photo.legenda = " "
    expect(() => service.validar(photo)).toThrow(new Error("Informe a legenda."))

    photo.legenda = null
    expect(() => service.validar(photo)).toThrow(new Error("Informe a legenda."))
  })
})
